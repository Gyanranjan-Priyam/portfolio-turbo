import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogFeed } from '@/components/blog-feed';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = [
    'All',
    ...Array.from(new Set(posts.map((p) => p.category || 'Engineering'))),
  ];

  return (
    <main id="layout" className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
        <div className="flex-1 w-full flex flex-col py-6 sm:py-8">
          <BlogFeed posts={posts} categories={categories} />
        </div>
      </div>

      <Footer
        latestWriting={posts.slice(0, 2).map((p) => ({
          title: p.title,
          href: `/${p.slug}`,
        }))}
      />
    </main>
  );
}
