
"use client";

import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const containerClass = `relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg ${className || ''}`;
  
  const gradientClass = `
    aurora-gradient
    ${showRadialGradient ? 'aurora-mask' : ''}
  `;

  return (
    <main>
      <div
        className={containerClass}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className={gradientClass}></div>
        </div>
        {children}
      </div>
    </main>
  );
};
