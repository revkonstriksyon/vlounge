import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import session from "express-session";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { synchronizeExistingContent } from "./contentSynchronizer";
import { 
  insertUserSchema,
  insertSliderItemSchema,
  insertMenuCategorySchema,
  insertMenuItemSchema,
  insertEventSchema,
  insertGalleryCategorySchema,
  insertGalleryItemSchema,
  insertContactInfoSchema
} from "@shared/schema";

// Configure multer for file uploads
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  dest: uploadDir,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images and videos are allowed!'));
    }
  }
});

// Session configuration
declare module 'express-session' {
  interface SessionData {
    userId?: number;
    isAuthenticated?: boolean;
  }
}

// Auth middleware
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuthenticated) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Session middleware
  app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, // Set to true in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Serve uploaded files
  app.use('/uploads', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }, (await import('express')).static(uploadDir));

  // ======================
  // AUTHENTICATION ROUTES
  // ======================

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      req.session.userId = user.id;
      req.session.isAuthenticated = true;
      
      res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Could not log out" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  // Check auth status
  app.get("/api/admin/me", (req, res) => {
    if (req.session.isAuthenticated) {
      res.json({ isAuthenticated: true, userId: req.session.userId });
    } else {
      res.json({ isAuthenticated: false });
    }
  });

  // ======================
  // FILE UPLOAD ROUTES
  // ======================

  app.post("/api/admin/upload", requireAuth, upload.single('file'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const fileExtension = path.extname(req.file.originalname);
      const filename = `${Date.now()}-${Math.random().toString(36).substring(2)}${fileExtension}`;
      const newPath = path.join(uploadDir, filename);
      
      fs.renameSync(req.file.path, newPath);
      
      const fileUrl = `/uploads/${filename}`;
      res.json({ url: fileUrl, filename });
    } catch (error) {
      res.status(500).json({ message: "Upload failed" });
    }
  });

  // ======================
  // SLIDER MANAGEMENT
  // ======================

  app.get("/api/admin/slider", requireAuth, async (req, res) => {
    try {
      const items = await storage.getSliderItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch slider items" });
    }
  });

  app.post("/api/admin/slider", requireAuth, async (req, res) => {
    try {
      const result = insertSliderItemSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const item = await storage.createSliderItem(result.data);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to create slider item" });
    }
  });

  app.put("/api/admin/slider/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.updateSliderItem(id, req.body);
      
      if (!item) {
        return res.status(404).json({ message: "Slider item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to update slider item" });
    }
  });

  app.delete("/api/admin/slider/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteSliderItem(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Slider item not found" });
      }
      
      res.json({ message: "Slider item deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete slider item" });
    }
  });

  // ======================
  // MENU MANAGEMENT
  // ======================

  // Menu Categories
  app.get("/api/admin/menu/categories", requireAuth, async (req, res) => {
    try {
      const categories = await storage.getMenuCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu categories" });
    }
  });

  app.post("/api/admin/menu/categories", requireAuth, async (req, res) => {
    try {
      const result = insertMenuCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const category = await storage.createMenuCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create menu category" });
    }
  });

  app.put("/api/admin/menu/categories/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.updateMenuCategory(id, req.body);
      
      if (!category) {
        return res.status(404).json({ message: "Menu category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to update menu category" });
    }
  });

  app.delete("/api/admin/menu/categories/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteMenuCategory(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Menu category not found" });
      }
      
      res.json({ message: "Menu category deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete menu category" });
    }
  });

  // Menu Items
  app.get("/api/admin/menu/items", requireAuth, async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  app.post("/api/admin/menu/items", requireAuth, async (req, res) => {
    try {
      const result = insertMenuItemSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const item = await storage.createMenuItem(result.data);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to create menu item" });
    }
  });

  app.put("/api/admin/menu/items/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.updateMenuItem(id, req.body);
      
      if (!item) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to update menu item" });
    }
  });

  app.delete("/api/admin/menu/items/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteMenuItem(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      
      res.json({ message: "Menu item deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete menu item" });
    }
  });

  // ======================
  // EVENT MANAGEMENT
  // ======================

  app.get("/api/admin/events", requireAuth, async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.post("/api/admin/events", requireAuth, async (req, res) => {
    try {
      const result = insertEventSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const event = await storage.createEvent(result.data);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  app.put("/api/admin/events/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const event = await storage.updateEvent(id, req.body);
      
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/admin/events/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteEvent(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json({ message: "Event deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  app.post("/api/admin/events/:id/archive", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const archived = await storage.archiveEvent(id);
      
      if (!archived) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json({ message: "Event archived" });
    } catch (error) {
      res.status(500).json({ message: "Failed to archive event" });
    }
  });

  // ======================
  // GALLERY MANAGEMENT
  // ======================

  // Gallery Categories
  app.get("/api/admin/gallery/categories", requireAuth, async (req, res) => {
    try {
      const categories = await storage.getGalleryCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery categories" });
    }
  });

  app.post("/api/admin/gallery/categories", requireAuth, async (req, res) => {
    try {
      const result = insertGalleryCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const category = await storage.createGalleryCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create gallery category" });
    }
  });

  app.put("/api/admin/gallery/categories/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.updateGalleryCategory(id, req.body);
      
      if (!category) {
        return res.status(404).json({ message: "Gallery category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to update gallery category" });
    }
  });

  app.delete("/api/admin/gallery/categories/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteGalleryCategory(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Gallery category not found" });
      }
      
      res.json({ message: "Gallery category deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete gallery category" });
    }
  });

  // Gallery Items
  app.get("/api/admin/gallery/items", requireAuth, async (req, res) => {
    try {
      const items = await storage.getGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });

  app.post("/api/admin/gallery/items", requireAuth, async (req, res) => {
    try {
      const result = insertGalleryItemSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const item = await storage.createGalleryItem(result.data);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to create gallery item" });
    }
  });

  app.put("/api/admin/gallery/items/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.updateGalleryItem(id, req.body);
      
      if (!item) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to update gallery item" });
    }
  });

  app.delete("/api/admin/gallery/items/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteGalleryItem(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      
      res.json({ message: "Gallery item deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete gallery item" });
    }
  });

  // ======================
  // CONTACT INFO MANAGEMENT
  // ======================

  app.get("/api/admin/contact", requireAuth, async (req, res) => {
    try {
      const contact = await storage.getContactInfo();
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact info" });
    }
  });

  app.put("/api/admin/contact", requireAuth, async (req, res) => {
    try {
      const result = insertContactInfoSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid data", errors: result.error.errors });
      }

      const contact = await storage.updateContactInfo(result.data);
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: "Failed to update contact info" });
    }
  });

  // ======================
  // CONTENT SYNCHRONIZATION
  // ======================
  
  app.post("/api/admin/sync-content", requireAuth, async (req, res) => {
    try {
      const result = await synchronizeExistingContent(storage);
      
      if (result.success) {
        res.json({ message: result.message });
      } else {
        res.status(500).json({ message: result.message, error: result.error });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to synchronize content" });
    }
  });

  // ======================
  // PUBLIC API ROUTES (for frontend)
  // ======================

  app.get("/api/slider", async (req, res) => {
    try {
      const items = await storage.getSliderItems();
      const activeItems = items.filter(item => item.isActive);
      res.json(activeItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch slider items" });
    }
  });

  app.get("/api/menu/categories", async (req, res) => {
    try {
      const categories = await storage.getMenuCategories();
      const activeCategories = categories.filter(cat => cat.isActive);
      res.json(activeCategories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu categories" });
    }
  });

  app.get("/api/menu/items", async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      const activeItems = items.filter(item => item.isActive);
      res.json(activeItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getActiveEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/gallery/categories", async (req, res) => {
    try {
      const categories = await storage.getGalleryCategories();
      const activeCategories = categories.filter(cat => cat.isActive);
      res.json(activeCategories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery categories" });
    }
  });

  app.get("/api/gallery/items", async (req, res) => {
    try {
      const items = await storage.getGalleryItems();
      const activeItems = items.filter(item => item.isActive);
      res.json(activeItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const contact = await storage.getContactInfo();
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact info" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
