"use client";

import { useState } from "react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { meta } from "@/lib/meta";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const socials = [
  { name: "Twitter", href: meta.contact.x },
  { name: "GitHub", href: meta.contact.github },
  { name: "Email", href: meta.contact.email },
];

export function Elsewhere() {
  const [activeRow, setActiveRow] = useState<string | null>(null);

  return (
    <section className="mt-[54px]" aria-labelledby="elsewhere-heading">
      <h2
        id="elsewhere-heading"
        className="mb-[17px] text-[13px] font-normal tracking-tight text-[var(--muted)]"
      >
        Elsewhere
      </h2>
      <ul className="m-0 list-none p-0">
        {socials.map((social) => {
          const isDimmed = activeRow !== null && activeRow !== social.name;
          const isEmail = social.name === "Email";

          return (
            <li
              key={social.name}
              className="group/elsewhere-row grid min-h-[42px] grid-cols-[78px_minmax(0,1fr)_auto_15px] items-center transition-colors duration-200 max-[600px]:grid-cols-[66px_minmax(0,1fr)_auto_15px]"
              onMouseEnter={() => setActiveRow(social.name)}
              onMouseLeave={() => setActiveRow(null)}
              onFocus={() => setActiveRow(social.name)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setActiveRow(null);
                }
              }}
            >
              <span
                className={`text-sm font-semibold transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : "text-[var(--foreground)]"}`}
              >
                {social.name}
              </span>
              <a
                href={isEmail ? `mailto:${social.href}` : social.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer"}
                aria-label={
                  isEmail ? `Email ${social.href}` : `Visit ${social.name}`
                }
                className={`min-w-0 truncate text-sm no-underline transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : activeRow === social.name ? "text-[var(--foreground)]" : "text-[var(--soft)]"}`}
              >
                {social.href.replace(/(^\w+:|^)\/\//, "")}
              </a>
              {isEmail ? (
                <>
                  <CopyEmailButton
                    email={meta.contact.email}
                    dimmed={isDimmed}
                  />
                </>
              ) : (
                <HugeiconsIcon
                  size={15}
                  icon={ArrowRight02Icon}
                  className="rotate-315 text-[var(--foreground)] opacity-0 transition-all duration-200 group-hover/elsewhere-row:translate-x-0 group-hover/elsewhere-row:opacity-100 group-focus-within/elsewhere-row:translate-x-0 group-focus-within/elsewhere-row:opacity-100"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
