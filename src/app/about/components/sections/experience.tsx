import DisplayInfo from "@/app/about/components/general/display-info";
import Timeline from "@/app/about/components/general/timeline";
import experienceData from "@/content/experience.json";

const { label, heading, description, items, linkedInLink } = experienceData;

export default function Experience({ isOverview }: { isOverview?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className="w-full lg:max-w-4xl">
        <DisplayInfo
          description={description}
          heading={heading}
          label={label}
          paddingBottom={false}
        />
      </div>
      <div className="w-full mt-10 lg:mt-16">
        <Timeline
          record={items}
          link="/experience"
          isOverview={isOverview}
        />
      </div>
    </div>
  );
}
