import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.christophermeyer.dev"),

  title: "Christopher Meyer | Freelance Software Developer in Edwardsville, IL",

  description:
    "Freelance software developer in Edwardsville, IL building fast, SEO-optimized websites for local businesses. Available for projects and internships.",

  keywords: [
    "Christopher Meyer",
    "freelance web developer Edwardsville IL",
    "freelance software developer St. Louis",
    "Edwardsville web developer",
    "St. Louis freelance developer",
    "SEO websites for local businesses",
    "Next.js developer",
    "software engineering intern",
  ],

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
    title: "Christopher Meyer - Software Developer",
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
  "@type": "Person",
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
  areaServed: [
    {
      "@type": "City",
      name: "Edwardsville",
    },
    {
      "@type": "City",
      name: "St. Louis",
    },
  ],
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
      </body>
    </html>
  );
}
