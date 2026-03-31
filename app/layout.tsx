import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.christophermeyer.dev"),

  title: "Christopher Meyer | Freelance Software Developer in Edwardsville, IL",

  description:
    "Freelance software developer in Edwardsville, IL building fast, SEO-optimized websites for local businesses. Available for projects and internships.",

  applicationName: "Christopher Meyer Portfolio",
  category: "technology",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Freelance Web Developer in Edwardsville, IL | Christopher Meyer",
    description:
      "Freelance developer building fast, modern websites for local businesses in Edwardsville and St. Louis.",
    url: "https://www.christophermeyer.dev",
    siteName: "Christopher Meyer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Christopher Meyer | Freelance Software Developer in Edwardsville, IL",
    description:
      "Freelance developer building fast, modern websites for local businesses in Edwardsville and St. Louis.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.christophermeyer.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.christophermeyer.dev/#person",
      name: "Christopher Meyer",
      url: "https://www.christophermeyer.dev",
      image: "https://www.christophermeyer.dev/christopher-meyer.webp",
      email: "cameyer06@gmail.com",
      telephone: "+1-618-772-4471",
      jobTitle: "Freelance Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edwardsville",
        addressRegion: "IL",
        addressCountry: "US",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Southern Illinois University Edwardsville",
      },
      sameAs: [
        "https://www.linkedin.com/in/cameyer06/",
        "https://github.com/cameyer260",
      ],
      knowsAbout: [
        "Web Development",
        "Next.js",
        "TypeScript",
        "SEO",
        "Software Engineering",
        "AI Applications",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.christophermeyer.dev/#service",
      name: "Christopher Meyer Freelance Development",
      url: "https://www.christophermeyer.dev",
      image: "https://www.christophermeyer.dev/og-image.png",
      description:
        "Freelance software developer in Edwardsville, IL building fast, modern, SEO-focused websites for local businesses in the Edwardsville and St. Louis area.",
      email: "cameyer06@gmail.com",
      telephone: "+1-618-772-4471",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edwardsville",
        addressRegion: "IL",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Edwardsville",
        },
        {
          "@type": "City",
          name: "St. Louis",
        },
        {
          "@type": "AdministrativeArea",
          name: "Metro East",
        },
      ],
      serviceType: [
        "Freelance web development",
        "Small business websites",
        "SEO website improvements",
        "Mobile website optimization",
      ],
      provider: {
        "@id": "https://www.christophermeyer.dev/#person",
      },
      sameAs: [
        "https://www.linkedin.com/in/cameyer06/",
        "https://github.com/cameyer260",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
