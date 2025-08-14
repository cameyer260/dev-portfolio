import { motion } from "framer-motion";
import { Rocket, ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 sm:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <Rocket className="h-3.5 w-3.5" />
          Open to SWE internships (Aug 2025)
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Building fast, clean,{" "}
          <span className="underline decoration-primary/40 decoration-4 underline-offset-8">
            web experiences
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          I’m a CS student focused on Next.js, real‑time systems, and delightful
          UI. Here are a few things I’ve shipped recently.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects">
            <Button className="rounded-2xl">
              See projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="mailto:cameyer06@gmail.com">
            <Button variant="secondary" className="rounded-2xl">
              Contact me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/cameyer06/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" className="rounded-2xl">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
