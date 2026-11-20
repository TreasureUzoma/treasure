import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BlogPostList, type BlogPostPreview } from "@/components/blog-post-list";

type BlogPreview = {
  slug?: string;
  title?: string;
  description?: string;
  publishedAt?: string;
};

type BlogApiResponse = {
  data?: BlogPreview[];
};

const blogBaseUrl =
  process.env.BLOG_URL ||
  process.env.NEXT_PUBLIC_BLOG_URL ||
  "https://idolo.dev";

function formatDate(date: string) {
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) return date;

  return value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function getLatestPosts() {
  const apiBaseUrl = process.env.API_BLOG_URL?.trim().replace(/\/+$/, "");
  if (!apiBaseUrl) return null;

  try {
    const response = await fetch(
      `${apiBaseUrl}/api/blogs?page=1&limit=2&sortBy=updatedAt&order=des`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return null;

    const result = (await response.json()) as BlogApiResponse;
    return (result.data ?? []).filter(
      (post): post is BlogPreview & { slug: string; title: string } =>
        Boolean(post.slug && post.title),
    ).map((post): BlogPostPreview => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishedLabel: post.publishedAt ? formatDate(post.publishedAt) : undefined,
    }));
  } catch {
    return null;
  }
}

export async function LatestBlog() {
  const posts = await getLatestPosts();

  return (
    <section
      className="mt-[62px] max-[600px]:mt-[52px]"
      aria-labelledby="blog-heading"
    >
      <div className="mb-[17px] flex items-baseline justify-between gap-4">
        <h2
          id="blog-heading"
          className="text-[13px] font-normal tracking-tight text-[var(--muted)]"
        >
          Latest from the blog
        </h2>
        <a
          className="group inline-flex items-center gap-1 text-xs text-[var(--soft)] underline decoration-[var(--rule)] underline-offset-4 transition-colors hover:text-[var(--foreground)]"
          href={blogBaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          All posts{" "}
          <HugeiconsIcon
            size={15}
            icon={ArrowRight02Icon}
            className="-translate-x-[3px] rotate-315 text-[var(--foreground)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
            aria-hidden="true"
          />
        </a>
      </div>

      {posts?.length ? (
        <BlogPostList posts={posts} blogBaseUrl={blogBaseUrl} />
      ) : (
        <p className="m-0 text-sm text-[var(--soft)]">
          Visit the blog to read the latest posts.
        </p>
      )}
    </section>
  );
}
