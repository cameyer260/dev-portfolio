import type { ExampleContactSection } from "@/lib/examples";
import { ExampleDemoForm } from "@/components/examples/ExampleDemoForm";

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
  return (
    <ExampleDemoForm
      fields={section.fields}
      actionLabel={section.primaryCta?.label ?? "Send Request"}
      formMode={formMode}
      buttonTone={buttonTone}
      tone={tone}
      disclosure="This is a portfolio demo for a fictional business. Submitting the form previews the inquiry flow, but no message is actually sent."
    />
  );
}
