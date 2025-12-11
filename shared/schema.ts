import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  icon: text("icon").notNull(),
});

export const productSpecs = pgTable("product_specs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  productId: varchar("product_id").notNull().references(() => products.id),
  label: text("label").notNull(),
  value: text("value").notNull(),
});

export const productFeatures = pgTable("product_features", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  productId: varchar("product_id").notNull().references(() => products.id),
  feature: text("feature").notNull(),
  displayOrder: integer("display_order").notNull(),
});

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  icon: text("icon").notNull(),
});

export const projectStats = pgTable("project_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: varchar("project_id").notNull().references(() => projects.id),
  label: text("label").notNull(),
  value: text("value").notNull(),
});

export const researchPapers = pgTable("research_papers", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  date: text("date").notNull(),
  journal: text("journal").notNull(),
  abstract: text("abstract").notNull(),
});

export const team = pgTable("team", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
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
