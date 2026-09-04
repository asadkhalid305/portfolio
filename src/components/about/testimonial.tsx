"use client";

import { useState } from "react";
import DisplayInfo from "@/components/about/display-info";
import TCard from "@/components/about/t-card";
import LinkButton from "@/components/ui/link-button";
import FilterBar from "@/components/ui/filter-bar";
import testimonialData from "@/constants/testimonials.json";

const { label, heading, items, cta } = testimonialData;

type FilterType = "All" | "Professional" | "Mentorship";

export default function Testimonial({ isOverview }: { isOverview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const mentorshipItems = items.filter((item) => item.source === "Topmate.io");
  const professionalItems = items.filter((item) => item.source === "LinkedIn" || !item.source);

  // Overview: Show 2 Professional + 1 Mentorship items
  const overviewItems = isOverview
    ? [...professionalItems.slice(0, 2), ...mentorshipItems.slice(0, 1)]
    : [];

  const filterOptions = [
    { value: "All" as const, label: "All" },
    { value: "Professional" as const, label: "Professional Endorsements" },
    { value: "Mentorship" as const, label: "Mentorship Feedback" },
  ];

  if (isOverview) {
    return (
      <div className="flex flex-col">
        <div className="flex-1">
          <DisplayInfo heading={heading} label={label} paddingBottom />
        </div>
        <div className="flex-1">
          <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.825fr_0.825fr]">
            {overviewItems.map((item, index) => (
              <TCard
                key={`${item.source}-${item.author.name}`}
                text={item.text}
                author={item.author}
                source={item.source as "LinkedIn" | "Topmate.io"}
                rating={item.rating}
                expanded={false}
                featured={index === 0}
              />
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <LinkButton
              href="/testimonials"
              showIcon
              text={cta}
              variant="minimal"
            />
          </div>
        </div>
      </div>
    );
  }

  // Full Page View
  const showProfessional = activeFilter === "All" || activeFilter === "Professional";
  const showMentorship = activeFilter === "All" || activeFilter === "Mentorship";

  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <DisplayInfo heading={heading} label={label} paddingBottom={false} />
        
        {/* Filter Controls */}
        <FilterBar
          options={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-10 mt-6"
        />
      </div>

      {/* Professional Section */}
      {showProfessional && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-c-dark dark:text-white">
            Professional Endorsements
          </h3>
          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {professionalItems.map((item, index) => (
               <div key={`prof-${index}`} className="break-inside-avoid">
                <TCard
                  text={item.text}
                  author={item.author}
                  source={item.source as "LinkedIn" | "Topmate.io"}
                  rating={item.rating}
                  expanded={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mentorship Section */}
      {showMentorship && mentorshipItems.length > 0 && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-c-dark dark:text-white">
            Mentorship Feedback
          </h3>
          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {mentorshipItems.map((item, index) => (
               <div key={`mentorship-${index}`} className="break-inside-avoid">
                <TCard
                  text={item.text}
                  author={item.author}
                  source={item.source as "LinkedIn" | "Topmate.io"}
                  rating={item.rating}
                  expanded={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
