import { db } from "./db";
import { products, productSpecs, productFeatures, projects, projectStats, researchPapers, team } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  const productsData = [
    {
      id: "q-secure",
      name: "Q-Secure Intelligence",
      category: "AI Security",
      tagline: "The unblinking eye of enterprise security.",
      description: "Q-Secure is not just a camera; it is a proactive security ecosystem. Leveraging edge-based neural networks, it identifies threats in real-time, distinguishing between routine activities and genuine security breaches with 99.9% accuracy.",
      image: "/assets/stock_images/modern_cctv_security_f7448f49.jpg",
      icon: "Shield"
    },
    {
      id: "q-id",
      name: "Q-ID Biometrics",
      category: "Identity Management",
      tagline: "Seamless access, absolute identity assurance.",
      description: "Q-ID revolutionizes access control by replacing cards and pins with your unique biological signature. Our 3D volumetric facial mapping technology works in total darkness and cannot be spoofed by photos or masks.",
      image: "/assets/stock_images/facial_recognition_s_415500cb.jpg",
      icon: "ScanFace"
    },
    {
      id: "eli-s1",
      name: "QuantaFONS AI (Eli S1)",
      category: "Generative AI",
      tagline: "The world's first industrial-grade reasoning engine.",
      description: "Eli S1 is a proprietary Large Language Model optimized for scientific reasoning, code generation, and complex industrial logic. Unlike general-purpose models, Eli S1 is trained on verified technical datasets to minimize hallucinations in critical tasks.",
      image: "/assets/stock_images/abstract_data_networ_7d12e022.jpg",
      icon: "Brain"
    },
    {
      id: "onco-ai",
      name: "OncoAI Research Platform",
      category: "Healthcare",
      tagline: "Accelerating the cure through data.",
      description: "OncoAI utilizes deep learning to analyze the efficacy of chemotherapy and radiotherapy protocols on patient-specific stem cell cultures. It predicts treatment outcomes with high fidelity, reducing the need for trial-and-error medication.",
      image: "/assets/stock_images/medical_laboratory_m_ce3d03b3.jpg",
      icon: "Activity"
    }
  ];

  const specsData = [
    { productId: "q-secure", label: "Resolution", value: "8K Quantum Sensor" },
    { productId: "q-secure", label: "AI Latency", value: "< 15ms" },
    { productId: "q-secure", label: "Field of View", value: "180° Panoramic" },
    { productId: "q-secure", label: "Connectivity", value: "5G / Fiber / Starlink" },
    { productId: "q-secure", label: "Encryption", value: "AES-256 + QKD Ready" },
    
    { productId: "q-id", label: "Throughput", value: "60 people/minute" },
    { productId: "q-id", label: "False Acceptance Rate", value: "1 in 10,000,000" },
    { productId: "q-id", label: "Database Capacity", value: "1M+ Identities" },
    { productId: "q-id", label: "Response Time", value: "0.2 seconds" },
    { productId: "q-id", label: "Compliance", value: "GDPR, HIPAA, SOC2" },
    
    { productId: "eli-s1", label: "Parameters", value: "175 Billion" },
    { productId: "eli-s1", label: "Context Window", value: "1 Million Tokens" },
    { productId: "eli-s1", label: "Training Data", value: "3.5T Verified Tokens" },
    { productId: "eli-s1", label: "Deployment", value: "On-Prem / Hybrid Cloud" },
    { productId: "eli-s1", label: "Reasoning Score", value: "92.4% (MMLU)" },
    
    { productId: "onco-ai", label: "Analysis Speed", value: "5000 samples/hour" },
    { productId: "onco-ai", label: "Prediction Accuracy", value: "94.5%" },
    { productId: "onco-ai", label: "Data Format", value: "DICOM / Histology" },
    { productId: "onco-ai", label: "Integration", value: "EHR Systems" },
    { productId: "onco-ai", label: "FDA Status", value: "Breakthrough Designation" }
  ];

  const featuresData = [
    { productId: "q-secure", feature: "Real-time weapon detection", displayOrder: 1 },
    { productId: "q-secure", feature: "Behavioral anomaly analysis", displayOrder: 2 },
    { productId: "q-secure", feature: "License plate recognition (LPR) at 120mph", displayOrder: 3 },
    { productId: "q-secure", feature: "Thermal imaging integration", displayOrder: 4 },
    { productId: "q-secure", feature: "Autonomous drone dispatch integration", displayOrder: 5 },
    
    { productId: "q-id", feature: "Liveness detection", displayOrder: 1 },
    { productId: "q-id", feature: "Mask-compliant recognition", displayOrder: 2 },
    { productId: "q-id", feature: "Multi-factor authentication support", displayOrder: 3 },
    { productId: "q-id", feature: "Time & Attendance integration", displayOrder: 4 },
    { productId: "q-id", feature: "Visitor management module", displayOrder: 5 },
    
    { productId: "eli-s1", feature: "Self-correcting code generation", displayOrder: 1 },
    { productId: "eli-s1", feature: "Chemical compound analysis", displayOrder: 2 },
    { productId: "eli-s1", feature: "Legal contract review", displayOrder: 3 },
    { productId: "eli-s1", feature: "Automated root cause analysis", displayOrder: 4 },
    { productId: "eli-s1", feature: "Secure enterprise chat interface", displayOrder: 5 },
    
    { productId: "onco-ai", feature: "Cellular viability tracking", displayOrder: 1 },
    { productId: "onco-ai", feature: "Drug synergy prediction", displayOrder: 2 },
    { productId: "onco-ai", feature: "Radiotherapy dosage optimization", displayOrder: 3 },
    { productId: "onco-ai", feature: "Genetic mutation correlation", displayOrder: 4 },
    { productId: "onco-ai", feature: "Longitudinal study management", displayOrder: 5 }
  ];

  const projectsData = [
    {
      id: "q-build",
      name: "Buildmore AI (Q-Build)",
      category: "Construction Tech",
      description: "A comprehensive AI ecosystem for the construction industry. Q-Build integrates IoT sensors, drone mapping, and predictive analytics to manage large-scale infrastructure projects, preventing delays and accidents before they happen.",
      image: "/assets/stock_images/modern_construction__a0a3d1ca.jpg",
      icon: "HardHat"
    },
    {
      id: "quantum-processors",
      name: "Compact Quantum Processors",
      category: "Hardware Innovation",
      description: "Revolutionizing computing power with room-temperature quantum processors. Designed for edge deployment, bringing quantum capabilities to mobile and embedded systems without the need for cryogenic cooling.",
      image: "/assets/stock_images/computer_processor_c_94aac89b.jpg",
      icon: "Cpu"
    },
    {
      id: "spacecraft-shm",
      name: "Spacecraft Structural Health",
      category: "Aerospace",
      description: "Femtotesla magnetic wave tomography for non-invasive structural analysis of spacecraft hulls. This system detects micro-fractures and material fatigue in deep space environments, ensuring mission longevity.",
      image: "/assets/stock_images/satellite_in_orbit_c_9dcf5d6d.jpg",
      icon: "Satellite"
    }
  ];

  const statsData = [
    { projectId: "q-build", label: "Efficiency Gain", value: "35%" },
    { projectId: "q-build", label: "Safety Incidents", value: "-90%" },
    { projectId: "q-build", label: "Cost Reduction", value: "15%" },
    { projectId: "q-build", label: "Projects Managed", value: "500+" },
    
    { projectId: "quantum-processors", label: "Qubits", value: "128" },
    { projectId: "quantum-processors", label: "Coherence Time", value: "10ms" },
    { projectId: "quantum-processors", label: "Temp. Req", value: "295K" },
    { projectId: "quantum-processors", label: "Form Factor", value: "20x20mm" },
    
    { projectId: "spacecraft-shm", label: "Sensitivity", value: "0.1fT" },
    { projectId: "spacecraft-shm", label: "Scan Depth", value: "50cm" },
    { projectId: "spacecraft-shm", label: "Resolution", value: "10nm" },
    { projectId: "spacecraft-shm", label: "Power Usage", value: "< 50W" }
  ];

  const papersData = [
    {
      id: "paper-001",
      title: "Room Temperature Quantum Coherence in Diamond Lattices",
      authors: "Dr. A. Kashmir, Dr. S. Rao",
      date: "Oct 2024",
      journal: "Nature Physics (Preprint)",
      abstract: "We demonstrate a novel method for maintaining qubit coherence at 295K using nitrogen-vacancy centers in synthetic diamond, paving the way for portable quantum sensors."
    },
    {
      id: "paper-002",
      title: "Predictive Oncology: Deep Learning in Chemotherapy",
      authors: "QuantaFONS Research Team",
      date: "Aug 2024",
      journal: "The Lancet Digital Health",
      abstract: "A retrospective study of 5,000 patients showing how AI-driven dosage optimization improved 5-year survival rates by 12% in aggressive carcinomas."
    },
    {
      id: "paper-003",
      title: "Femtotesla Magnetometry for Non-Destructive Testing",
      authors: "Engineering Division",
      date: "May 2024",
      journal: "IEEE Sensors Journal",
      abstract: "Application of ultra-sensitive magnetic sensors for detecting subsurface fatigue cracks in aerospace grade titanium alloys."
    },
    {
      id: "paper-004",
      title: "Large Language Models in Industrial Control Systems",
      authors: "AI Safety Lab",
      date: "Jan 2025",
      journal: "arXiv:2501.00921",
      abstract: "Exploring the safety boundaries of allowing LLMs to write and execute PLC code in manufacturing environments."
    }
  ];

  const teamData = [
    {
      name: "Dr. Ishaan Qureshi",
      role: "Chief Scientist",
      bio: "Ph.D. in Quantum Physics. Leading the Compact Processor initiative.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Jenkins",
      role: "Head of AI Research",
      bio: "Former lead at DeepMind. Architect of the Eli S1 model.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Rajiv Kapoor",
      role: "Director of Engineering",
      bio: "20 years in aerospace structural monitoring systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  try {
    console.log("Inserting products...");
    await db.insert(products).values(productsData);
    
    console.log("Inserting product specs...");
    await db.insert(productSpecs).values(specsData);
    
    console.log("Inserting product features...");
    await db.insert(productFeatures).values(featuresData);
    
    console.log("Inserting projects...");
    await db.insert(projects).values(projectsData);
    
    console.log("Inserting project stats...");
    await db.insert(projectStats).values(statsData);
    
    console.log("Inserting research papers...");
    await db.insert(researchPapers).values(papersData);
    
    console.log("Inserting team members...");
    await db.insert(team).values(teamData);
    
    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
  
  process.exit(0);
}

seed();
