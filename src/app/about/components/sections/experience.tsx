import { experience } from "@/app/utils/constants";
import DisplayInfo from "@/app/about/components/general/display-info";
import Timeline from "@/app/about/components/general/timeline";

const { heading, description, items, linkedInLink } = experience;

export default function Experience() {
  return (
    <div className="flex flex-col pt-20 lg:pt-36">
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
