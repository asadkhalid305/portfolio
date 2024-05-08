import { contribution } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import VCardSystem from "../general/v-card-system";

const { heading, description, items } = contribution;

export default function Contribution() {
  return (
    <>
      <div className="pt-20 lg:pt-36">
        <DisplayInfo
          whitespacePreWrap
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>

      {/* Events & Blogs */}
      {Object.entries(items).map(([key, value], index) => (
        <VCardSystem key={index} heading={key} records={value} />
      ))}
    </>
  );
}
