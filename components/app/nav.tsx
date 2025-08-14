import { Button } from "@/components/ui/button";
import { Moon, Sun, Github } from "lucide-react";

export default function Nav({
  toggleTheme,
  dark,
}: {
  toggleTheme: () => void;
  dark: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          Christopher Meyer
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#projects" className="hover:opacity-80">
            Projects
          </a>
          <a href="#experience" className="hover:opacity-80">
            Experience
          </a>
          <a href="#skills" className="hover:opacity-80">
            Skills
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-2xl"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a
            href="https://github.com/cameyer260"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" className="rounded-2xl">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
