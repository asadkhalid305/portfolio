import DisplayInfo from "@/components/about/display-info";
import LinkButton from "@/components/ui/link-button";
import journeyData from "@/constants/journey.json";

const { label, heading, description, fullStory, cta } = journeyData;

export default function Journey({ isOverview = false }: { isOverview?: boolean }) {
  const content = isOverview ? description : fullStory;

  return (
    <div className="">
      <DisplayInfo description={content} heading={heading} label={label} />
      {isOverview && (
        <div className="mt-8 flex justify-center lg:justify-start">
          <LinkButton
            href="/journey"
            showIcon
            text={cta}
            variant="minimal"
          />
        </div>
      )}
    </div>
  );
}
