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
    <li className="max-md:mb-10 max-md:ml-4 md:pr-4">
      <div className="absolute w-4 h-4 bg-black rounded-full border border-c-gray mt-1 max-md:-ml-6 md:-mt-2"></div>
      <div className="md:mt-4">
        <time className="mb-1 text-sm font-semibold leading-none">{date}</time>
        <h3 className="text-lg font-bold">{position}</h3>
        <h4 className="font-semibold">{company}</h4>
        <p className="max-md:mb-4 text-sm font-normal">{location}</p>
      </div>
    </li>
  );
}
