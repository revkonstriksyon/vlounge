import { 
  users, 
  type User, 
  type InsertUser,
  type SliderItem,
  type InsertSliderItem,
  type MenuCategory,
  type InsertMenuCategory,
  type MenuItem,
  type InsertMenuItem,
  type Event,
  type InsertEvent,
  type GalleryCategory,
  type InsertGalleryCategory,
  type GalleryItem,
  type InsertGalleryItem,
  type ContactInfo,
  type InsertContactInfo
} from "@shared/schema";

export interface IStorage {
  // User management
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Slider management
  getSliderItems(): Promise<SliderItem[]>;
  getSliderItem(id: number): Promise<SliderItem | undefined>;
  createSliderItem(item: InsertSliderItem): Promise<SliderItem>;
  updateSliderItem(id: number, item: Partial<InsertSliderItem>): Promise<SliderItem | undefined>;
  deleteSliderItem(id: number): Promise<boolean>;
  
  // Menu category management
  getMenuCategories(): Promise<MenuCategory[]>;
  getMenuCategory(id: number): Promise<MenuCategory | undefined>;
  createMenuCategory(category: InsertMenuCategory): Promise<MenuCategory>;
  updateMenuCategory(id: number, category: Partial<InsertMenuCategory>): Promise<MenuCategory | undefined>;
  deleteMenuCategory(id: number): Promise<boolean>;
  
  // Menu item management
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined>;
  deleteMenuItem(id: number): Promise<boolean>;
  
  // Event management
  getEvents(): Promise<Event[]>;
  getActiveEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
  archiveEvent(id: number): Promise<boolean>;
  
  // Gallery category management
  getGalleryCategories(): Promise<GalleryCategory[]>;
  getGalleryCategory(id: number): Promise<GalleryCategory | undefined>;
  createGalleryCategory(category: InsertGalleryCategory): Promise<GalleryCategory>;
  updateGalleryCategory(id: number, category: Partial<InsertGalleryCategory>): Promise<GalleryCategory | undefined>;
  deleteGalleryCategory(id: number): Promise<boolean>;
  
  // Gallery item management
  getGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItemsByCategory(categoryId: number): Promise<GalleryItem[]>;
  getGalleryItem(id: number): Promise<GalleryItem | undefined>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  updateGalleryItem(id: number, item: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined>;
  deleteGalleryItem(id: number): Promise<boolean>;
  
  // Contact info management
  getContactInfo(): Promise<ContactInfo | undefined>;
  updateContactInfo(info: InsertContactInfo): Promise<ContactInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private sliderItems: Map<number, SliderItem>;
  private menuCategories: Map<number, MenuCategory>;
  private menuItems: Map<number, MenuItem>;
  private events: Map<number, Event>;
  private galleryCategories: Map<number, GalleryCategory>;
  private galleryItems: Map<number, GalleryItem>;
  private contactInfo: ContactInfo | undefined;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.sliderItems = new Map();
    this.menuCategories = new Map();
    this.menuItems = new Map();
    this.events = new Map();
    this.galleryCategories = new Map();
    this.galleryItems = new Map();
    this.currentId = 1;
    
    // Initialize with default admin user and contact info
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Create default admin user with hashed password
    const bcrypt = await import('bcryptjs');
    const hashedPassword = await bcrypt.default.hash("admin123", 10);
    await this.createUser({ username: "admin", password: hashedPassword });
    
    // Initialize default contact info
    this.contactInfo = {
      id: 1,
      addressEn: "Pétion-Ville, Haiti",
      addressFr: "Pétion-Ville, Haïti", 
      addressHt: "Pétion-Ville, Ayiti",
      phone: "+509 1234-5678",
      email: "info@vlounge.ht",
      openingHoursEn: "Monday - Sunday: 6:00 PM - 2:00 AM",
      openingHoursFr: "Lundi - Dimanche: 18:00 - 02:00",
      openingHoursHt: "Lendi - Dimanch: 6:00 PM - 2:00 AM",
      instagramUrl: "https://instagram.com/vlounge",
      tiktokUrl: "https://tiktok.com/@vlounge",
      facebookUrl: "https://facebook.com/vlounge"
    };
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Slider methods
  async getSliderItems(): Promise<SliderItem[]> {
    return Array.from(this.sliderItems.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getSliderItem(id: number): Promise<SliderItem | undefined> {
    return this.sliderItems.get(id);
  }

  async createSliderItem(item: InsertSliderItem): Promise<SliderItem> {
    const id = this.currentId++;
    const sliderItem: SliderItem = { 
      ...item, 
      id,
      subtitleEn: item.subtitleEn || null,
      subtitleFr: item.subtitleFr || null,
      subtitleHt: item.subtitleHt || null,
      buttonTextEn: item.buttonTextEn || null,
      buttonTextFr: item.buttonTextFr || null,
      buttonTextHt: item.buttonTextHt || null,
      buttonLink: item.buttonLink || null,
      order: item.order || 0,
      isActive: item.isActive !== undefined ? item.isActive : true
    };
    this.sliderItems.set(id, sliderItem);
    return sliderItem;
  }

  async updateSliderItem(id: number, item: Partial<InsertSliderItem>): Promise<SliderItem | undefined> {
    const existing = this.sliderItems.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...item };
    this.sliderItems.set(id, updated);
    return updated;
  }

  async deleteSliderItem(id: number): Promise<boolean> {
    return this.sliderItems.delete(id);
  }

  // Menu category methods
  async getMenuCategories(): Promise<MenuCategory[]> {
    return Array.from(this.menuCategories.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getMenuCategory(id: number): Promise<MenuCategory | undefined> {
    return this.menuCategories.get(id);
  }

  async createMenuCategory(category: InsertMenuCategory): Promise<MenuCategory> {
    const id = this.currentId++;
    const menuCategory: MenuCategory = { 
      ...category, 
      id,
      order: category.order || 0,
      isActive: category.isActive !== undefined ? category.isActive : true
    };
    this.menuCategories.set(id, menuCategory);
    return menuCategory;
  }

  async updateMenuCategory(id: number, category: Partial<InsertMenuCategory>): Promise<MenuCategory | undefined> {
    const existing = this.menuCategories.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...category };
    this.menuCategories.set(id, updated);
    return updated;
  }

  async deleteMenuCategory(id: number): Promise<boolean> {
    return this.menuCategories.delete(id);
  }

  // Menu item methods
  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.categoryId === categoryId);
  }

  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentId++;
    const menuItem: MenuItem = { 
      ...item, 
      id,
      categoryId: item.categoryId || null,
      descriptionEn: item.descriptionEn || null,
      descriptionFr: item.descriptionFr || null,
      descriptionHt: item.descriptionHt || null,
      imageUrl: item.imageUrl || null,
      isActive: item.isActive !== undefined ? item.isActive : true,
      isFeatured: item.isFeatured !== undefined ? item.isFeatured : false
    };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  async updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined> {
    const existing = this.menuItems.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...item };
    this.menuItems.set(id, updated);
    return updated;
  }

