import { TimelineItemProps } from "@/utils/types";

export default function TimelineItem({
  company,
  date,
  location,
  position,
}: Readonly<TimelineItemProps>) {
  return (
    <li className="relative group max-md:mb-10 max-md:pl-10 md:flex-1 md:pr-6">
      {/* Visual Dot/Indicator */}
      <div className="absolute w-4 h-4 bg-white dark:bg-gray-900 rounded-full 
        border-2 border-slate-900 dark:border-white
        ring-4 ring-slate-50 dark:ring-gray-800/50
        group-hover:bg-slate-900 dark:group-hover:bg-white
        group-hover:scale-125 transition-all duration-500
        max-md:left-0 max-md:-translate-x-1/2 md:top-0 md:-translate-y-1/2 md:left-0 z-10"></div>
      
      <div className="md:mt-10 md:ml-1 group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-2 transition-transform duration-500 w-full">
        <h2 className="sr-only">Timeline Item</h2>
        
        {/* Date */}
        <div className="mb-3 flex items-center gap-2">
          <time className="inline-block text-[11px] font-bold tracking-[0.2em] text-slate-400 dark:text-gray-500 uppercase px-2 py-0.5 rounded bg-slate-50 dark:bg-gray-800/50 border border-slate-100 dark:border-gray-700">
            {date}
          </time>
        </div>
        
        {/* Role */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-black dark:group-hover:text-slate-200 transition-colors">
          {position}
        </h3>
        
        {/* Company */}
        <h4 className="text-base font-semibold text-slate-600 dark:text-gray-300">
          {company}
        </h4>
        
        {/* Location */}
        <p className="mt-2 text-xs font-medium text-slate-400 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
          {location}
        </p>
      </div>
    </li>
  );
}
