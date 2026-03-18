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
    if (!window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
      setDark(isDark);
    };

    const frame = window.requestAnimationFrame(() => {
      syncTheme(mediaQuery.matches);
    });

    const handleChange = (event: MediaQueryListEvent) => {
      syncTheme(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const projects = [
    {
      title: "StafferAI",
      blurb:
        "Multi-tenant AI knowledge assistant that helps businesses search internal documents with grounded, citation-backed answers.",
      tags: ["Next.js", "OpenAI", "Supabase", "pgvector", "Stripe", "Vercel"],
      href: "https://www.stafferai.app/",
      repo: "https://github.com/cameyer260/stafferai-public",
    },
    {
      title: "DocuQuery",
      blurb:
        "AI-powered document Q&A app where users upload files and instantly query their contents using vector search.",
      tags: ["Next.js", "OpenAI", "Pinecone", "AWS S3", "Prisma", "DigitalOcean VPS", "PostgreSQL"],
      href: "https://www.docuquery.online",
      repo: "https://github.com/cameyer260/docuquery",
    },
    {
      title: "SkillSphere",
      blurb: "Real‑time multiplayer gaming that lets users compete across multiple games platform (Next.js + Supabase + WebSockets).",
      tags: ["Next.js", "WebSockets", "Supabase", "Vercel", "DigitalOcean VPS"],
      href: "https://playskillsphere.com",
      repo: "https://github.com/cameyer260/skillsphere",
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
