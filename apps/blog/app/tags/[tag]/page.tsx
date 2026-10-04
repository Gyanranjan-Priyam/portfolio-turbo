import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogCard } from '@/components/blog-card';
import { SearchModal } from '@/components/search-modal';
import { getAllPosts, getAllTags, getPostsByTag } from '@/lib/posts';
import { SITE_URL } from '@/lib/consts';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `Articles tagged #${decodedTag}`,
    description: `Articles, engineering notes, and technical deep dives tagged #${decodedTag}.`,
    alternates: {
      canonical: `${SITE_URL}/tags/${encodeURIComponent(decodedTag)}`,
    },
    openGraph: {
      title: `Articles tagged #${decodedTag} | Priyam's Blog`,
      description: `Articles, engineering notes, and technical deep dives tagged #${decodedTag}.`,
    },
  };
}

export default async function TagArchivePage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);
  const allPosts = getAllPosts();

  // Get other popular tags for quick navigation
  const tagCounts: Record<string, number> = {};
  allPosts.forEach((post) => {
    post.tags?.forEach((t) => {
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    });
  });

  const otherPopularTags = Object.entries(tagCounts)
    .filter(([t]) => t.toLowerCase() !== decodedTag.toLowerCase())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([t]) => t);

  return (
    <main id="layout" className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
        <div className="flex-1 w-full flex flex-col py-6 sm:py-8">
          {/* TAG HERO SECTION */}
          <section className="flex flex-col items-center text-center my-2 mb-6 w-full">
            <div className="mb-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground no-underline transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>All Articles</span>
              </Link>
            </div>

            <h1 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
              Articles tagged <span className="font-serif italic font-normal text-foreground">#{decodedTag}</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-[480px] mx-auto mb-5 leading-relaxed">
              Browsing {posts.length} {posts.length === 1 ? 'article' : 'articles'} filed under{' '}
              <span className="font-mono text-foreground font-semibold">#{decodedTag}</span>.
            </p>

            {/* Other Topics / Popular Tags Navigation */}
            {otherPopularTags.length > 0 && (
              <div className="flex items-center justify-center gap-2 flex-wrap max-w-[540px] mx-auto pt-1">
                <span className="font-mono text-xs text-muted-foreground">Other tags:</span>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  {otherPopularTags.map((t) => (
                    <Link
                      key={t}
                      href={`/tags/${encodeURIComponent(t)}`}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-xs font-medium border bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 border-border text-muted-foreground hover:text-foreground transition-colors no-underline"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Solid line Divider */}
          <div className="h-px w-full bg-border my-4 mb-7" />

          {/* POSTS FEED SECTION */}
          <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8 w-full">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer
        latestWriting={allPosts.slice(0, 2).map((p) => ({
          title: p.title,
          href: `/${p.slug}`,
        }))}
      />
      <SearchModal posts={allPosts} />
    </main>
  );
}
