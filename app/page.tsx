"use client";

import { useEffect, useState } from "react";
import { Pizza, FolderCode } from "lucide-react";
import Nav from "@/components/app/nav";
import Hero from "@/components/app/hero";
import Projects from "@/components/app/projects";
import Experience from "@/components/app/experience";
import Skills from "@/components/app/skills";
import Contact from "@/components/app/contact";
import Footer from "@/components/app/footer";

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Respect user's system preference on first load
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark((d) => !d);
  };

  const projects = [
    {
      title: "DocuQuery",
      blurb:
        "AI-powered document Q&A app where users upload files and instantly query their contents using vector search.",
      tags: ["Next.js", "OpenAI", "Pinecone", "Upstash Redis"],
      href: "https://www.docuquery.online",
      repo: "https://github.com/cameyer260/ai-doc-qa",
    },
    {
      title: "SkillSphere",
      blurb: "Real‑time multiplayer gaming that lets users compete across multiple games platform (Next.js + Supabase + WebSockets).",
      tags: ["Next.js", "WebSockets", "Supabase", "Vercel", "DigitalOcean VPS"],
      href: "https://playskillsphere.com",
      repo: "https://github.com/cameyer260/skillsphere",
    },
    {
      title: "Social Media Mock",
      blurb: "Lightweight Twitter-style social media app with authentication, user avatars, and image storage using S3.",
      tags: ["Next.js", "MongoDB", "Tailwind", "S3", "bcrypt Auth"],
      href: "https://github.com/cameyer260/social-media-mock",
      repo: "https://github.com/cameyer260/social-media-mock",
    },
  ];

  const skills = [
    "TypeScript",
    "Python",
    "React/Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "WebSockets",
    "Docker",
    "AWS S3",
  ];

  const experiences = [
    {
      role: "Server at Dewey's Pizza in Edwardsville, IL",
      org: "Dewey's Pizza",
      period: "Jun 2024– Present",
      points: [
        "Provided excellent customer service in a fast-paced restaurant environment, managing orders and ensuring guest satisfaction.",
        "Collaborated with team members to maintain efficient operations during peak hours.",
      ],
      icon: Pizza,
    },
    {
      role: "Freelance Web Developer",
      org: "Self-employed",
      period: "2025 – Present",
      points: [
        "Design and ship marketing sites, dashboards, and MVPs for clients.",
        "Own the stack end-to-end: Next.js, Tailwind, Supabase, and Vercel.",
      ],
      icon: FolderCode,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Nav toggleTheme={toggleTheme} dark={dark} />
      <Hero />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}
