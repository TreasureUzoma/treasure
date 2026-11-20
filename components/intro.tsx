import Image from "next/image";

export function Intro() {
  return (
    <header>
      <div className="flex items-center gap-4">
        <Image
          src="/images/avatar.png"
          alt="Treasure's Avatar"
          className="grid size-[53px] shrink-0 place-items-center rounded-full border border-[var(--avatar-border)] bg-[var(--avatar-gradient)] font-serif text-xl text-[var(--avatar-glyph)]"
          aria-hidden="true"
          width={100}
          height={100}
        />

        <div>
          <h1 className="text-base font-semibold tracking-tight text-[var(--foreground)]">
            Treasure Uzoma
          </h1>
          <p className="m-0 text-sm text-[var(--soft)]">Product Engineer </p>
        </div>
      </div>

      <div className="mt-10 space-y-5 text-[15px] leading-[1.72] text-[var(--soft)] max-[600px]:mt-8">
        <p className="m-0">
          <strong className="font-semibold text-[var(--foreground)]">
            I build products{" "}
          </strong>
          <span>
            from the first idea to production, the kind that feel fast, simple,
            and good to use.
          </span>
        </p>
        <p className="m-0 pt-2">
          For 5+ years, I&apos;ve worked across the whole stack: product
          thinking, design, frontend, backend, and the infrastructure that keeps
          things reliable.
        </p>
        <p className="m-0 pt-2">
          You can reach me at{" "}
          <a
            className="text-[var(--muted)] underline decoration-[var(--rule)] underline-offset-4 transition-colors hover:text-[var(--foreground)]"
            href="mailto:hello@idolo.dev"
          >
            hello@idolo.dev
          </a>
          .
        </p>
      </div>
    </header>
  );
}
