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
 * Intro section configuration
 */
export type Intro = {
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
  limit: number;
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
  isMessageLimitReached: boolean;
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