  async deleteMenuItem(id: number): Promise<boolean> {
    return this.menuItems.delete(id);
  }

  // Event methods
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime()
    );
  }

  async getActiveEvents(): Promise<Event[]> {
    const now = new Date();
    return Array.from(this.events.values()).filter(event => 
      event.isActive && !event.isArchived && new Date(event.eventDate) >= now
    );
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.currentId++;
    const newEvent: Event = { 
      ...event, 
      id,
      descriptionEn: event.descriptionEn || null,
      descriptionFr: event.descriptionFr || null,
      descriptionHt: event.descriptionHt || null,
      eventTime: event.eventTime || null,
      imageUrl: event.imageUrl || null,
      ticketUrl: event.ticketUrl || null,
      earlyBirdPrice: event.earlyBirdPrice || null,
      regularPrice: event.regularPrice || null,
      vipPrice: event.vipPrice || null,
      isActive: event.isActive !== undefined ? event.isActive : true,
      isArchived: event.isArchived !== undefined ? event.isArchived : false
    };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined> {
    const existing = this.events.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...event };
    this.events.set(id, updated);
    return updated;
  }

  async deleteEvent(id: number): Promise<boolean> {
    return this.events.delete(id);
  }

  async archiveEvent(id: number): Promise<boolean> {
    const event = this.events.get(id);
    if (!event) return false;
    event.isArchived = true;
    this.events.set(id, event);
    return true;
  }

  // Gallery category methods
  async getGalleryCategories(): Promise<GalleryCategory[]> {
    return Array.from(this.galleryCategories.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getGalleryCategory(id: number): Promise<GalleryCategory | undefined> {
    return this.galleryCategories.get(id);
  }

  async createGalleryCategory(category: InsertGalleryCategory): Promise<GalleryCategory> {
    const id = this.currentId++;
    const galleryCategory: GalleryCategory = { 
      ...category, 
      id,
      order: category.order || 0,
      isActive: category.isActive !== undefined ? category.isActive : true
    };
    this.galleryCategories.set(id, galleryCategory);
    return galleryCategory;
  }

  async updateGalleryCategory(id: number, category: Partial<InsertGalleryCategory>): Promise<GalleryCategory | undefined> {
    const existing = this.galleryCategories.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...category };
    this.galleryCategories.set(id, updated);
    return updated;
  }

  async deleteGalleryCategory(id: number): Promise<boolean> {
    return this.galleryCategories.delete(id);
  }

  // Gallery item methods
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async getGalleryItemsByCategory(categoryId: number): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(item => item.categoryId === categoryId);
  }

  async getGalleryItem(id: number): Promise<GalleryItem | undefined> {
    return this.galleryItems.get(id);
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const id = this.currentId++;
    const galleryItem: GalleryItem = { 
      ...item, 
      id,
      categoryId: item.categoryId || null,
      captionEn: item.captionEn || null,
      captionFr: item.captionFr || null,
      captionHt: item.captionHt || null,
      isActive: item.isActive !== undefined ? item.isActive : true
    };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }

  async updateGalleryItem(id: number, item: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined> {
    const existing = this.galleryItems.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...item };
    this.galleryItems.set(id, updated);
    return updated;
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    return this.galleryItems.delete(id);
  }

  // Contact info methods
  async getContactInfo(): Promise<ContactInfo | undefined> {
    return this.contactInfo;
  }

  async updateContactInfo(info: InsertContactInfo): Promise<ContactInfo> {
    this.contactInfo = { 
      id: 1,
      addressEn: info.addressEn,
      addressFr: info.addressFr,
      addressHt: info.addressHt,
      phone: info.phone,
      email: info.email,
      openingHoursEn: info.openingHoursEn || null,
      openingHoursFr: info.openingHoursFr || null,
      openingHoursHt: info.openingHoursHt || null,
      instagramUrl: info.instagramUrl || null,
      tiktokUrl: info.tiktokUrl || null,
      facebookUrl: info.facebookUrl || null
    };
    return this.contactInfo!;
  }
}

export const storage = new MemStorage();
