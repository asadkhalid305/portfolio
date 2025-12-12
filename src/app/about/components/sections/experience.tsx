import DisplayInfo from "@/app/about/components/general/display-info";
import Timeline from "@/app/about/components/general/timeline";
import experienceData from "@/content/experience.json";

const { heading, description, items, linkedInLink } = experienceData;

export default function Experience() {
  return (
    <div className="flex flex-col py-20 lg:py-32">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>
      <div className="flex-1 w-full">
        <Timeline record={items} link={linkedInLink} />
      </div>
    </div>
  );
}
