"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { ExampleAction, ExampleContactSection } from "@/lib/examples";
import { cn } from "@/lib/utils";

type ContactDemoFormProps = {
  section: ExampleContactSection;
  formMode?: "surface" | "underline" | "contrast";
  buttonTone?: "primary" | "secondary" | "ghost" | "accent";
  tone?: "default" | "inverse";
};

export function ContactDemoForm({
  section,
  formMode = "surface",
  buttonTone = "primary",
  tone = "default",
}: ContactDemoFormProps) {
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const actionLabel = section.primaryCta?.label ?? "Send Request";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");

    setSubmittedName(typeof name === "string" ? name.trim() || null : null);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <p
        className={cn(
          "text-sm leading-6",
          tone === "inverse" ? "text-white/72" : "text-[var(--example-muted)]",
        )}
      >
        This is a portfolio demo for a fictional business. Submitting the form previews the inquiry
        flow, but no message is actually sent.
      </p>

      <div className={cn("grid gap-4", formMode === "underline" && "md:grid-cols-2")}>
        {section.fields.map((field) => (
          <label
            key={field.name}
            className={cn(
              "block",
              formMode === "underline" &&
                (field.type === "textarea" || field.type === "select") &&
                "md:col-span-2",
            )}
          >
            <span
              className={cn(
                "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em]",
                formMode === "contrast" ? "text-white/68" : "text-[var(--example-muted)]",
              )}
            >
              {field.label}
            </span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows={4}
                placeholder={field.placeholder}
                className={inputClasses(formMode)}
              />
            ) : field.type === "select" ? (
              <select name={field.name} className={inputClasses(formMode)} defaultValue={field.options?.[0]}>
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                className={inputClasses(formMode)}
              />
            )}
          </label>
        ))}
      </div>

      {submittedName !== undefined && submittedName !== null ? (
        <div
          className={cn(
            "rounded-[var(--example-radius-panel)] border px-4 py-3 text-sm leading-6",
            tone === "inverse"
              ? "border-white/16 bg-white/10 text-white"
              : "border-[var(--example-border)] bg-[var(--example-accent-soft)] text-[var(--example-text)]",
          )}
        >
          <p className="font-semibold">
            Example inquiry submitted{submittedName ? ` for ${submittedName}` : ""}.
          </p>
          <p className={cn("mt-1", tone === "inverse" ? "text-white/74" : "text-[var(--example-muted)]")}>
            This demo shows the submission state only. No data was sent to a business.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--example-radius-pill)] px-6 py-3 text-sm font-semibold tracking-[0.06em] transition-all",
          buttonToneClasses[buttonTone],
        )}
      >
        <span>{submittedName ? "Demo Submitted" : actionLabel}</span>
        {submittedName ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

const buttonToneClasses = {
  primary:
    "border border-transparent bg-[var(--example-primary)] text-[var(--example-primary-contrast)] hover:opacity-92",
  secondary:
    "border border-[var(--example-border)] bg-transparent text-[var(--example-text)] hover:bg-[var(--example-surface-alt)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--example-text)] hover:bg-[var(--example-surface-alt)]",
  accent:
    "border border-transparent bg-[var(--example-accent)] text-[var(--example-accent-contrast)] hover:opacity-92",
} as const satisfies Record<NonNullable<ExampleAction["tone"]>, string>;

function inputClasses(mode: "surface" | "underline" | "contrast") {
  if (mode === "underline") {
    return "w-full border-b border-[var(--example-border)] bg-transparent px-0 py-3 text-sm outline-none";
  }

  if (mode === "contrast") {
    return "w-full rounded-[var(--example-radius-input)] border border-white/16 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/42";
  }

  return "w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm outline-none";
}
