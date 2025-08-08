import React from "react";

interface NavMenuButtonProps {
  menuOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function NavMenuButton({
  menuOpen,
  onClick,
  className = "",
}: Readonly<NavMenuButtonProps>) {
  return (
    <button
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      className={className + " ml-3"}
      onClick={onClick}
    >
      {menuOpen ? (
        <span className="block w-6 h-6 text-2xl leading-none">&#10005;</span>
      ) : (
        <span className="block w-6 h-6 relative">
          <span className="absolute left-0 top-1 w-6 h-0.5 bg-c-light rounded transition-all duration-300"></span>
          <span className="absolute left-0 top-3 w-6 h-0.5 bg-c-light rounded transition-all duration-300"></span>
          <span className="absolute left-0 top-5 w-6 h-0.5 bg-c-light rounded transition-all duration-300"></span>
        </span>
      )}
    </button>
  );
}
