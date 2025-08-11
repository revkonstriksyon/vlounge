import { pgTable, text, serial, integer, boolean, timestamp, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const sliderItems = pgTable("slider_items", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  titleEn: text("title_en").notNull(),
  titleFr: text("title_fr").notNull(),
  titleHt: text("title_ht").notNull(),
  subtitleEn: text("subtitle_en"),
  subtitleFr: text("subtitle_fr"),
  subtitleHt: text("subtitle_ht"),
  buttonTextEn: text("button_text_en"),
  buttonTextFr: text("button_text_fr"),
  buttonTextHt: text("button_text_ht"),
  buttonLink: text("button_link"),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
});

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr").notNull(),
  nameHt: text("name_ht").notNull(),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => menuCategories.id),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr").notNull(),
  nameHt: text("name_ht").notNull(),
  descriptionEn: text("description_en"),
  descriptionFr: text("description_fr"),
  descriptionHt: text("description_ht"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleFr: text("title_fr").notNull(),
  titleHt: text("title_ht").notNull(),
  descriptionEn: text("description_en"),
  descriptionFr: text("description_fr"),
  descriptionHt: text("description_ht"),
  eventDate: timestamp("event_date").notNull(),
  eventTime: text("event_time"),
  imageUrl: text("image_url"),
  ticketUrl: text("ticket_url"),
  earlyBirdPrice: numeric("early_bird_price", { precision: 10, scale: 2 }),
  regularPrice: numeric("regular_price", { precision: 10, scale: 2 }),
  vipPrice: numeric("vip_price", { precision: 10, scale: 2 }),
  isActive: boolean("is_active").default(true),
  isArchived: boolean("is_archived").default(false),
});

export const galleryCategories = pgTable("gallery_categories", {
  id: serial("id").primaryKey(),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr").notNull(),
  nameHt: text("name_ht").notNull(),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
});

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => galleryCategories.id),
  imageUrl: text("image_url").notNull(),
  captionEn: text("caption_en"),
  captionFr: text("caption_fr"),
  captionHt: text("caption_ht"),
  isActive: boolean("is_active").default(true),
});

export const contactInfo = pgTable("contact_info", {
  id: serial("id").primaryKey(),
  addressEn: text("address_en").notNull(),
  addressFr: text("address_fr").notNull(),
  addressHt: text("address_ht").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  openingHoursEn: text("opening_hours_en"),
  openingHoursFr: text("opening_hours_fr"),
  openingHoursHt: text("opening_hours_ht"),
  instagramUrl: text("instagram_url"),
  tiktokUrl: text("tiktok_url"),
  facebookUrl: text("facebook_url"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSliderItemSchema = createInsertSchema(sliderItems).omit({
  id: true,
});

export const insertMenuCategorySchema = createInsertSchema(menuCategories).omit({
  id: true,
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertGalleryCategorySchema = createInsertSchema(galleryCategories).omit({
  id: true,
});

export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({
  id: true,
});

export const insertContactInfoSchema = createInsertSchema(contactInfo).omit({
  id: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSliderItem = z.infer<typeof insertSliderItemSchema>;
export type SliderItem = typeof sliderItems.$inferSelect;
export type InsertMenuCategory = z.infer<typeof insertMenuCategorySchema>;
export type MenuCategory = typeof menuCategories.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
export type InsertGalleryCategory = z.infer<typeof insertGalleryCategorySchema>;
export type GalleryCategory = typeof galleryCategories.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertContactInfo = z.infer<typeof insertContactInfoSchema>;
export type ContactInfo = typeof contactInfo.$inferSelect;
