import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nextwisdomtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nextwisdom Tech - Smart Solutions, Smarter Tomorrow",
    template: "%s | Nextwisdom Tech",
  },
  description:
    "Nextwisdom Tech is a leading software company in Jaipur, India, delivering innovative web development, mobile apps, AI solutions, and digital transformation services.",
  keywords: [
    "software company Jaipur",
    "web development India",
    "mobile app development",
    "AI solutions",
    "digital transformation",
    "IT company Rajasthan",
    "Nextwisdom Tech",
  ],
  authors: [{ name: "Nextwisdom Tech", url: siteUrl }],
  creator: "Nextwisdom Tech",
  publisher: "Nextwisdom Tech",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nextwisdom Tech",
    title: "Nextwisdom Tech - Smart Solutions, Smarter Tomorrow",
    description:
      "Leading software company delivering innovative web, mobile, AI, and cloud solutions that drive business growth and digital transformation.",
    images: [
      {
        url: "/nextwisdom-logo.png",
        width: 1200,
        height: 630,
        alt: "Nextwisdom Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextwisdom Tech - Smart Solutions, Smarter Tomorrow",
    description:
      "Leading software company delivering innovative web, mobile, AI, and cloud solutions.",
    images: ["/nextwisdom-logo.png"],
    creator: "@nextwisdomtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nextwisdom Tech",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Leading software company in Jaipur, India, delivering innovative web development, mobile apps, AI solutions, and digital transformation services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "UDB Rakshak, Shivam Nagar, Near SKIT College, Jagatpura",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302017",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6266509696",
      contactType: "customer service",
      email: "info@nextwisdomtech.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
