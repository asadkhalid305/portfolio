import {
  experienceHeading as heading,
  experienceDescription as description,
  experiences,
  linkedInExperienceLink,
} from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";

export default function Experience() {
  return (
    <div className="flex flex-col pt-20 lg:pt-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          whitespacePreWrap
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>
      <div className="flex-1 w-full">
        <Timeline record={experiences} link={linkedInExperienceLink} />
      </div>
    </div>
  );
}
