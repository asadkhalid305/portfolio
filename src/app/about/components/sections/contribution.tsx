import { contribution } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import VCardGrid from "../general/v-card-grid";

const { heading, description, items } = contribution;

export default function Contribution() {
  return (
    <>
      <div className="pt-20 lg:pt-36">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingBottom
        />
      </div>

      {/* Events & Blogs */}
      {Object.entries(items).map(([key, value]) => {
        const reversedValue = [...value].reverse();
        return <VCardGrid key={key} heading={key} records={reversedValue} />;
      })}
    </>
  );
}
