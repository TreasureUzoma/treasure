import { experience } from "@/lib/portfolio";

export function ExperienceList() {
  return (
    <section className="mt-[62px] max-[600px]:mt-[52px]" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="mb-[17px] text-[13px] font-normal tracking-tight text-[var(--muted)]">
        Experience
      </h2>
      <ul className="m-0 list-none p-0">
        {experience.map((item) => (
          <li key={item.company} className="flex min-h-[52px] items-center justify-between gap-6 py-2">
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[15px] font-semibold tracking-[-0.018em] text-[var(--foreground)]">
                {item.company}
              </span>
              <span className="text-sm text-[var(--muted)]">{item.role}</span>
            </div>
            {item.period && (
              <span className="shrink-0 font-mono text-xs text-[var(--muted)]">
                {item.period}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
