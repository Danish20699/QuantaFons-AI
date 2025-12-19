// routes.ts

import { Express } from "express";

export function registerRoutes(app: Express) {
  // Example route for fetching products
  app.get("/api/products", async (req, res) => {
    try {
      const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ]; // Replace this with actual database fetching logic
      res.json(products); // Send products as a JSON response
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Example route for fetching projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = [
        { id: 1, name: "Project 1" },
        { id: 2, name: "Project 2" },
        { id: 3, name: "Project 3" },
      ]; // Replace this with actual database fetching logic
      res.json(projects); // Send projects as a JSON response
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
}
