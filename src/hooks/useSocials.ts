import socialsData from "@/constants/socials.json";

/**
 * Custom hook to access social links
 * Provides consistent access to social media links across components
 */
export const useSocials = () => {
  return socialsData;
};
