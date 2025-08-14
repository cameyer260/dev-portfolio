import { ExternalLink, Star, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects({
  projects,
}: {
  projects: {
    title: string;
    blurb: string;
    tags: string[];
    href: string;
    repo: string;
  }[];
}) {
  return (
    <section id="projects" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Featured Projects
        </h2>
        <a
          href="https://github.com/cameyer260"
          target="_blank"
          rel="noreferrer"
          className="text-sm hover:opacity-80"
        >
          View all <ExternalLink className="ml-1 inline h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="group h-full rounded-2xl border-zinc-200/60 shadow-sm transition hover:shadow-md dark:border-zinc-800/60">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Star className="h-4 w-4 opacity-60" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-2xl">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full rounded-2xl" variant="default">
                      Live <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full rounded-2xl" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
