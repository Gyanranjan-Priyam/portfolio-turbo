import { ImageResponse } from 'next/og';
import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR_NAME } from '@/lib/consts';

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Background Decorative Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />

        {/* Top Bar */}
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
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              GP
            </div>
            <span
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#f3f4f6',
                letterSpacing: '-0.02em',
              }}
            >
              blogs.priyam.tech
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Engineering & Web Architecture
          </div>
        </div>

        {/* Middle: Title & Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Priyam&apos;s Engineering Blog
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {SITE_DESCRIPTION}
          </p>
        </div>

        {/* Bottom Bar: Author info & Stack tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '18px', color: '#e5e7eb', fontWeight: 600 }}>
              {AUTHOR_NAME}
            </span>
            <span style={{ fontSize: '16px', color: '#6b7280' }}>·</span>
            <span style={{ fontSize: '16px', color: '#9ca3af' }}>@gr_priyam</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            {['Next.js 16', 'React 19', 'TypeScript', 'Web Architecture'].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#d1d5db',
                  fontSize: '13px',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
