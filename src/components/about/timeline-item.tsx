import { TimelineItemProps } from "@/utils/types";

export default function TimelineItem({
  company,
  date,
  location,
  position,
}: Readonly<TimelineItemProps>) {
  return (
    <li className="relative group max-md:mb-10 max-md:pl-8 md:flex-1 md:pr-4">
      {/* Dot on the timeline */}
      <div className="absolute w-4 h-4 bg-c-dark dark:bg-white rounded-full 
        ring-4 ring-gray-100 dark:ring-gray-800 
        group-hover:ring-c-semidark dark:group-hover:ring-gray-700 
        group-hover:scale-110 transition-all duration-300
        max-md:left-0 max-md:-translate-x-1/2 md:top-0 md:-translate-y-1/2 md:left-0 z-10"></div>
      
      <div className="md:mt-8 md:ml-1 group-hover:translate-x-1 md:group-hover:translate-x-0 md:group-hover:-translate-y-1 transition-transform duration-300 w-full">
        <h2 className="sr-only">Timeline Item</h2>
        
        {/* Date */}
        <time className="mb-2 block text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
          {date}
        </time>
        
        {/* Role */}
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-c-dark dark:group-hover:text-gray-200">
          {position}
        </h3>
        
        {/* Company */}
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {company}
        </h4>
        
        {/* Location */}
        <p className="mt-1 text-sm font-medium text-gray-500">{location}</p>
      </div>
    </li>
  );
}
