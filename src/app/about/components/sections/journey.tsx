import DisplayInfo from "@/app/about/components/general/display-info";
import LinkButton from "@/app/about/components/general/link-button";
import journeyData from "@/content/journey.json";

const { label, heading, description, cta } = journeyData;

export default function Journey({ isOverview }: { isOverview?: boolean }) {
  return (
    <div className="">
      <DisplayInfo
        description={description}
        heading={heading}
        label={label}
      />
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
