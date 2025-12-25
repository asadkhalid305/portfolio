import LinkButton from "@/components/ui/link-button";

interface DetailPageHeaderProps {
  title: string;
  backHref: string;
  backText: string;
  date?: string;
  className?: string;
}

export default function DetailPageHeader({
  title,
  backHref,
  backText,
  date,
  className = "",
}: Readonly<DetailPageHeaderProps>) {
  return (
    <div className={className}>
      <LinkButton
        href={backHref}
        text={backText}
        variant="minimal"
        className="mb-8"
        showIcon={true}
        iconPosition="left"
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        {title}
      </h1>

      {date && (
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{date}</span>
        </div>
      )}
    </div>
  );
}
