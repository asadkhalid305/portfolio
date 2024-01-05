import LinkButton from "./link-button";
import TimelineItem from "./timeline-item";

type Record = {
  company: string;
  date: string;
  location: string;
  position: string;
};

type Props = {
  record: Record[];
};

const linkedInExperience =
  "https://www.linkedin.com/in/asadkhalid305/details/experience/";

export default function Timeline({ record }: Props) {
  return (
    <ol className="relative border-c-dark max-md:border-l md:flex md:flex-row md:justify-between md:border-t">
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
        <LinkButton href={linkedInExperience} text="Learn more" />
      </li>
    </ol>
  );
}
