import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-[58px]">
      <p className="mb-3 text-sm text-[var(--soft)]">
        For a full look at my work, visit my main portfolio at{" "}
        <a
          className="text-[var(--muted)] underline decoration-[var(--rule)] underline-offset-4 transition-colors hover:text-[var(--foreground)]"
          href="https://idolo.dev/"
        >
          idolo.dev
        </a>
        .
      </p>
      <p className="m-0 font-mono text-[10px] text-[var(--faint)]">
        © {year} Treasure Uzoma
      </p>
    </footer>
  );
}
