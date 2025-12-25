import DisplayInfo from "@/components/about/display-info";
import LinkButton from "@/components/ui/link-button";
import journeyData from "@/constants/journey.json";

const { label, heading, description, cta } = journeyData;

export default function Journey({ isOverview }: { isOverview?: boolean }) {
  return (
    <div className="">
      <DisplayInfo description={description} heading={heading} label={label} />
      {isOverview && (
        <div className="mt-8 flex justify-center lg:justify-start">
          <LinkButton
            href="/journey"
            showIcon={false}
            text={cta}
            variant="minimal"
          />
        </div>
      )}
    </div>
  );
}
