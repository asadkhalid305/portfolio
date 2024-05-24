"use client";

import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative"
    >
      {showTooltip && (
        <div className="absolute w-96 mb-2 p-4 text-left bottom-full left-1/2 bg-c-dark text-c-light text-md text-normal rounded-md z-10transform -translate-x-1/2 transition-all duration-300 ease-in-out">
          {text}
        </div>
      )}
      {children}
    </div>
  );
}
