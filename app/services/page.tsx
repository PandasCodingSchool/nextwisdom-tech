import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Nextwisdom Tech - Web, Mobile, AI & Cloud Solutions",
  description: "Explore Nextwisdom Tech services: custom web development, mobile app development, AI & machine learning, cloud solutions, e-commerce, and digital transformation in Jaipur, India.",
  keywords: ["web development Jaipur", "mobile app development India", "AI solutions", "cloud services", "e-commerce development", "digital transformation Rajasthan"],
  openGraph: {
    title: "Our Services | Nextwisdom Tech",
    description: "Comprehensive technology solutions — web, mobile, AI, cloud, e-commerce, and digital transformation to accelerate your business growth.",
    url: "https://nextwisdomtech.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://nextwisdomtech.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
