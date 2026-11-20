"use client";

import { useState } from "react";
import { CheckIcon, Copy01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CopyEmailButton({
  email,
  dimmed,
}: {
  email: string;
  dimmed: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      className={`inline-grid size-[29px] place-items-center rounded-[5px] border-0 bg-transparent transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none ${dimmed ? "text-[var(--dim)]" : copied ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}
      type="button"
      onClick={copyEmail}
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied" : "Copy email address"}
    >
      <HugeiconsIcon
        icon={copied ? CheckIcon : Copy01Icon}
        size={15}
        className={`transition-transform duration-200 ${copied ? "scale-125" : "scale-100"}`}
        aria-hidden="true"
      />
      <span className="sr-only">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
