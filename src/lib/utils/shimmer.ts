/**
 * Generates a shimmer SVG string
 * @param w - width
 * @param h - height
 * @returns SVG string
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f1f6f8" offset="20%" />
      <stop stop-color="#e2e8f0" offset="50%" />
      <stop stop-color="#f1f6f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f1f6f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

/**
 * Converts a string to base64 (server and client safe)
 * @param str - string to convert
 * @returns base64 string
 */
const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

/**
 * Gets a shimmer data URL for use as blurDataURL in Next.js Image
 * @param w - width
 * @param h - height
 * @returns data URL string
 */
export const getShimmerDataUrl = (w: number, h: number) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
};
