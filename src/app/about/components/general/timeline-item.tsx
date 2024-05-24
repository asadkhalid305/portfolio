import { TimelineItemProps } from "@/app/utils/types";

export default function TimelineItem({
  company,
  date,
  location,
  position,
}: TimelineItemProps) {
  return (
    <li className="max-md:mb-10 max-md:ml-4 md:flex-1 md:pr-4">
      <div className="absolute w-5 h-5 bg-c-dark rounded-full border border-c-dark max-md:-ml-[1.6rem] md:-mt-[0.6rem]"></div>
      <div className="md:mt-4 md:ml-1">
        <time className="mb-1 text-md font-normal italic">{date}</time>
        <h3 className="text-xl font-semibold">{position}</h3>
        <h4 className="text-lg font-medium">{company}</h4>
        <p className="max-md:mb-4 text-base font-light">{location}</p>
      </div>
    </li>
  );
}
