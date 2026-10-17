'use client';

import * as React from 'react';

export function CodeCopyHandler() {
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest<HTMLButtonElement>('.copy-code-btn');
      if (!target) return;

      const wrapper = target.closest('.code-block-wrapper');
      if (!wrapper) return;

      const codeElem = wrapper.querySelector('pre code') || wrapper.querySelector('pre');
      const text = target.getAttribute('data-raw-code')
        ? decodeURIComponent(target.getAttribute('data-raw-code')!)
        : (codeElem?.textContent || '');

      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const originalHtml = target.innerHTML;
        target.classList.add('copied');
        target.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="text-emerald-400 font-medium">Copied!</span>
        `;

        setTimeout(() => {
          target.classList.remove('copied');
          target.innerHTML = originalHtml;
        }, 2000);
      }).catch((err) => {
        console.error('Failed to copy code: ', err);
      });
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
