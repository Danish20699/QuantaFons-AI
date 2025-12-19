
import { db } from "./server/db";
import { products, projects } from "@shared/schema";
import fs from "fs";
import path from "path";

async function check() {
  const allProjects = await db.select().from(projects);
  
  console.log("Checking Projects Images:");
  for (const p of allProjects) {
    const relativePath = p.image.startsWith("/") ? p.image.slice(1) : p.image;
    // The route maps /attached_assets to ./attached_assets
    // So if p.image is /attached_assets/foo.jpg, we look for ./attached_assets/foo.jpg
    
    // However, p.image is "/attached_assets/stock_images/..."
    // If we map "/attached_assets" to "./attached_assets", then "/attached_assets/stock_images/..." -> "./attached_assets/stock_images/..."
    
    // Let's construct the file path
    // Remove the leading /attached_assets/ prefix to get the path inside the directory
    const prefix = "/attached_assets/";
    let fsPath = "";
    if (p.image.startsWith(prefix)) {
        const innerPath = p.image.substring(prefix.length);
        fsPath = path.resolve(process.cwd(), "attached_assets", innerPath);
    } else {
        console.log(`[WARN] Image path does not start with ${prefix}: ${p.image}`);
        fsPath = path.resolve(process.cwd(), relativePath);
    }
    
    const exists = fs.existsSync(fsPath);
    console.log(`Project: ${p.name}`);
    console.log(`  DB Path: ${p.image}`);
    console.log(`  FS Path: ${fsPath}`);
    console.log(`  Exists: ${exists}`);
  }
  
  // Also check one product just in case
  const allProducts = await db.select().from(products);
  if (allProducts.length > 0) {
      const p = allProducts[0];
      console.log(`\nChecking Product: ${p.name}`);
      const prefix = "/attached_assets/";
      let fsPath = "";
       if (p.image.startsWith(prefix)) {
            const innerPath = p.image.substring(prefix.length);
            fsPath = path.resolve(process.cwd(), "attached_assets", innerPath);
        } else {
            fsPath = path.resolve(process.cwd(), p.image.startsWith("/") ? p.image.slice(1) : p.image);
        }
      console.log(`  DB Path: ${p.image}`);
      console.log(`  FS Path: ${fsPath}`);
      console.log(`  Exists: ${fs.existsSync(fsPath)}`);
  }

  process.exit(0);
}

check();

