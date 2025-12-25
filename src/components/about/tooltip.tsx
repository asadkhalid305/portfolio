"use client";

import { useState } from "react";
import { TooltipProps } from "@/utils/types";

export default function Tooltip({ text, children }: Readonly<TooltipProps>) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <button
      type="button"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setShowTooltip((prev) => !prev);
        }
      }}
      className="relative bg-transparent border-none p-0 m-0 cursor-pointer"
      style={{ background: "none" }}
    >
      {showTooltip && (
        <div className="absolute w-96 mb-2 p-4 text-left bottom-full left-1/2 bg-c-dark text-c-light text-md text-normal rounded-md z-10transform -translate-x-1/2 transition-all duration-300 ease-in-out">
          {text}
        </div>
      )}
      {children}
    </button>
  );
}
