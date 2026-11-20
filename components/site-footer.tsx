import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-[58px] font-mono text-[10px] text-[var(--faint)]">
      © {year} Treasure Uzoma
    </footer>
  );
}
