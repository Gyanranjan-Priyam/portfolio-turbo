'use client';

import * as React from 'react';

export function LocalTime() {
  const [time, setTime] = React.useState<string>('');

  React.useEffect(() => {
    function updateTime() {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch {
        setTime('');
      }
    }
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1 text-xs sm:text-[13px] text-muted-foreground leading-snug">
      <span className="text-foreground font-medium">Odisha, India</span>
      <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">
        {time ? `${time} IST` : 'IST (UTC+5:30)'}
      </span>
    </div>
  );
}
