"use client";

import { useState } from "react";
import DisplayInfo from "@/components/about/display-info";
import ExperienceCard from "@/components/about/experience-card";
import FilterBar from "@/components/ui/filter-bar";
import LinkButton from "@/components/ui/link-button";
import experienceData from "@/constants/experience.json";
import { ExperienceCardProps } from "@/utils/types";

const {
  label,
  heading,
  description,
  overviewDescription,
  cta,
  professionalExperiences,
  communityExperiences,
} = experienceData;

type FilterType = "All" | "Professional" | "Community";

export default function Experience({ isOverview }: { isOverview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Overview mode - lead with the three most recent professional chapters.
  if (isOverview) {
    const recentRoles = (
      professionalExperiences as ExperienceCardProps[]
    ).slice(0, 3);

    return (
      <div className="flex flex-col">
        <div className="w-full lg:max-w-6xl">
          <DisplayInfo
            description={overviewDescription}
            heading={heading}
            label={label}
            paddingBottom={false}
          />
        </div>
        <div className="mt-10 grid gap-5 lg:mt-14 xl:grid-cols-3">
          {recentRoles.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              compact
              featured={index === 0}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center lg:justify-start">
          <LinkButton
            className="hover:text-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            href="/experience"
            showIcon={false}
            text={cta}
            variant="minimal"
          />
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

      {showProfessional && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-xl font-bold tracking-[-0.02em] text-c-dark dark:text-white sm:text-2xl">
            Professional Experience
          </h3>
          <div className="space-y-5">
            {(professionalExperiences as ExperienceCardProps[]).map((exp, index) => (
              <ExperienceCard key={exp.id} {...exp} featured={index === 0} />
            ))}
          </div>
        </div>
      )}

      {showCommunity && communityExperiences.length > 0 && (
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-6 text-xl font-bold tracking-[-0.02em] text-c-dark dark:text-white sm:text-2xl">
            Community Impact
          </h3>
          <div className="space-y-5">
            {(communityExperiences as ExperienceCardProps[]).map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
