import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FormattedDate } from '@/components/formatted-date';
import { TableOfContents } from '@/components/table-of-contents';
import { ShareButtons } from '@/components/share-buttons';
import { SearchModal } from '@/components/search-modal';
import { BlogCard } from '@/components/blog-card';
import { ArticleActionButtons } from '@/components/article-action-buttons';
import { getAllPosts, getPostBySlug, getPlaceholderImage } from '@/lib/posts';
import {
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  AUTHOR_PORTFOLIO,
  AUTHOR_GITHUB,
  GLOBAL_SEO_KEYWORDS,
} from '@/lib/consts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const ogImage = post.heroImage
    ? post.heroImage.startsWith('http')
      ? post.heroImage
      : `${SITE_URL}${post.heroImage}`
    : `${SITE_URL}/android-chrome-512x512.png`;

  const canonicalUrl = `${SITE_URL}/${post.slug}`;
  const keywords = Array.from(
    new Set([...(post.tags || []), post.category, ...GLOBAL_SEO_KEYWORDS])
  );

  return {
    title: post.title,
    description: post.description,
    keywords,
    authors: [{ name: post.author || AUTHOR_NAME, url: AUTHOR_PORTFOLIO }],
    alternates: {
      canonical: canonicalUrl,
      types: {
        'text/markdown': `${SITE_URL}/${post.slug}.md`,
      },
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.description,
      publishedTime: post.pubDate,
      modifiedTime: post.updatedDate || post.pubDate,
      authors: [post.author || AUTHOR_NAME],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: AUTHOR_TWITTER,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const nextPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const fallbackBg = getPlaceholderImage(post.slug);
  const heroImageSrc = post.heroImage || null;
  const isPlaceholder = !heroImageSrc || heroImageSrc.includes('blog-placeholder');
  const bgImage = heroImageSrc && heroImageSrc.includes('blog-placeholder') ? heroImageSrc : fallbackBg;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    image: [
      heroImageSrc
        ? heroImageSrc.startsWith('http')
          ? heroImageSrc
          : `${SITE_URL}${heroImageSrc}`
        : `${SITE_URL}/android-chrome-512x512.png`,
    ],
    datePublished: post.pubDate,
    dateModified: post.updatedDate || post.pubDate,
    author: {
      '@type': 'Person',
      name: post.author || AUTHOR_NAME,
      url: AUTHOR_PORTFOLIO,
      sameAs: [
        AUTHOR_GITHUB,
        `https://x.com/${AUTHOR_TWITTER.replace('@', '')}`,
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: "Priyam's Blog",
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category || 'Technology',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.category || 'Articles',
        item: `${SITE_URL}/tags/${encodeURIComponent(post.category || 'Engineering')}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/${post.slug}`,
      },
    ],
  };

  return (
    <main id="layout" className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
        suppressHydrationWarning
      />
      <Header />

      <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
        <div className="flex-1 w-full flex flex-col py-6 sm:py-8">
          {/* Back Link */}
          <div className="mb-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* Centered Article Header */}
          <header className="flex flex-col items-center text-center mb-10">
            {/* Title */}
            <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-6 leading-tight max-w-2xl mx-auto">
              {post.title}
            </h1>

            {/* Hero Cover Image */}
            {!isPlaceholder && heroImageSrc ? (
              <div className="w-full rounded-lg sm:rounded-sm overflow-hidden border border-border/80 mb-6 bg-muted shadow-xs">
                <Image
                  src={heroImageSrc}
                  alt={post.title}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto block object-cover"
                />
              </div>
            ) : (
              <div className="w-full rounded-lg sm:rounded-sm overflow-hidden border border-border/80 mb-6 bg-muted shadow-xs">
                <div className="relative w-full aspect-[16/9] flex items-center justify-center p-6 sm:p-8 overflow-hidden text-center bg-[#0c0d12]">
                  <Image
                    src={bgImage}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 brightness-[0.65]"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-center justify-center max-w-[88%]">
                    <span className="font-cooper italic text-base sm:text-xl md:text-2xl text-white leading-snug drop-shadow-md">
                      {post.coverText || post.title}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Subtitle / Description */}
            {post.description && (
              <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground text-center max-w-2xl mx-auto mb-4">
                {post.description}
              </p>
            )}

            {/* Metadata Line */}
            <div className="flex items-center justify-center flex-wrap gap-2 font-mono text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-5">
              <span>{post.author || AUTHOR_NAME}</span>
              <span className="opacity-40">·</span>
              <span>
                <FormattedDate date={post.pubDate} />
              </span>
              <span className="opacity-40">·</span>
              <span>{post.category || 'Engineering'}</span>
              <span className="opacity-40">·</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Action Buttons: Share & Copy Page */}
            <div className="flex justify-center">
              <ArticleActionButtons
                title={post.title}
                slug={post.slug}
                url={`${SITE_URL}/${post.slug}`}
                description={post.description}
                author={post.author}
                content={post.content}
                htmlContent={post.htmlContent}
                pubDate={post.pubDate}
                category={post.category}
                heroImage={post.heroImage}
              />
            </div>
          </header>

          {/* Full-bleed Stripe Divider */}
          <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border my-6" />

          {/* Table of Contents Floating Drawer */}
          {post.headings && post.headings.length > 0 && (
            <TableOfContents headings={post.headings} postTitle={post.title} />
          )}

          {/* Markdown Article Body */}
          <article
            className="prose w-full"
            dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          />

          {/* Full-bleed Stripe Divider above tags */}
          <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border mt-10 mb-6" />

          {/* Article Bottom Tags & Share */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="font-mono text-[11px] text-muted-foreground hover:text-foreground bg-muted hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border px-2 py-0.5 rounded transition-colors no-underline"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            <ShareButtons title={post.title} url={`${SITE_URL}/${post.slug}`} />
          </div>

          {/* Next Posts Section */}
          {nextPosts.length > 0 && (
            <>
              <div className="stripe-divider -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border mt-8 mb-6" />
              <div className="w-full">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-sm font-semibold text-foreground m-0">Continue Reading</h3>
                  <Link
                    href="/"
                    className="font-mono text-xs text-muted-foreground hover:text-foreground no-underline"
                  >
                    All posts &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {nextPosts.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              </div>
            </>
          )}
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
