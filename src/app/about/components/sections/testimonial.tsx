import DisplayInfo from "@/app/about/components/general/display-info";
import TCard from "@/app/about/components/general/t-card";
import LinkButton from "@/app/about/components/general/link-button";
import testimonialData from "@/content/testimonials.json";

const { label, heading, items, cta } = testimonialData;

export default function Testimonial({ isOverview }: { isOverview?: boolean }) {
  const displayItems = isOverview ? items.slice(0, 3) : items;

  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <DisplayInfo heading={heading} label={label} paddingBottom />
      </div>
      <div className="flex-1">
        <div
          className={`grid grid-cols-1 mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 lg:grid-cols-3`}
        >
          {displayItems.map((item) => (
            <TCard
              key={item.author.name + "-" + item.text.length}
              text={item.text}
              author={item.author}
            />
          ))}
        </div>
        {isOverview && (
          <div className="flex justify-center lg:justify-start">
            <LinkButton
              href="/testimonials"
              showIcon={false}
              text={cta}
              variant="minimal"
            />
          </div>
        )}
      </div>
    </div>
  );
}
