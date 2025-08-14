import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-6xl px-4 pb-12 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Christopher Meyer. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            className="hover:opacity-80"
            href="https://github.com/cameyer260"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="mr-1 inline h-4 w-4" />
            GitHub
          </a>
          <a
            className="hover:opacity-80"
            href="https://www.linkedin.com/in/cameyer06/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="mr-1 inline h-4 w-4" />
            LinkedIn
          </a>
          <a className="hover:opacity-80" href="mailto:cameyer06@gmail.com">
            <Mail className="mr-1 inline h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
