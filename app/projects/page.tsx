import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | Nextwisdom Tech - In-House Products & Solutions",
  description: "Explore Nextwisdom Tech in-house projects: SmartEdu, HealthBridge, AgriSense, CivicConnect, SkillForge, and NexPay — purpose-built products driving social impact through technology.",
  keywords: ["Nextwisdom Tech projects", "edtech India", "healthtech startup Jaipur", "agritech solutions", "civic tech India", "fintech for unbanked"],
  openGraph: {
    title: "Our Projects | Nextwisdom Tech",
    description: "Products built from the ground up — driven by purpose, powered by technology, designed for lasting impact.",
    url: "https://nextwisdomtech.com/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://nextwisdomtech.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
