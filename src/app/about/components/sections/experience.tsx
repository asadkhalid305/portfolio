import {
  experienceHeading as heading,
  experienceDescription as description,
  experiences,
  linkedInExperienceLink,
} from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import Timeline from "../general/timeline";
const description = `I have always been fascinated by web technologies and how they can transform the way we communicate, learn, and work. My journey as a web developer began in 2016, when I started building pet projects with HTML and CSS as an undergraduate student. This sparked my interest and passion for web development, and helped me land my first internship.

export default function Experience() {
  return (
    <div className="flex flex-col pt-20 lg:pt-36">
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
