import { ReactNode } from "react";

//Common
type Item = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  date: string;
};

type SectionDefault = {
  heading: string;
  description: string;
};

type Link = {
  name: string;
  href: string;
};

type SocialLink = Link & {
  icon: string;
};

type Profile = {
  name: string;
  role: string;
  position: string;
  company: string;
};

export type Metadata = {
  title: string;
  description: string;
};

export type LayoutProps = {
  children: ReactNode;
};

export type ButtonProps = {
  children: string;
};

export type DisplayInfoProps = {
  description?: string;
  heading: string;
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
};

export type CardSystemProps = {
  heading: string;
  records: VCardProps[];
};

export type VCardProps = {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  date: string;
};

export type LinkButtonProps = {
  href: string;
  text: string;
  showIcon: boolean;
  className?: string;
};

export type TimelineProps = {
  record: TimelineItemProps[];
  link: string;
};

export type TimelineItemProps = {
  company: string;
  date: string;
  location: string;
  position: string;
};

export type TCardProps = {
  text: string;
  author: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
    job: string;
    link: string;
  };
};

export type Header = {
  links: Link[];
};

export type HeaderLinksProps = Header;

export type Intro = SectionDefault;

export type Journey = SectionDefault;

export type Experience = SectionDefault & {
  items: {
    company: string;
    date: string;
    location: string;
    position: string;
  }[];
  linkedInLink: string;
};

export type Contribution = SectionDefault & {
  items: {
    events: Item[];
    blogs: Item[];
  };
};

export type Testimonial = Pick<SectionDefault, "heading"> & {
  items: TCardProps[];
};

export type Contact = SectionDefault & {
  profile: Profile;
};

export type ProfileCardProps = Profile;

export type Socials = {
  linkedIn: SocialLink;
  github: SocialLink;
  topmateIO: SocialLink;
  mercedesBenzIO: SocialLink;
};

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

export type ChatbotHeaderProps = {
  toggleChatbot: boolean;
  setToggleChatbot: (value: boolean) => void;
};

export type ChatbotMessage = {
  role: string;
  content: string;
};

export interface ChatbotMessageProps {
  message: ChatbotMessage;
  index: number;
}

export type ChatbotMessagesProps = {
  messages: ChatbotMessage[];
  loading: boolean;
};

export type ChatbotFormProps = {
  userInput: string;
  setUserInput: (value: string) => void;
  isMessageLimitReached: boolean;
  handleSend: (event: React.FormEvent<HTMLFormElement>) => void;
};
