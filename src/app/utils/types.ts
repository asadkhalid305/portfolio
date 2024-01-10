import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type ButtonProps = {
  children: string;
};

export type DisplayInfoProps = {
  description: ReactNode;
  heading: string;
  centerHeading?: boolean;
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  whitespacePreWrap?: boolean;
};

export type CardSystemProps = {
  heading: string;
  records: CardProps[];
};

export type CardProps = {
  title: string;
  description?: string;
  image: {
    src: StaticImageData;
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
