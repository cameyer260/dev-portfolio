"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setError(true);
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Contact</h2>
        <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800/60">
          <CardContent className="p-5">
            <div className="rounded-xl bg-green-500/10 p-5 text-center">
              <h3 className="text-2xl font-semibold text-green-500">
                Form Submitted Successfully
              </h3>
              <p className="mt-2 text-zinc-500">
                Thanks for reaching out! I'll get back to you as soon as
                possible.
              </p>
              <Button
                className="mt-5 rounded-2xl"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Form
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24">
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Contact</h2>
      <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800/60">
        <CardContent className="p-5">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm">Name</label>
              <input
                type="text"
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Ada Lovelace"
                name="name"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="you@example.com"
                name="email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm">Message</label>
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Let’s build something cool together."
                name="message"
                required
              />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Or email me directly at{" "}
                <a className="underline" href="cameyer06@gmail.com">
                  cameyer06@gmail.com
                </a>
              </div>
              <Button
                className="rounded-2xl"
                type="submit"
                disabled={loading || submitted}
              >
                {loading ? "Sending..." : "Send"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <input
              type="hidden"
              name="access_key"
              value="4fba4adc-a100-40a6-85b6-c6e79398ce1f"
            />
          </form>
          {error && (
            <div className="mt-5 rounded-xl bg-red-500/10 p-5 text-center">
              <h3 className="text-2xl font-semibold text-red-500">
                Something went wrong
              </h3>
              <p className="mt-2 text-zinc-500">
                Please try again later or email me directly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
