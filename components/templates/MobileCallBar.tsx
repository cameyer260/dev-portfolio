import { ArrowRight, Phone } from "lucide-react";
import type { ExampleAction } from "@/lib/examples";

export function MobileCallBar({
  action,
}: {
  action: ExampleAction;
}) {
  const isPhoneAction = action.href.startsWith("tel:");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--example-border)] bg-[color-mix(in_srgb,var(--example-background)_92%,transparent)] px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href={action.href}
        className="flex min-h-12 w-full items-center justify-center gap-3 rounded-[var(--example-radius-pill)] bg-[var(--example-accent)] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--example-accent-contrast)]"
      >
        {isPhoneAction ? <Phone className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        <span>{action.label}</span>
      </a>
    </div>
  );
}
