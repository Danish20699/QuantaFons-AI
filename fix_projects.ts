

import { db } from "./server/db";
import { projects } from "@shared/schema";
import { eq } from "drizzle-orm";

async function fixProjects() {
  const projectsData = [
    {
      id: "q-build",
      image: "/attached_assets/stock_images/modern_construction__a0a3d1ca.jpg",
    },
    {
      id: "quantum-processors",
      image: "/attached_assets/stock_images/computer_processor_c_94aac89b.jpg",
    },
    {
      id: "spacecraft-shm",
      image: "/attached_assets/stock_images/satellite_in_orbit_c_9dcf5d6d.jpg",
    }
  ];

  for (const p of projectsData) {
      console.log(`Updating project ${p.id} with image ${p.image}`);

      await db.update(projects)
        .set({ image: p.image })
        .where(eq(projects.id, p.id));
  }

  console.log("Projects updated.");
  process.exit(0);
}

fixProjects();

