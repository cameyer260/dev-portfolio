"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Gamepad2, 
  Building2, 
  Pizza, 
  Flag,
  ArrowRight,
  Mail,
  Music,
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
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
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

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        {/* HERO SECTION */}
        <section id="home" className="space-y-8 pt-12">
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
            Targeting Summer 2027 SWE Internships
          </motion.div>

          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6">
                Building intelligent, <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">real-time systems.</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed">
                I&apos;m Christopher Meyer, a Software Engineer and CS student specializing in Next.js, 
                Supabase, and distributed systems. 
              </p>
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
            <SpotlightCard className="md:col-span-2 p-8 group cursor-pointer" onClick={() => window.open('https://www.stafferai.app/', '_blank')}>
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
            </SpotlightCard>

            {/* DocuQuery */}
            <SpotlightCard className="p-8 group cursor-pointer" onClick={() => window.open('https://docuquery.online', '_blank')}>
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
            </SpotlightCard>

            {/* SkillSphere */}
            <SpotlightCard className="md:col-span-1 p-8 group cursor-pointer" onClick={() => window.open('https://playskillsphere.com', '_blank')}>
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

        {/* CAREER & GROWTH TIMELINE */}
        <section id="career" className="space-y-8">
          <h2 className="text-2xl font-medium text-white">Career & Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <SpotlightCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Freelance Web Developer</h3>
                  <p className="text-sm text-zinc-400 mb-4">2025 – Present</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><span className="text-zinc-600">-</span> Design and ship marketing sites, dashboards, and MVPs for clients.</li>
                    <li className="flex gap-2"><span className="text-zinc-600">-</span> Manage client relations and end-to-end project lifecycles.</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Pizza className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Dewey&apos;s Pizza</h3>
                  <p className="text-sm text-zinc-400 mb-4">High-Stakes Operations & Team Collaboration</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><span className="text-zinc-600">-</span> Collaborated with team members to maintain efficient operations during peak hours.</li>
                    <li className="flex gap-2"><span className="text-zinc-600">-</span> Handled high-pressure environments requiring extreme multitasking.</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>

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
        <section id="contact" className="max-w-xl mx-auto space-y-8 text-center pt-20">
          <h2 className="text-3xl font-medium text-white mb-4">Let&apos;s build something.</h2>
          <p className="text-zinc-400 mb-8">
            Currently open to Summer 2027 SWE Internships and freelance opportunities.
          </p>

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
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-medium text-sm py-2 rounded-lg hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </SpotlightCard>

          <div className="flex justify-center gap-6 pt-12">
            <a href="https://github.com/cameyer260" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/cameyer06/" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:cameyer06@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
