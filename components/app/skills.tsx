import { Card, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <section id="skills" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24">
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Skills</h2>
      <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800/60">
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((s) => (
              <div
                key={s}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white px-3 py-2 text-sm dark:border-zinc-800/60 dark:bg-zinc-900"
              >
                <Cpu className="h-4 w-4 opacity-70" /> {s}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
