import {
  journeyHeading as heading,
  journeyDescription as description,
} from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";

export default function Journey() {
  return (
    <div className="pt-20 lg:pt-36 lg:items-center">
      <DisplayInfo
        whitespacePreWrap
        description={description}
        heading={heading}
      />
    </div>
  );
}
