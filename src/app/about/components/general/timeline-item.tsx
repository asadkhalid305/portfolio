type Props = {
  company: string;
  date: string;
  location: string;
  position: string;
};

export default function TimelineItem({
  company,
  date,
  location,
  position,
}: Props) {
  return (
    <li className="max-md:mb-10 max-md:ml-4 md:flex-1 md:pr-4">
      <div className="absolute w-5 h-5 bg-c-dark rounded-full border border-c-dark mt-1 max-md:-ml-[1.7rem] md:-mt-[0.7rem] md:ml-1"></div>
      <div className="md:mt-4 md:ml-1">
        <time className="mb-1 text-md font-medium">{date}</time>
        <h3 className="text-xl font-bold">{position}</h3>
        <h4 className="text-lg font-semibold">{company}</h4>
        <p className="max-md:mb-4 text-base font-normal">{location}</p>
      </div>
    </li>
  );
}
