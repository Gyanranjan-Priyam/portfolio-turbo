import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';
import { AUTHOR_NAME } from '@/lib/consts';

export const alt = 'Article OpenGraph Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title || 'Priyam\'s Blog Article';
  const category = post?.category || 'Engineering';
  const readingTime = post?.readingTime || '5 min read';
  const tags = post?.tags?.slice(0, 3) || [];

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#090a0f',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative background glows */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '50px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              GP
            </div>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#f3f4f6',
              }}
            >
              Priyam&apos;s Blog
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#60a5fa',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {category}
          </div>
        </div>

        {/* Center: Article Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '1040px',
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? '46px' : '54px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            {title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '4px',
            }}
          >
            <span style={{ fontSize: '15px', color: '#9ca3af' }}>{readingTime}</span>
            {tags.length > 0 && (
              <>
                <span style={{ fontSize: '15px', color: '#4b5563' }}>·</span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Bottom footer bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '16px', color: '#e5e7eb', fontWeight: 600 }}>
              {AUTHOR_NAME}
            </span>
            <span style={{ fontSize: '15px', color: '#6b7280' }}>·</span>
            <span style={{ fontSize: '15px', color: '#9ca3af' }}>blogs.priyam.tech</span>
          </div>

          <span
            style={{
              fontSize: '14px',
              color: '#60a5fa',
              fontWeight: 500,
            }}
          >
            Read Full Article &rarr;
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
