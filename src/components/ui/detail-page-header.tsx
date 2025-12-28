import LinkButton from "@/components/ui/link-button";
import Badge from "./badge";

interface DetailPageHeaderProps {
  title: string;
  backHref: string;
  backText: string;
  date?: string;
  badges?: string[];
  className?: string;
}

export default function DetailPageHeader({
  title,
  backHref,
  backText,
  date,
  badges = [],
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

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
        {date && <span>{date}</span>}
        {date && badges.length > 0 && (
          <span className="text-gray-300 dark:text-gray-700">|</span>
        )}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}
