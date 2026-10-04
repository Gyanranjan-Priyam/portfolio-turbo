'use client';

import { SITE_URL } from './consts';

export interface ExportPdfOptions {
  title: string;
  slug: string;
  description?: string;
  author?: string;
  content?: string;
  htmlContent?: string;
  url?: string;
  pubDate?: string;
  category?: string;
  heroImage?: string;
}

/**
 * Converts markdown/HTML article into a beautifully formatted PDF document.
 * - Embeds all images properly with absolute URLs
 * - Replaces video/iframe embeds with styled, clickable video links
 * - Retains active hyperlinks in the generated PDF
 * - Uses client-side background rendering with html2pdf.js and iframe fallback
 */
export async function exportArticleToPdf(options: ExportPdfOptions): Promise<void> {
  const {
    title,
    slug,
    description,
    author = 'Gyanranjan Priyam',
    content,
    htmlContent,
    url,
    pubDate,
    category,
    heroImage,
  } = options;

  const fullUrl = url || `${SITE_URL}/${slug}`;
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE_URL;

  // 1. Prepare Article Content HTML
  let rawHtml = htmlContent || '';

  // Fallback: If no htmlContent provided, convert basic markdown to HTML
  if (!rawHtml && content) {
    rawHtml = content
      .replace(/^### (.*$)/gim, '<h3 style="font-size: 16px; font-weight: 700; margin-top: 18px; margin-bottom: 8px; color: #1e293b;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="font-size: 19px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 style="font-size: 24px; font-weight: 800; margin-top: 28px; margin-bottom: 12px; color: #0f172a;">$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" style="max-width: 100%; border-radius: 6px; margin: 16px 0;" />')
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" style="color: #2563eb; text-decoration: underline;">$1</a>')
      .replace(/\n\n/gim, '</p><p style="margin: 12px 0; line-height: 1.65; color: #334155;">')
      .replace(/\n/gim, '<br />');
    rawHtml = `<p style="margin: 12px 0; line-height: 1.65; color: #334155;">${rawHtml}</p>`;
  }

  // 2. Parse and transform HTML elements (images, videos, links)
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${rawHtml}</div>`, 'text/html');
  const container = doc.body.firstElementChild as HTMLElement;

  if (container) {
    // A. Fix Images: Convert relative URLs to absolute & ensure styles
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      let src = img.getAttribute('src') || '';
      if (src.startsWith('/')) {
        src = `${origin}${src}`;
        img.setAttribute('src', src);
      }
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '16px auto';
      img.style.borderRadius = '6px';
      img.style.border = '1px solid #e2e8f0';
      img.style.pageBreakInside = 'avoid';
      img.style.breakInside = 'avoid';
    });

    // B. Transform Videos & IFrames: Replace with stylish clickable callout box
    const videoElements = container.querySelectorAll('video, iframe, embed, object');
    videoElements.forEach((el) => {
      let videoSrc = el.getAttribute('src') || '';
      if (!videoSrc && el.tagName.toLowerCase() === 'video') {
        const source = el.querySelector('source');
        if (source) videoSrc = source.getAttribute('src') || '';
      }

      if (videoSrc.startsWith('/')) {
        videoSrc = `${origin}${videoSrc}`;
      }

      // Detect video provider title
      let providerName = 'Video Link';
      if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
        providerName = 'YouTube Video';
      } else if (videoSrc.includes('vimeo.com')) {
        providerName = 'Vimeo Video';
      } else if (videoSrc.includes('.mp4') || videoSrc.includes('.webm')) {
        providerName = 'Direct Video Stream';
      }

      const callout = doc.createElement('div');
      callout.className = 'pdf-video-callout';
      callout.style.cssText = `
        border: 1px solid #cbd5e1;
        background-color: #f8fafc;
        border-radius: 8px;
        padding: 14px 18px;
        margin: 18px 0;
        page-break-inside: avoid;
        break-inside: avoid;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      callout.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #0f172a; font-size: 13px;">
          <span style="font-size: 16px;">🎬</span>
          <span>${providerName}:</span>
          <a href="${videoSrc || fullUrl}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 700; margin-left: 4px;">
            Watch Video Online &rarr;
          </a>
        </div>
        <div style="font-size: 11px; color: #64748b; margin-top: 6px; word-break: break-all;">
          <strong>URL:</strong> <a href="${videoSrc || fullUrl}" target="_blank" style="color: #475569; text-decoration: underline;">${videoSrc || fullUrl}</a>
        </div>
        <div style="font-size: 10px; color: #94a3b8; margin-top: 3px; font-style: italic;">
          (Click the link above to view video in your browser)
        </div>
      `;

      el.parentNode?.replaceChild(callout, el);
    });

    // C. Enhance Links: Ensure all links are absolute & formatted
    const links = container.querySelectorAll('a');
    links.forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('/')) {
        a.setAttribute('href', `${origin}${href}`);
      }
      a.style.color = '#2563eb';
      a.style.textDecoration = 'underline';
    });

    // D. Style Code Blocks & Pre
    const preBlocks = container.querySelectorAll('pre');
    preBlocks.forEach((pre) => {
      pre.style.backgroundColor = '#0f172a';
      pre.style.color = '#f8fafc';
      pre.style.padding = '14px 16px';
      pre.style.borderRadius = '6px';
      pre.style.overflowX = 'auto';
      pre.style.fontSize = '12px';
      pre.style.fontFamily = 'monospace';
      pre.style.margin = '16px 0';
      pre.style.pageBreakInside = 'avoid';
      pre.style.breakInside = 'avoid';
    });

    // E. Style Blockquotes
    const blockquotes = container.querySelectorAll('blockquote');
    blockquotes.forEach((bq) => {
      bq.style.borderLeft = '4px solid #3b82f6';
      bq.style.backgroundColor = '#f1f5f9';
      bq.style.padding = '10px 16px';
      bq.style.margin = '16px 0';
      bq.style.borderRadius = '0 6px 6px 0';
      bq.style.color = '#475569';
      bq.style.fontStyle = 'italic';
      bq.style.pageBreakInside = 'avoid';
      bq.style.breakInside = 'avoid';
    });

    // F. Style Tables
    const tables = container.querySelectorAll('table');
    tables.forEach((tbl) => {
      tbl.style.width = '100%';
      tbl.style.borderCollapse = 'collapse';
      tbl.style.margin = '18px 0';
      tbl.style.fontSize = '13px';
      tbl.style.pageBreakInside = 'avoid';
      tbl.style.breakInside = 'avoid';
      tbl.querySelectorAll('th, td').forEach((cell) => {
        (cell as HTMLElement).style.border = '1px solid #cbd5e1';
        (cell as HTMLElement).style.padding = '8px 12px';
      });
      tbl.querySelectorAll('th').forEach((th) => {
        (th as HTMLElement).style.backgroundColor = '#f1f5f9';
        (th as HTMLElement).style.fontWeight = '700';
      });
    });
  }

  // 3. Assemble Complete PDF Template Wrapper
  const formattedDate = pubDate
    ? new Date(pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const heroImageHtml = heroImage
    ? `<div style="margin: 16px 0 24px 0; border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; page-break-inside: avoid; break-inside: avoid;">
        <img src="${heroImage.startsWith('/') ? `${origin}${heroImage}` : heroImage}" alt="${title}" style="width: 100%; height: auto; display: block; max-height: 380px; object-fit: cover;" />
      </div>`
    : '';

  const printWrapper = document.createElement('div');
  printWrapper.id = 'pdf-export-container';
  printWrapper.style.cssText = `
    position: fixed;
    top: -99999px;
    left: -99999px;
    width: 794px;
    background-color: #ffffff;
    color: #1e293b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.65;
    padding: 32px 36px;
    box-sizing: border-box;
  `;

  printWrapper.innerHTML = `
    <!-- PDF Header Branding -->
    <div style="border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: baseline;">
      <div>
        <span style="font-size: 16px; font-weight: 800; color: #0f172a; letter-spacing: -0.5px;">PRIYAM'S BLOG</span>
        <span style="font-size: 12px; color: #64748b; margin-left: 8px;">Engineering & Technical Writing</span>
      </div>
      <div style="font-size: 11px; color: #64748b; font-family: monospace;">
        <a href="${fullUrl}" target="_blank" style="color: #64748b; text-decoration: none;">${fullUrl.replace(/^https?:\/\//, '')}</a>
      </div>
    </div>

    <!-- Article Header -->
    <div style="margin-bottom: 22px; page-break-inside: avoid; break-inside: avoid;">
      <h1 style="font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.25; margin: 0 0 10px 0; letter-spacing: -0.5px;">
        ${title}
      </h1>
      ${
        description
          ? `<p style="font-size: 15px; color: #475569; font-style: italic; line-height: 1.5; margin: 0 0 14px 0;">
              ${description}
            </p>`
          : ''
      }
      <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: #64748b; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
        <span><strong>Author:</strong> ${author}</span>
        ${formattedDate ? `<span>&bull;</span> <span><strong>Date:</strong> ${formattedDate}</span>` : ''}
        ${category ? `<span>&bull;</span> <span><strong>Category:</strong> ${category}</span>` : ''}
      </div>
    </div>

    <!-- Hero Image (if present) -->
    ${heroImageHtml}

    <!-- Article Body Content -->
    <div class="pdf-body-content" style="color: #334155; font-size: 13.5px; line-height: 1.7;">
      ${container ? container.innerHTML : rawHtml}
    </div>

    <!-- PDF Footer -->
    <div style="margin-top: 36px; padding-top: 14px; border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; display: flex; justify-content: space-between; align-items: center; page-break-inside: avoid; break-inside: avoid;">
      <div>
        Exported from <strong>Priyam's Blog</strong> &bull; <a href="https://www.priyam.tech" target="_blank" style="color: #2563eb;">www.priyam.tech</a>
      </div>
      <div>
        <a href="${fullUrl}" target="_blank" style="color: #2563eb; text-decoration: underline;">Read Original Article &rarr;</a>
      </div>
    </div>
  `;

  document.body.appendChild(printWrapper);

  // 4. Preload all images before PDF conversion
  const renderedImages = Array.from(printWrapper.querySelectorAll('img'));
  if (renderedImages.length > 0) {
    await Promise.all(
      renderedImages.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
          setTimeout(() => resolve(true), 3000); // 3s timeout
        });
      })
    );
  }

  try {
    // 5. Generate PDF using html2pdf.js
    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default || html2pdfModule;

    const opt = {
      margin: [12, 12, 12, 12] as [number, number, number, number],
      filename: `${slug}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
      },
      jsPDF: {
        unit: 'mm' as const,
        format: 'a4' as const,
        orientation: 'portrait' as const,
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'] as const,
        avoid: ['.pdf-video-callout', 'pre', 'blockquote', 'table', 'img', 'h1', 'h2', 'h3'],
      },
    };

    await html2pdf().set(opt).from(printWrapper).save();
  } catch (err) {
    console.warn('[PDF] html2pdf generation fallback to print dialog:', err);
    // Fallback: Use iframe print method
    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = 'none';
    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow?.document;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title} - Priyam's Blog</title>
            <style>
              @page { size: A4; margin: 15mm; }
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b; margin: 0; padding: 0; }
              a { color: #2563eb; text-decoration: underline; }
              .pdf-video-callout { page-break-inside: avoid; }
              pre, blockquote, table, img { page-break-inside: avoid; }
            </style>
          </head>
          <body>
            ${printWrapper.innerHTML}
          </body>
        </html>
      `);
      frameDoc.close();
      printFrame.contentWindow?.focus();
      printFrame.contentWindow?.print();
    }
    setTimeout(() => {
      document.body.removeChild(printFrame);
    }, 1000);
  } finally {
    if (document.body.contains(printWrapper)) {
      document.body.removeChild(printWrapper);
    }
  }
}
