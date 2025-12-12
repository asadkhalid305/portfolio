import React from "react";
import { Menu, X } from "lucide-react";

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
      aria-expanded={menuOpen}
      className={`${className} ml-3 transition-transform duration-200 hover:scale-110`}
      onClick={onClick}
    >
      {menuOpen ? (
        <X className="w-6 h-6 text-c-light" />
      ) : (
        <Menu className="w-6 h-6 text-c-light" />
      )}
    </button>
  );
}
