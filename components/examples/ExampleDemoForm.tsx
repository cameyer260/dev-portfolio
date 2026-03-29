"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { ExampleAction, ExampleFormField } from "@/lib/examples";
import { cn } from "@/lib/utils";

type ExampleDemoFormProps = {
  fields: ExampleFormField[];
  actionLabel?: string;
  formMode?: "surface" | "underline" | "contrast";
  buttonTone?: "primary" | "secondary" | "ghost" | "accent";
  tone?: "default" | "inverse";
  disclosure?: string;
  successDetail?: string;
  buttonClassName?: string;
};

export function ExampleDemoForm({
  fields,
  actionLabel = "Send Request",
  formMode = "surface",
  buttonTone = "primary",
  tone = "default",
  disclosure,
  successDetail = "This demo shows the submission state only. No data was sent to a business.",
  buttonClassName,
}: ExampleDemoFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");

    setSubmittedName(typeof name === "string" ? name.trim() || null : null);
    setIsSubmitted(true);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {disclosure ? (
        <p
          className={cn(
            "text-sm leading-6",
            tone === "inverse" ? "text-white/72" : "text-[var(--example-muted)]",
          )}
        >
          {disclosure}
        </p>
      ) : null}

      <div className={cn("grid gap-4", formMode === "underline" && "md:grid-cols-2")}>
        {fields.map((field) => (
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
              <select
                name={field.name}
                className={inputClasses(formMode)}
                defaultValue={field.options?.[0]}
              >
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

      {isSubmitted ? (
        <div
          aria-live="polite"
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
            {successDetail}
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--example-radius-pill)] px-6 py-3 text-sm font-semibold tracking-[0.06em] transition-all",
          buttonToneClasses[buttonTone],
          buttonClassName,
        )}
      >
        <span>{isSubmitted ? "Demo Submitted" : actionLabel}</span>
        {isSubmitted ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
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
