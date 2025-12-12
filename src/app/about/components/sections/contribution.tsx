import DisplayInfo from "@/app/about/components/general/display-info";
import VCardGrid from "@/app/about/components/general/v-card-grid";
import contributionData from "@/content/contributions.json";

const { heading, description, items } = contributionData;

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
