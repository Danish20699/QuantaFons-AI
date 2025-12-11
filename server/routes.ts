import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      const [specs, features] = await Promise.all([
        storage.getProductSpecs(req.params.id),
        storage.getProductFeatures(req.params.id)
      ]);
      
      res.json({ ...product, specs, features });
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.getProjectById(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      
      const stats = await storage.getProjectStats(req.params.id);
      res.json({ ...project, stats });
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.get("/api/research", async (req, res) => {
    try {
      const papers = await storage.getAllResearchPapers();
      res.json(papers);
    } catch (error) {
      console.error("Error fetching research papers:", error);
      res.status(500).json({ error: "Failed to fetch research papers" });
    }
  });

  app.get("/api/research/:id", async (req, res) => {
    try {
      const paper = await storage.getResearchPaperById(req.params.id);
      if (!paper) {
        return res.status(404).json({ error: "Research paper not found" });
      }
      res.json(paper);
    } catch (error) {
      console.error("Error fetching research paper:", error);
      res.status(500).json({ error: "Failed to fetch research paper" });
    }
  });

  app.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getAllTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      console.error("Error fetching team members:", error);
      res.status(500).json({ error: "Failed to fetch team members" });
    }
  });

  return httpServer;
}
