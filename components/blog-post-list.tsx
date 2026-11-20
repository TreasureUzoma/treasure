"use client";

import { useState } from "react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export type BlogPostPreview = {
  slug: string;
  title: string;
  description?: string;
  publishedLabel?: string;
};

export function BlogPostList({
  posts,
  blogBaseUrl,
}: {
  posts: BlogPostPreview[];
  blogBaseUrl: string;
}) {
  const [activePost, setActivePost] = useState<string | null>(null);

  return (
    <ul className="m-0 list-none p-0">
      {posts.map((post) => {
        const isDimmed = activePost !== null && activePost !== post.slug;
        const isActive = activePost === post.slug;

        return (
          <li
            key={post.slug}
            onMouseEnter={() => setActivePost(post.slug)}
            onMouseLeave={() => setActivePost(null)}
            onFocus={() => setActivePost(post.slug)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActivePost(null);
              }
            }}
          >
            <a
              className="group grid grid-cols-[minmax(0,1fr)_16px] items-start gap-4 py-4 no-underline"
              href={new URL(`/blog/${encodeURIComponent(post.slug)}`, blogBaseUrl).toString()}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span className={`block text-[15px] font-semibold leading-snug transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : "text-[var(--foreground)]"}`}>
                  {post.title}
                </span>
                {post.description && (
                  <span className={`mt-1 block line-clamp-2 text-[13px] leading-relaxed transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : isActive ? "text-[var(--foreground)]" : "text-[var(--soft)]"}`}>
                    {post.description}
                  </span>
                )}
                {post.publishedLabel && (
                  <time className={`mt-3 block text-xs transition-colors duration-200 ${isDimmed ? "text-[var(--dim)]" : "text-[var(--muted)]"}`}>
                    {post.publishedLabel}
                  </time>
                )}
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
  );
}
