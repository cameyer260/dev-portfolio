"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Download,
  FileText,
  Gamepad2, 
  Building2, 
  Pizza, 
  Flag,
  ArrowRight,
  Mail,
  Music,
  Phone,
  Github,
  Linkedin,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

// --- Navigation Dock ---
const Dock = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 md:bottom-6">
      <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1.5 shadow-2xl backdrop-blur-xl md:gap-2 md:p-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 rounded-full px-3 py-2 text-xs text-zinc-400 transition-colors hover:bg-white/10 hover:text-white md:px-4 md:text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 pb-32 relative">
      <Dock />

      {/* Ambient Background Glow */}
      <div className="pointer-events-none fixed inset-0 flex justify-center -z-10">
        <div className="h-[50rem] w-[50rem] opacity-20 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent blur-[100px] rounded-full translate-y-[-20%]" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24 md:py-24 md:space-y-32">
        {/* HERO SECTION */}
        <section id="home" className="space-y-8 pt-4 md:pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Freelance developer in Edwardsville, IL serving the St. Louis area
          </motion.div>

          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6">
                Freelance websites for <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">local businesses in Edwardsville and St. Louis.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                I build fast, modern websites for local businesses, improve mobile experience, and help companies rank better on Google. I&apos;m also a Computer Science student building production software and open to Summer 2027 software engineering internships.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Fast, modern websites",
                  "Better mobile experience",
                  "SEO and local visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
                >
                  View Technical Work
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-500/15"
                >
                  View Resume <FileText className="h-4 w-4" />
                </a>
                <a
                  href="/christopher-meyer-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
                >
                  Download PDF <Download className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                <Building2 className="h-3.5 w-3.5" />
                Student developer open to internships and freelance work
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-full max-w-[280px] md:max-w-[320px]"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src="/christopher-meyer.webp"
                  alt="Christopher Meyer"
                  width={4032}
                  height={3024}
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 280px, 320px"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID: FEATURED WORK */}
        <section id="work" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">Featured Work</h2>
            <a href="https://github.com/cameyer260" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
              View Github <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* StafferAI - Large Card */}
            <SpotlightCard className="md:col-span-2 p-8 group">
              <a
                href="https://www.stafferai.app/"
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">StafferAI</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                    Multi-tenant AI knowledge assistant. Helps businesses search internal documents with grounded, citation-backed answers.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Next.js', 'OpenAI', 'Supabase', 'pgvector'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </SpotlightCard>

            {/* DocuQuery */}
            <SpotlightCard className="p-8 group">
              <a
                href="https://docuquery.online"
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">DocuQuery</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    AI-powered document Q&A app. Upload files and instantly query contents using vector search.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Next.js', 'Pinecone', 'AWS S3'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </SpotlightCard>

            {/* SkillSphere */}
            <SpotlightCard className="md:col-span-1 p-8 group">
              <a
                href="https://playskillsphere.com"
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <Gamepad2 className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">SkillSphere</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Real-time multiplayer gaming platform allowing users to compete seamlessly.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['WebSockets', 'Supabase'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </SpotlightCard>

            {/* Solutions / Freelance */}
            <SpotlightCard className="md:col-span-2 p-8 group border-emerald-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">Custom Business Solutions</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                    Growing a freelance development business building bespoke dashboards, marketing sites, and workflow automation for local businesses. Owning the stack end-to-end.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Vercel'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* INTERACTIVE RESUME */}
        <section id="resume" className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Resume</p>
              <h2 className="mt-3 text-3xl font-medium text-white">Interactive resume with a plain PDF download.</h2>
              <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
                For recruiters, this is a fast way to scan my background. For business owners, it shows the technical depth behind the websites and software I build.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/christopher-meyer-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
              <a
                href="/christopher-meyer-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
              >
                Open PDF <FileText className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <SpotlightCard className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-medium text-white">Christopher Meyer</h3>
                  <p className="mt-2 text-zinc-400">
                    Computer Science student interested in software engineering, AI/ML, and data science. Open to Summer 2027 internships and freelance web development work.
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100">
                  GPA 3.57
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Education</p>
                  <h4 className="mt-3 text-lg font-medium text-white">Southern Illinois University Edwardsville</h4>
                  <p className="mt-1 text-sm text-zinc-400">B.S. in Computer Science, Minor in Mathematics</p>
                  <p className="mt-2 text-sm text-zinc-500">Aug 2024 - Fall 2027 · Edwardsville, Illinois</p>
                  <p className="mt-3 text-sm text-zinc-400">Scholarships: Cougar Pride Scholarship, Johnetta Haley Scholarship</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Relevant Coursework</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Algorithms and Data Structures",
                      "Operating Systems",
                      "Database and Web System Development",
                      "Computer Organization and Architecture",
                      "Linear Algebra",
                    ].map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Technical Skills</p>
              <div className="mt-5 space-y-5">
                <div>
                  <h4 className="text-sm font-medium text-white">Languages</h4>
                  <p className="mt-2 text-sm text-zinc-400">TypeScript, Python, Java, PHP, SQL, HTML/CSS</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Frameworks and Platforms</h4>
                  <p className="mt-2 text-sm text-zinc-400">React, Next.js, Node, Express, Supabase, AWS, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Developer Tools</h4>
                  <p className="mt-2 text-sm text-zinc-400">Codex, OpenCode, Cursor, Git, GitHub, DigitalOcean, SSH, Unix</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <SpotlightCard className="p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-medium text-white">Project Highlights</h3>
                <a
                  href="#work"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  See live portfolio cards
                </a>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "StafferAI",
                    date: "Mar 2026",
                    stack: "Next.js, OpenAI, Supabase, pgvector, Stripe",
                    bullets: [
                      "Built a production-ready multi-tenant RAG platform for querying internal business documents.",
                      "Designed secure organization-scoped retrieval with pgvector, Supabase Auth, Postgres RLS, and role-based access control.",
                      "Implemented subscriptions, ingestion pipelines, usage guardrails, and citation-backed answers.",
                    ],
                  },
                  {
                    title: "AI Document Q&A (DocuQuery)",
                    date: "Dec 2025",
                    stack: "Next.js, OpenAI, Pinecone, AWS S3, NextAuth, PostgreSQL, Prisma",
                    bullets: [
                      "Built an AI document Q&A app using semantic search and LLMs over uploaded content.",
                      "Integrated vector search, secure authentication, cloud storage, and VPS deployment.",
                    ],
                  },
                  {
                    title: "PlaySkillSphere",
                    date: "Jul 2025",
                    stack: "React, Next.js, WebSockets, Supabase, VPS",
                    bullets: [
                      "Developed a real-time multiplayer web app with live game lobbies and responsive frontend systems.",
                      "Integrated WebSockets for live communication and Supabase for authentication and backend data.",
                    ],
                  },
                ].map((project) => (
                  <div key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h4 className="text-lg font-medium text-white">{project.title}</h4>
                      <span className="text-sm text-zinc-500">{project.date}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{project.stack}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-zinc-600">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <div className="space-y-4">
              <SpotlightCard className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Experience</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-400">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Freelance Web Developer</h4>
                        <p className="mt-1 text-sm text-zinc-400">2025 - Present</p>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                          <li className="flex gap-2"><span className="text-zinc-600">-</span><span>Design and ship marketing sites, dashboards, and MVPs for clients.</span></li>
                          <li className="flex gap-2"><span className="text-zinc-600">-</span><span>Manage client relations and end-to-end project lifecycles.</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-400">
                        <Pizza className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Dewey&apos;s Pizza</h4>
                        <p className="mt-1 text-sm text-zinc-400">Server · 2024 - Present · Edwardsville, Illinois</p>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                          <li className="flex gap-2"><span className="text-zinc-600">-</span><span>Provided excellent customer service in a fast-paced environment.</span></li>
                          <li className="flex gap-2"><span className="text-zinc-600">-</span><span>Collaborated with the team to keep operations efficient during peak hours.</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Campus Involvement</p>
                <div className="mt-5 space-y-3 text-sm text-zinc-400">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-white font-medium">Computer Association of SIUE (CAOS)</p>
                    <p className="mt-1">Member · Aug 2025 - Present</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-white font-medium">Sigma Phi Epsilon Fraternity</p>
                    <p className="mt-1">Member · Mar 2025 - Present</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* SKILLS BENTO GRID */}
        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-medium text-white">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "TS" },
              { name: "Supabase", icon: "⚡" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Tailwind CSS", icon: "🌬️" },
              { name: "Python", icon: "🐍" },
              { name: "WebSockets", icon: "🔌" },
              { name: "AWS", icon: "☁️" },
            ].map((skill) => (
              <SpotlightCard key={skill.name} className="p-6 flex flex-col items-center justify-center gap-3 text-center group">
                <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* INTERESTS */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium text-white">Beyond the Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SpotlightCard className="p-6 flex items-center gap-4 group">
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:scale-110 transition-transform">
                <Flag className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Golfing</h3>
                <p className="text-sm text-zinc-400">I like getting out on the course and playing with friends.</p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 flex items-center gap-4 group">
              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 group-hover:scale-110 transition-transform">
                <Music className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Music</h3>
                <p className="text-sm text-zinc-400">I really like listening to and playing music. My favorite genres are rock, rap, and R&amp;B.</p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* COMMAND PALETTE CONTACT */}
        <section id="contact" className="space-y-8 pt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-white mb-4">Let&apos;s build something useful.</h2>
            <p className="text-zinc-400 text-lg">
              If you need a website for your business, want to improve your current site, or you&apos;re reaching out about an internship, feel free to email or text me directly. I respond quickly.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <SpotlightCard className="p-6 border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Email</p>
                    <a
                      href="mailto:cameyer06@gmail.com"
                      className="mt-2 block text-lg font-medium text-white hover:text-emerald-200 transition-colors"
                    >
                      cameyer06@gmail.com
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 border-sky-500/20 bg-sky-500/5">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Phone</p>
                    <a
                      href="tel:6187724471"
                      className="mt-2 block text-lg font-medium text-white hover:text-sky-200 transition-colors"
                    >
                      618-772-4471
                    </a>
                    <p className="mt-2 text-sm text-zinc-400">
                      Feel free to email or text me directly. I respond quickly.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <div className="flex gap-6 px-2 pt-4">
                <a href="https://github.com/cameyer260" className="text-zinc-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/cameyer06/" className="text-zinc-500 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <SpotlightCard className="p-2 text-left">
              <div className="bg-zinc-950/80 rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <Terminal className="w-4 h-4 text-zinc-500 mr-2" />
                  <span className="text-xs text-zinc-500 font-mono">contact.sh</span>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" className="p-4 space-y-4">
                  <input type="hidden" name="access_key" value="4fba4adc-a100-40a6-85b6-c6e79398ce1f" />
                  <input type="hidden" name="subject" value="New portfolio contact form submission" />
                  <input type="hidden" name="from_name" value="Christopher Meyer Portfolio" />
                  
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-500 pl-1">~/name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-500 pl-1">~/email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-500 pl-1">~/message</label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your business, website, or opportunity."
                      className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2"
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </SpotlightCard>
          </div>
        </section>

      </main>
    </div>
  );
}
