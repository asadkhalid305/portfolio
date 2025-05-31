import { TimelineProps } from "@/app/utils/types";
import LinkButton from "./link-button";
import TimelineItem from "./timeline-item";

export default function Timeline({ record, link }: Readonly<TimelineProps>) {
  return (
    <ol className="relative max-md:border-l border-c-dark md:flex md:flex-row md:justify-between md:border-t">
      {record.map((item, index) => (
        <TimelineItem
          key={index}
          company={item.company}
          date={item.date}
          location={item.location}
          position={item.position}
        />
      ))}
      <li className="max-md:mb-10 max-md:ml-4 md:self-center">
        <LinkButton
          className="bg-c-dark text-c-light hover:bg-gray-800"
          href={link}
          showIcon
          text="Learn more"
        />
      </li>
    </ol>
  );
}
