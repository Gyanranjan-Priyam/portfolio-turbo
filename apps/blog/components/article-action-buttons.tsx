'use client';

import * as React from 'react';
import { BloomShareMenu } from './motion/bloom-share-menu';
import { BloomCopyMenu } from './motion/bloom-copy-menu';
import { SITE_URL } from '@/lib/consts';

interface Props {
  title: string;
  slug: string;
  url?: string;
  description?: string;
  author?: string;
  content?: string;
  htmlContent?: string;
  pubDate?: string;
  category?: string;
  heroImage?: string;
  className?: string;
}

export function ArticleActionButtons({
  title,
  slug,
  url,
  description,
  author,
  content,
  htmlContent,
  pubDate,
  category,
  heroImage,
  className,
}: Props) {
  const fullUrl = url || `${SITE_URL}/${slug}`;

  return (
    <div className={`flex items-center justify-center gap-2.5 flex-wrap relative ${className || ''}`}>
      {/* 1. Bloom Social Share Menu */}
      <BloomShareMenu
        title={title}
        slug={slug}
        description={description}
        url={fullUrl}
      />

      {/* 2. Bloom Copy Page & AI Actions Menu */}
      <BloomCopyMenu
        title={title}
        slug={slug}
        description={description}
        author={author}
        content={content}
        htmlContent={htmlContent}
        pubDate={pubDate}
        category={category}
        heroImage={heroImage}
        url={fullUrl}
      />
    </div>
  );
}
