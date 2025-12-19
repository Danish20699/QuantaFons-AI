import { eq } from "drizzle-orm";
import { db } from "./db";
import { 
  type User, 
  type InsertUser,
  type Product,
  type ProductSpec,
  type ProductFeature,
  type Project,
  type ProjectStat,
  type ResearchPaper,
  type Team,
  users,
  products,
  productSpecs,
  productFeatures,
  projects,
  projectStats,
  researchPapers,
  team
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductSpecs(productId: string): Promise<ProductSpec[]>;
  getProductFeatures(productId: string): Promise<ProductFeature[]>;
  
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  getProjectStats(projectId: string): Promise<ProjectStat[]>;
  
  getAllResearchPapers(): Promise<ResearchPaper[]>;
  getResearchPaperById(id: string): Promise<ResearchPaper | undefined>;
  
  getAllTeamMembers(): Promise<Team[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result[0];
  }

  async getProductSpecs(productId: string): Promise<ProductSpec[]> {
    return await db.select().from(productSpecs).where(eq(productSpecs.productId, productId));
  }

  async getProductFeatures(productId: string): Promise<ProductFeature[]> {
    return await db.select().from(productFeatures)
      .where(eq(productFeatures.productId, productId))
      .orderBy(productFeatures.displayOrder);
  }

  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    const result = await db.select().from(projects).where(eq(projects.id, id));
    return result[0];
  }

  async getProjectStats(projectId: string): Promise<ProjectStat[]> {
    return await db.select().from(projectStats).where(eq(projectStats.projectId, projectId));
  }

  async getAllResearchPapers(): Promise<ResearchPaper[]> {
    return await db.select().from(researchPapers);
  }

  async getResearchPaperById(id: string): Promise<ResearchPaper | undefined> {
    const result = await db.select().from(researchPapers).where(eq(researchPapers.id, id));
    return result[0];
  }

  async getAllTeamMembers(): Promise<Team[]> {
    return await db.select().from(team);
  }
}

export const storage = new DbStorage();
