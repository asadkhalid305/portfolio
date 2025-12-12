"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ScrollToTopProps {
  hasChatbot?: boolean;
}

export function ScrollToTop({ hasChatbot = false }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Update URL to default "/"
    router.push("/", { scroll: false });
  };

  // Position next to chatbot on xl screens when chatbot is present
  // Chatbot is w-96 (384px) with m-4 (16px) and mb-6 (24px), align button to its bottom
  const positionClass = hasChatbot
    ? "bottom-8 right-8 xl:bottom-[1.8rem] xl:right-[26rem]"
    : "bottom-8 right-8";

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed ${positionClass} z-50 p-3 rounded-full bg-c-dark text-c-light shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}
