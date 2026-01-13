"use client";

import { useState } from "react";
import DisplayInfo from "@/components/about/display-info";
import Timeline from "@/components/about/timeline";
import ExperienceCard from "@/components/about/experience-card";
import FilterBar from "@/components/ui/filter-bar";
import LinkButton from "@/components/ui/link-button";
import experienceData from "@/constants/experience.json";
import { ExperienceCardProps } from "@/utils/types";

const {
  label,
  heading,
  description,
  items,
  professionalExperiences,
  communityExperiences,
} = experienceData;

type FilterType = "All" | "Professional" | "Community";

export default function Experience({ isOverview }: { isOverview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Overview mode - render compact timeline for homepage
  if (isOverview) {
    return (
      <div className="flex flex-col">
        <div className="w-full lg:max-w-6xl">
          <DisplayInfo
            description={description}
            heading={heading}
            label={label}
            paddingBottom={false}
          />
        </div>
        <div className="w-full mt-10 lg:mt-16">
          <Timeline record={items} link="/experience" isOverview={isOverview} />
        </div>
      </div>
    );
  }

  // Full page mode - render detailed cards with sections
  const filterOptions: { value: FilterType; label: string }[] = [
    { value: "All", label: "All" },
    { value: "Professional", label: "Professional Experience" },
    { value: "Community", label: "Community Impact" },
  ];

  const showProfessional =
    activeFilter === "All" || activeFilter === "Professional";
  const showCommunity = activeFilter === "All" || activeFilter === "Community";

  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          label={label}
          paddingBottom={false}
        />

        <FilterBar
          options={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-10 mt-6"
        />
      </div>

      {/* Professional Experience Section */}
      {showProfessional && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-c-dark dark:text-white">
            Professional Experience
          </h3>
          <div className="columns-1 gap-6 space-y-6 lg:columns-2">
            {(professionalExperiences as ExperienceCardProps[]).map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Community Impact Section */}
      {showCommunity && communityExperiences.length > 0 && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight text-c-dark dark:text-white">
            Community Impact
          </h3>
          <div className="columns-1 gap-6 space-y-6 lg:columns-2">
            {(communityExperiences as ExperienceCardProps[]).map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
