
import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  icon: text("icon").notNull(),
});

export const productSpecs = sqliteTable("product_specs", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  productId: text("product_id").notNull().references(() => products.id),
  label: text("label").notNull(),
  value: text("value").notNull(),
});

export const productFeatures = sqliteTable("product_features", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  productId: text("product_id").notNull().references(() => products.id),
  feature: text("feature").notNull(),
  displayOrder: integer("display_order").notNull(),
});

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  icon: text("icon").notNull(),
});

export const projectStats = sqliteTable("project_stats", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  projectId: text("project_id").notNull().references(() => projects.id),
  label: text("label").notNull(),
  value: text("value").notNull(),
});

export const researchPapers = sqliteTable("research_papers", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  date: text("date").notNull(),
  journal: text("journal").notNull(),
  abstract: text("abstract").notNull(),
});

export const team = sqliteTable("team", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertProductSpecSchema = createInsertSchema(productSpecs).omit({ id: true });
export const insertProductFeatureSchema = createInsertSchema(productFeatures).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertProjectStatSchema = createInsertSchema(projectStats).omit({ id: true });
export const insertResearchPaperSchema = createInsertSchema(researchPapers).omit({ id: true });
export const insertTeamSchema = createInsertSchema(team).omit({ id: true });

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
export type InsertProductSpec = z.infer<typeof insertProductSpecSchema>;
export type ProductSpec = typeof productSpecs.$inferSelect;
export type InsertProductFeature = z.infer<typeof insertProductFeatureSchema>;
export type ProductFeature = typeof productFeatures.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProjectStat = z.infer<typeof insertProjectStatSchema>;
export type ProjectStat = typeof projectStats.$inferSelect;
export type InsertResearchPaper = z.infer<typeof insertResearchPaperSchema>;
export type ResearchPaper = typeof researchPapers.$inferSelect;
export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type Team = typeof team.$inferSelect;
