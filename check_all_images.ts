import { db } from "./server/db";
import { products, projects } from "@shared/schema";
import fs from "fs";
import path from "path";

async function checkAll() {
  const allProducts = await db.select().from(products);
  const allProjects = await db.select().from(projects);

  console.log("Checking Products:");
  for (const p of allProducts) {
    checkImage(p.name, p.image);
  }

  console.log("\nChecking Projects:");
  for (const p of allProjects) {
    checkImage(p.name, p.image);
  }

  process.exit(0);
}

function checkImage(name: string, imagePath: string) {
    const prefix = "/attached_assets/";
    let fsPath = "";
    if (imagePath.startsWith(prefix)) {
        const innerPath = imagePath.substring(prefix.length);
        fsPath = path.resolve(process.cwd(), "attached_assets", innerPath);
    } else {
        if (imagePath.startsWith("http")) {
             console.log(`[SKIP] ${name}: External URL ${imagePath}`);
             return;
        }
        fsPath = path.resolve(process.cwd(), imagePath.startsWith("/") ? imagePath.slice(1) : imagePath);
    }
    
    const exists = fs.existsSync(fsPath);
    console.log(`${name}:`);
    console.log(`  DB: ${imagePath}`);
    console.log(`  FS: ${fsPath}`);
    console.log(`  Exists: ${exists ? "YES" : "NO"}`);
}

checkAll();
