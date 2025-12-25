import DisplayInfo from "@/components/about/display-info";
import Timeline from "@/components/about/timeline";
import experienceData from "@/constants/experience.json";

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
        <Timeline record={items} link="/experience" isOverview={isOverview} />
      </div>
    </div>
  );
}
