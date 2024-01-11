import { Fragment } from "react";
import DisplayInfo from "../general/display-info";
import VCardSystem from "../general/v-card-system";
import {
  contributions,
  contributionHeading as heading,
  contributionDescription as description,
} from "@/app/utils/constants";

export default function Contribution() {
  return (
    <Fragment>
      <div className="pt-20 lg:pt-36">
        <DisplayInfo
          whitespacePreWrap
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>

      {/* Events & Blogs */}
      {Object.entries(contributions).map(([key, value], index) => (
        <VCardSystem key={index} heading={key} records={value} />
      ))}
    </Fragment>
  );
}
