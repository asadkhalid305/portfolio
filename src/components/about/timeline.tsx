import { TimelineProps } from "@/utils/types";
import LinkButton from "@/components/ui/link-button";
import TimelineItem from "@/components/about/timeline-item";

export default function Timeline({
  record,
  link,
  isOverview,
}: Readonly<TimelineProps>) {
  const displayRecords = isOverview ? record.slice(0, 3) : record;

  return (
    <ol className="relative max-md:border-l border-gray-300 dark:border-gray-700 md:flex md:flex-row md:justify-between md:border-t">
      {displayRecords.map((item) => (
        <TimelineItem
          key={item.id}
          id={item.id}
          company={item.company}
          date={item.date}
          location={item.location}
          position={item.position}
        />
      ))}
      {isOverview && (
        <li className="max-md:mb-10 max-md:ml-4 md:self-center">
          <LinkButton
            href={link}
            showIcon={false}
            text="View full timeline"
            variant="minimal"
          />
        </li>
      )}
    </ol>
  );
}
