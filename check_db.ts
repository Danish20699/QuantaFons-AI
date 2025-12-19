
import { db } from "./server/db";
import { products, projects } from "@shared/schema";

async function checkDb() {
  const allProducts = await db.select().from(products);
  const allProjects = await db.select().from(projects);

  console.log("Products:");
  allProducts.forEach(p => console.log(`${p.name}: ${p.image}`));

  console.log("\nProjects:");
  allProjects.forEach(p => console.log(`${p.name}: ${p.image}`));
  
  process.exit(0);
}

checkDb();

