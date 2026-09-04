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
      className={`${className} ml-3`}
      onClick={onClick}
    >
      {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
