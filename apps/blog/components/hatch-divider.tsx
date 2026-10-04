import * as React from 'react';

interface Props {
  className?: string;
}

export function HatchDivider({ className = '' }: Props) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`w-full border-b border-border my-6 ${className}`}
    />
  );
}
