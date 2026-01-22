import { ReactNode } from "react";

// ============================================================================
// COMMON TYPES
// ============================================================================

/**
 * Image properties for Next.js Image component
 */
export type ImageType = {
  src: string;
  alt: string;
};

/**
 * Navigation link
 */
type Link = {
  name: string;
  href: string;
  dropdown?: Link[];
};

/**
 * Social media link with icon
 */
type SocialLink = Link;

/**
 * User profile information
 */
type Profile = {
  name: string;
  role: string;
  position: string;
  company: string;
};

// ============================================================================
// LAYOUT TYPES
// ============================================================================

export type Metadata = {
  title: string;
  description: string;
};

export type LayoutProps = {
  children: ReactNode;
};

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

/**
 * Props for DisplayInfo component - displays section heading and description
 */
export type DisplayInfoProps = {
  description?: string;
  heading: string;
  label?: string;
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
};

/**
 * Props for LinkButton component
 */
export type LinkButtonProps = {
  href: string;
  text: string;
  showIcon: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "minimal";
  iconPosition?: "left" | "right";
};

// ============================================================================
// CARD COMPONENT TYPES
// ============================================================================

/**
 * Props for VCardGrid component - displays a grid of vertical cards
 */
export type CardSystemProps = {
  heading: string;
  records: VCardProps[];
  isOverview?: boolean;
  hideLink?: boolean;
};

/**
 * Props for VCard (Vertical Card) - used for events and blogs
 */
export type VCardProps = {
  id: string;
  title: string;
  description?: string;
  image: ImageType;
  link: string;
  date: string;
  horizontal?: boolean;
  badges?: string[];
  linkText?: string;
};

/**
 * Props for TCard (Testimonial Card)
 */
export type TCardProps = {
  text: string;
  author: {
    name: string;
    image: ImageType;
    job: string;
    link: string;
  };
  source?: "LinkedIn" | "Topmate.io";
  rating?: number;
  expanded?: boolean;
};

// ============================================================================
// TIMELINE COMPONENT TYPES
// ============================================================================

/**
 * Props for Timeline component - displays work experience timeline
 */
export type TimelineProps = {
  record: TimelineItemProps[];
  link: string;
  isOverview?: boolean;
};

/**
 * Props for individual timeline item
 */
export type TimelineItemProps = {
  id: string;
  company: string;
  date: string;
  location: string;
  position: string;
};

/**
 * Props for detailed experience card
 */
export type ExperienceCardProps = {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Volunteer";
  period: string;
  duration: string;
  location: string;
  mode: "On-site" | "Hybrid" | "Remote";
  link?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  expanded?: boolean;
};

// ============================================================================
// NAVIGATION & HEADER TYPES
// ============================================================================

export type Header = {
  links: Link[];
};

export type HeaderLinksProps = Header;

// ============================================================================
// PROFILE & CONTACT TYPES
// ============================================================================

export type ProfileCardProps = Profile;

/**
 * Contact section configuration
 */
export type Contact = {
  heading: string;
  description: string;
  profile: Profile;
};

/**
 * About section configuration
 */
export type About = {
  heading: string;
  description: string;
};

// ============================================================================
// SOCIAL MEDIA TYPES
// ============================================================================

export type Socials = {
  linkedIn: SocialLink;
  github: SocialLink;
  topmateIO: SocialLink;
  mercedesBenzIO: SocialLink;
};

// ============================================================================
// CHATBOT TYPES
// ============================================================================

/**
 * Chatbot configuration and content
 */
export type Chatbot = {
  config: {
    model: string;
    temperature: number;
    maxTokens: number;
  };
  prompt: string;
  dataset: string;
  info: string;
  header: {
    heading: string;
  };
};

/**
 * Props for ChatbotHeader component
 */
export type ChatbotHeaderProps = {
  toggleChatbot: boolean;
  setToggleChatbot: (value: boolean) => void;
};

/**
 * Chatbot message structure
 */
export type ChatbotMessage = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Props for individual ChatbotMessage component
 */
export interface ChatbotMessageProps {
  message: ChatbotMessage;
  index: number;
}

/**
 * Props for ChatbotMessages list component
 */
export type ChatbotMessagesProps = {
  messages: ChatbotMessage[];
  loading: boolean;
};

/**
 * Props for ChatbotForm component
 */
export type ChatbotFormProps = {
  userInput: string;
  setUserInput: (value: string) => void;
  handleSend: (event: React.FormEvent<HTMLFormElement>) => void;
};

// ============================================================================
// UI COMPONENT TYPES
// ============================================================================

/**
 * Props for Tooltip component
 */
export type TooltipProps = {
  text: string;
  children: ReactNode;
};

// ============================================================================
// MDX CONTENT TYPES
// ============================================================================

export type ContentType = "blogs" | "events" | "projects" | "book-reviews";

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  image: {
    src: string;
    alt: string;
  };
  type?: "Conference" | "Mentorship" | "Workshop" | "Panel" | "Community";
  event?: string;
  originalLink?: string;
  githubUrl?: string;
  liveUrl?: string;
  presentationUrl?: string;
  badges?: string[];
}

export interface Post {
  slug: string;
  content: string;
  frontmatter: Frontmatter;
}
