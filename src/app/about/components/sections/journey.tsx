import DisplayInfo from "@/app/about/components/general/display-info";
import journeyData from "@/content/journey.json";

const { heading, description } = journeyData;

export default function Journey() {
  return (
    <div className="py-20 lg:py-32">
      <DisplayInfo description={description} heading={heading} />
    </div>
  );
}
