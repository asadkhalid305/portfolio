import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import DetailPageHeader from "@/components/ui/detail-page-header";
import DetailPageImage from "@/components/ui/detail-page-image";
import ActionsSidebar from "@/components/ui/actions-sidebar";

interface Action {
  href: string;
  label: string;
  external?: boolean;
}

interface DetailPageLayoutProps {
  title: string;
  description?: string;
  backHref: string;
  backText: string;
  badges?: string[];
  date?: string;
  image: {
    src: string;
    alt: string;
    layout?: "square" | "video";
  };
  actions: Action[];
  aboutHeading: string;
  actionsHeading: string;
  children: ReactNode;
  className?: string; // For additional styling on Section if needed
}

export default function DetailPageLayout({
  title,
  backHref,
  backText,
  badges = [],
  date,
  image,
  actions,
  aboutHeading,
  actionsHeading,
  children,
  className = "min-h-[calc(100vh-80px)] py-20",
}: Readonly<DetailPageLayoutProps>) {
  return (
    <Section className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <DetailPageHeader
            title={title}
            backHref={backHref}
            backText={backText}
            badges={badges}
            date={date}
          />

          <DetailPageImage
            src={image.src}
            alt={image.alt}
            layout={image.layout}
          />

          <div
            className={`grid gap-12 ${
              actions.length > 0 ? "lg:grid-cols-3" : ""
            }`}
          >
            <div
              className={`${
                actions.length > 0 ? "lg:col-span-2" : ""
              } space-y-6`}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {aboutHeading}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {children}
              </div>
            </div>

            {actions.length > 0 && (
              <div className="lg:col-span-1">
                <ActionsSidebar title={actionsHeading} actions={actions} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
