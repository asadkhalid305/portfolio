import DisplayInfo from "@/app/about/components/general/display-info";
import VCardGrid from "@/app/about/components/general/v-card-grid";
import contributionData from "@/content/contributions.json";

const { label, heading, description, items } = contributionData;

export default function Contribution({ isOverview }: { isOverview?: boolean }) {
  return (
    <>
      <div className="">
        <DisplayInfo
          description={description}
          heading={heading}
          label={label}
        />
      </div>

      {/* Events & Blogs */}
      {Object.entries(items).map(([key, value]) => {
        const reversedValue = [...value].reverse();
        return (
          <VCardGrid
            key={key}
            heading={key}
            records={reversedValue}
            isOverview={isOverview}
          />
        );
      })}
    </>
  );
}
