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
};

type SectionDefault = {
  heading: string;
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
  whitespacePreWrap?: boolean;
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
};

export type LinkButtonProps = {
  href: string;
  text: string;
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

type Link = {
  name: string;
  href: string;
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

export type Contact = SectionDefault;

export type Chatbot = {
  prompt: string;
  dataset: string;
  limit: number;
  info: string;
};

export type ChatbotHeaderProps = {
  showChatbot: boolean;
  setShowChatbot: (value: boolean) => void;
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

export type APIErrorResponse = {
  message: string;
  type: string;
  param: null | string;
  code: string;
};
