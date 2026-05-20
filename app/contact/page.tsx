import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Nextwisdom Tech - Get in Touch",
  description: "Contact Nextwisdom Tech for software development, AI solutions, and digital transformation services. Located in Jaipur, Rajasthan. Call +91-6266509696 or email info@nextwisdomtech.com.",
  keywords: ["contact Nextwisdom Tech", "software company Jaipur contact", "hire developers India", "IT company Rajasthan"],
  openGraph: {
    title: "Contact Us | Nextwisdom Tech",
    description: "Get in touch with our team to discuss your project and start your digital transformation journey.",
    url: "https://nextwisdomtech.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://nextwisdomtech.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
