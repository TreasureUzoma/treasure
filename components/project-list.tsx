"use client";

import { useState } from "react";
import { projects } from "@/lib/portfolio";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export function ProjectList() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      className="mt-[70px] max-[600px]:mt-[55px]"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="mb-[17px] text-[13px] font-normal tracking-tight text-[var(--muted)]"
      >
        My projects
      </h2>
      <ul className="m-0 list-none p-0">
        {projects.map((project) => {
          const isDimmed =
            activeProject !== null && activeProject !== project.name;
          const isActive = activeProject === project.name;

          return (
            <li
              key={project.name}
              onMouseEnter={() => setActiveProject(project.name)}
              onMouseLeave={() => setActiveProject(null)}
              onFocus={() => setActiveProject(project.name)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setActiveProject(null);
                }
              }}
            >
              <a
                className="group grid min-h-[64px] grid-cols-[minmax(0,1fr)_auto_15px] items-center gap-4 py-2 no-underline max-[600px]:grid-cols-[minmax(0,1fr)_15px] max-[600px]:gap-3"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex min-w-0 flex-col gap-[3px]">
                  <span
                    className={`text-[15px] font-semibold tracking-[-0.018em] transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : "text-[var(--foreground)]"}`}
                  >
                    {project.name}
                  </span>
                  <span
                    className={`text-[13px] leading-[1.45] transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : isActive ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}
                  >
                    {project.description}
                  </span>
                </span>
                <span
                  className={`whitespace-nowrap pl-2 font-mono text-[10px] transition-colors duration-200 max-[600px]:hidden ${isDimmed ? "text-[var(--dim)]" : isActive ? "text-[var(--foreground)]" : "text-[var(--faint)]"}`}
                >
                  {project.platforms}
                </span>
                <HugeiconsIcon
                  size={15}
                  icon={ArrowRight02Icon}
                  className={`-translate-x-[3px] rotate-315 transition-all duration-200 ${isActive ? "translate-x-0 text-[var(--foreground)] opacity-100" : "text-[var(--foreground)] opacity-0"}`}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
