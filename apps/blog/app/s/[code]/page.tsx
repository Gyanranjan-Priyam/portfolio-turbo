import { redirect } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import { getShortCode, resolveSlugFromShortCode } from '@/lib/short-url';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    code: getShortCode(post.slug),
  }));
}

export default async function ShortUrlRedirectPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const posts = getAllPosts();
  const slug = resolveSlugFromShortCode(
    code,
    posts.map((p) => p.slug)
  );

  if (!slug) {
    redirect('/');
  }

  redirect(`/${slug}`);
}
