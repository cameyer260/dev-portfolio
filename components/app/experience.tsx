import type { LucideProps } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type IconType = React.ComponentType<LucideProps>;

export default function Experience({
  experiences,
}: {
  experiences: {
    role: string;
    org: string;
    period: string;
    points: string[];
    icon: IconType;
  }[];
}) {
  return (
    <section id="experience" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24">
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Experience</h2>
      <div className="space-y-4">
        {experiences.map((e, idx) => {
          const Icon = e.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800/60">
                <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-900">
                    <Icon className="h-5 w-5"/>
                  </div>
                  <div className="grow">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-lg font-medium">
                          {e.role} · <span className="opacity-80">{e.org}</span>
                        </h3>
                      </div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {e.period}
                      </div>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
