'use client';

import * as React from 'react';

export function FooterBrand() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const gradRef = React.useRef<SVGLinearGradientElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const grad = gradRef.current;
    if (!container || !grad) return;

    const VIEWBOX_WIDTH = 1058;
    let targetX = 529;
    let currentX = 529;
    let animationFrame: number | null = null;

    function lerp() {
      currentX += (targetX - currentX) * 0.1;
      if (grad) {
        grad.setAttribute('x1', String(currentX));
      }
      if (Math.abs(targetX - currentX) > 0.5) {
        animationFrame = requestAnimationFrame(lerp);
      } else {
        animationFrame = null;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      targetX = pct * VIEWBOX_WIDTH;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(lerp);
      }
    };

    const handleMouseLeave = () => {
      targetX = VIEWBOX_WIDTH / 2;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(lerp);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="w-full shrink-0">
      <div className="w-full relative border-b border-border overflow-hidden" id="footer-interactive-brand">
        <div className="w-full overflow-hidden" ref={containerRef}>
          <div className="flex w-full translate-y-[37.5%] items-center justify-center">
            <svg
              className="w-full h-auto max-w-screen px-4"
              viewBox="0 0 1058 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 1H33V257H1V1ZM33 1H129V33H33V1ZM129 1H161V129H129V1ZM33 97H129V129H33V97ZM193 65H225V225H193V65ZM225 65H289V97H225V65ZM289 97H321V129H289V97ZM353 1H385V33H353V1ZM353 65H385V225H353V65ZM417 1H449V97H417V1ZM449 97H545V129H449V97ZM545 1H577V257H545V1ZM481 225H545V257H481V225ZM449 193H481V225H449V193ZM609 97H641V225H609V97ZM641 65H737V97H641V65ZM641 129H737V161H641V129ZM641 193H737V225H641V193ZM737 65H769V225H737V65ZM801 65H833V225H801V65ZM833 65H913V97H833V65ZM913 97H945V225H913V97ZM945 65H1025V97H945V65ZM1025 97H1057V225H1025V97Z"
                fill="url(#paint0_linear_footer_brand)"
              />
              <path
                className="stroke-foreground/10"
                d="M1 1H33V257H1V1ZM33 1H129V33H33V1ZM129 1H161V129H129V1ZM33 97H129V129H33V97ZM193 65H225V225H193V65ZM225 65H289V97H225V65ZM289 97H321V129H289V97ZM353 1H385V33H353V1ZM353 65H385V225H353V65ZM417 1H449V97H417V1ZM449 97H545V129H449V97ZM545 1H577V257H545V1ZM481 225H545V257H481V225ZM449 193H481V225H449V193ZM609 97H641V225H609V97ZM641 65H737V97H641V65ZM641 129H737V161H641V129ZM641 193H737V225H641V193ZM737 65H769V225H737V65ZM801 65H833V225H801V65ZM833 65H913V97H833V65ZM913 97H945V225H913V97ZM945 65H1025V97H945V65ZM1025 97H1057V225H1025V97Z"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  ref={gradRef}
                  id="paint0_linear_footer_brand"
                  x1="529"
                  y1="1"
                  x2="529"
                  y2="257"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.625" stopColor="var(--foreground)" stopOpacity="0" />
                  <stop offset="1" stopColor="var(--foreground)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)',
          }}
          aria-hidden="true"
        />
      </div>
      <div className="h-4 pb-[env(safe-area-inset-bottom,0)]" />
    </div>
  );
}
