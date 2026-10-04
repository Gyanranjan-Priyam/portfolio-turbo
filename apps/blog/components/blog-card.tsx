import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostData, getPlaceholderImage } from '@/lib/types';
import { FormattedDate } from './formatted-date';

interface Props {
  post: BlogPostData;
}

function getCategoryTheme(category: string) {
  const key = category?.toLowerCase().trim() || 'engineering';
  if (key.includes('career') || key.includes('journey')) {
    return { bar: 'bg-amber-500', text: 'text-amber-500' };
  }
  if (key.includes('student') || key.includes('campus')) {
    return { bar: 'bg-emerald-400', text: 'text-emerald-400' };
  }
  if (key.includes('tutorial') || key.includes('guide')) {
    return { bar: 'bg-purple-400', text: 'text-purple-400' };
  }
  return { bar: 'bg-cyan-400', text: 'text-cyan-400' };
}

export function BlogCard({ post }: Props) {
  const { slug, title, description, pubDate, heroImage, readingTime, category } = post;
  const fallbackBg = getPlaceholderImage(slug);
  const isPlaceholder = !heroImage || heroImage.includes('blog-placeholder');
  const bgImage = heroImage && heroImage.includes('blog-placeholder') ? heroImage : fallbackBg;
  const catTheme = getCategoryTheme(category || 'Engineering');

  return (
    <article className="group flex flex-col h-full transition-all duration-200">
      <Link href={`/${slug}`} className="flex flex-col h-full text-inherit no-underline" aria-label={title}>
        {/* Thumbnail Cover Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-sm overflow-hidden border border-border/80 bg-muted mb-3.5 group-hover:border-foreground/30 transition-colors">
          {!isPlaceholder && heroImage ? (
            <Image
              src={heroImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover object-center block group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden text-center bg-[#0c0d12]">
              <Image
                src={bgImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover opacity-75 brightness-[0.65] group-hover:scale-[1.04] transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="relative z-10 flex items-center justify-center max-w-[88%] px-2">
                <span className="font-cooper italic text-xs sm:text-sm text-white leading-snug line-clamp-3 drop-shadow-md">
                  {post.coverText || title}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Category Bar Prefix */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider uppercase mb-1.5">
            <span className={`w-1 h-3.5 rounded-xs ${catTheme.bar}`} />
            <span className={catTheme.text}>{category || 'ENGINEERING'}</span>
          </div>

          {/* Title */}
          <h3 className="font-sans text-[15px] sm:text-[17px] font-bold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="font-sans text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>

          {/* Bottom metadata */}
          <div className="mt-auto flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span>
              <FormattedDate date={pubDate} />
            </span>
            <span className="opacity-40">·</span>
            <span>{readingTime || '5 min read'}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
