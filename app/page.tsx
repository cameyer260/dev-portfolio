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
      title: "SkillSphere",
      blurb: "Real‑time games platform (Next.js + Supabase + WebSockets).",
      tags: ["Next.js", "WebSockets", "Supabase", "Vercel"],
      href: "https://playskillsphere.com",
      repo: "https://github.com/cameyer260/skillsphere",
    },
    {
      title: "Social Media Mock",
      blurb: "Lightweight Twitter‑style mock with avatars & auth.",
      tags: ["Next.js", "Postgres", "Tailwind", "S3"],
      href: "https://github.com/thispagedoesntexist",
      repo: "https://github.com/thispagedoesntexist",
    },
    {
      title: "Chess Bot",
      blurb: "Local Stockfish.js chess bot that analyzes positions in real time and suggests moves.",
      tags: ["React", "TypeScript", "Stockfish.js"],
      href: "https://github.com/thispagedoesntexist",
      repo: "https://github.com/thispagedoesntexist",
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
