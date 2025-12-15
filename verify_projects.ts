
import { db } from "./server/db";
import { projects } from "@shared/schema";
import { eq } from "drizzle-orm";

async function verifyProjects() {
  const allProjects = await db.select().from(projects);
  
  console.log("Verified Projects Images:");npm
  for (const p of allProjects) {
    console.log(`${p.name}: ${p.image}`);
  }

  process.exit(0);
}

verifyProjects();

