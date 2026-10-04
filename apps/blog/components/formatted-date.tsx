import * as React from 'react';

interface Props {
  date: string | Date;
}

export function FormattedDate({ date }: Props) {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  // Format with consistent en-US format
  const formatted = d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return <time dateTime={d.toISOString()}>{formatted}</time>;
}
