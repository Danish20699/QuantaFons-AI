import { Shield, ScanFace, Brain, Activity, HardHat, Cpu, Satellite, FileText, Users, Globe } from "lucide-react";
import qSecureImg from "@assets/stock_images/modern_cctv_security_f7448f49.jpg";
import qIdImg from "@assets/stock_images/facial_recognition_s_415500cb.jpg";
import quantafonsAiImg from "@assets/stock_images/abstract_data_networ_7d12e022.jpg";
import cancerResearchImg from "@assets/stock_images/medical_laboratory_m_ce3d03b3.jpg";
import qBuildImg from "@assets/stock_images/modern_construction__a0a3d1ca.jpg";
import processorImg from "@assets/stock_images/computer_processor_c_94aac89b.jpg";
import spacecraftImg from "@assets/stock_images/satellite_in_orbit_c_9dcf5d6d.jpg";

export const products = [
  {
    id: "q-secure",
    name: "Q-Secure Intelligence",
    category: "AI Security",
    tagline: "The unblinking eye of enterprise security.",
    description: "Q-Secure is not just a camera; it is a proactive security ecosystem. Leveraging edge-based neural networks, it identifies threats in real-time, distinguishing between routine activities and genuine security breaches with 99.9% accuracy.",
    specs: [
      { label: "Resolution", value: "8K Quantum Sensor" },
      { label: "AI Latency", value: "< 15ms" },
      { label: "Field of View", value: "180° Panoramic" },
      { label: "Connectivity", value: "5G / Fiber / Starlink" },
      { label: "Encryption", value: "AES-256 + QKD Ready" }
    ],
    features: [
      "Real-time weapon detection",
      "Behavioral anomaly analysis",
      "License plate recognition (LPR) at 120mph",
      "Thermal imaging integration",
      "Autonomous drone dispatch integration"
    ],
    image: qSecureImg,
    icon: Shield
  },
  {
    id: "q-id",
    name: "Q-ID Biometrics",
    category: "Identity Management",
    tagline: "Seamless access, absolute identity assurance.",
    description: "Q-ID revolutionizes access control by replacing cards and pins with your unique biological signature. Our 3D volumetric facial mapping technology works in total darkness and cannot be spoofed by photos or masks.",
    specs: [
      { label: "Throughput", value: "60 people/minute" },
      { label: "False Acceptance Rate", value: "1 in 10,000,000" },
      { label: "Database Capacity", value: "1M+ Identities" },
      { label: "Response Time", value: "0.2 seconds" },
      { label: "Compliance", value: "GDPR, HIPAA, SOC2" }
    ],
    features: [
      "Liveness detection",
      "Mask-compliant recognition",
      "Multi-factor authentication support",
      "Time & Attendance integration",
      "Visitor management module"
    ],
    image: qIdImg,
    icon: ScanFace
  },
  {
    id: "eli-s1",
    name: "QuantaFONS AI (Eli S1)",
    category: "Generative AI",
    tagline: "The world's first industrial-grade reasoning engine.",
    description: "Eli S1 is a proprietary Large Language Model optimized for scientific reasoning, code generation, and complex industrial logic. Unlike general-purpose models, Eli S1 is trained on verified technical datasets to minimize hallucinations in critical tasks.",
    specs: [
      { label: "Parameters", value: "175 Billion" },
      { label: "Context Window", value: "1 Million Tokens" },
      { label: "Training Data", value: "3.5T Verified Tokens" },
      { label: "Deployment", value: "On-Prem / Hybrid Cloud" },
      { label: "Reasoning Score", value: "92.4% (MMLU)" }
    ],
    features: [
      "Self-correcting code generation",
      "Chemical compound analysis",
      "Legal contract review",
      "Automated root cause analysis",
      "Secure enterprise chat interface"
    ],
    image: quantafonsAiImg,
    icon: Brain
  },
  {
    id: "onco-ai",
    name: "OncoAI Research Platform",
    category: "Healthcare",
    tagline: "Accelerating the cure through data.",
    description: "OncoAI utilizes deep learning to analyze the efficacy of chemotherapy and radiotherapy protocols on patient-specific stem cell cultures. It predicts treatment outcomes with high fidelity, reducing the need for trial-and-error medication.",
    specs: [
      { label: "Analysis Speed", value: "5000 samples/hour" },
      { label: "Prediction Accuracy", value: "94.5%" },
      { label: "Data Format", value: "DICOM / Histology" },
      { label: "Integration", value: "EHR Systems" },
      { label: "FDA Status", value: "Breakthrough Designation" }
    ],
    features: [
      "Cellular viability tracking",
      "Drug synergy prediction",
      "Radiotherapy dosage optimization",
      "Genetic mutation correlation",
      "Longitudinal study management"
    ],
    image: cancerResearchImg,
    icon: Activity
  }
];

export const projects = [
  {
    id: "q-build",
    name: "Buildmore AI (Q-Build)",
    category: "Construction Tech",
    description: "A comprehensive AI ecosystem for the construction industry. Q-Build integrates IoT sensors, drone mapping, and predictive analytics to manage large-scale infrastructure projects, preventing delays and accidents before they happen.",
    stats: [
      { label: "Efficiency Gain", value: "35%" },
      { label: "Safety Incidents", value: "-90%" },
      { label: "Cost Reduction", value: "15%" },
      { label: "Projects Managed", value: "500+" }
    ],
    image: qBuildImg,
    icon: HardHat
  },
  {
    id: "quantum-processors",
    name: "Compact Quantum Processors",
    category: "Hardware Innovation",
    description: "Revolutionizing computing power with room-temperature quantum processors. Designed for edge deployment, bringing quantum capabilities to mobile and embedded systems without the need for cryogenic cooling.",
    stats: [
      { label: "Qubits", value: "128" },
      { label: "Coherence Time", value: "10ms" },
      { label: "Temp. Req", value: "295K" },
      { label: "Form Factor", value: "20x20mm" }
    ],
    image: processorImg,
    icon: Cpu
  },
  {
    id: "spacecraft-shm",
    name: "Spacecraft Structural Health",
    category: "Aerospace",
    description: "Femtotesla magnetic wave tomography for non-invasive structural analysis of spacecraft hulls. This system detects micro-fractures and material fatigue in deep space environments, ensuring mission longevity.",
    stats: [
      { label: "Sensitivity", value: "0.1fT" },
      { label: "Scan Depth", value: "50cm" },
      { label: "Resolution", value: "10nm" },
      { label: "Power Usage", value: "< 50W" }
    ],
    image: spacecraftImg,
    icon: Satellite
  }
];

export const researchPapers = [
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

export const team = [
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
