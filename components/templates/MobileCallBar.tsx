import { Phone } from "lucide-react";

export function MobileCallBar({
  phone,
  label = "Call Now",
}: {
  phone: string;
  label?: string;
}) {
  const sanitizedPhone = phone.replace(/[^\d+]/g, "");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--example-border)] bg-[color-mix(in_srgb,var(--example-background)_92%,transparent)] px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href={`tel:${sanitizedPhone}`}
        className="flex min-h-12 w-full items-center justify-center gap-3 rounded-[var(--example-radius-pill)] bg-[var(--example-accent)] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--example-accent-contrast)]"
      >
        <Phone className="h-4 w-4" />
        <span>{label}</span>
      </a>
    </div>
  );
}
