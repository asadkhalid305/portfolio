import { ImageType } from "@/utils/types";

/**
 * Helper function to get image properties with fallback defaults
 * @param image - Optional image props object
 * @returns Object with src and alt properties
 */
export function getImageProps(image?: ImageType) {
  return {
    src: image?.src || "/images/default.webp",
    alt: image?.alt || "",
  };
}
