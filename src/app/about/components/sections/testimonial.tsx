import DisplayInfo from "@/app/about/components/general/display-info";
import TCard from "@/app/about/components/general/t-card";
import testimonialData from "@/content/testimonials.json";

const { heading, items } = testimonialData;

export default function Testimonial() {
  return (
    <div className="flex flex-col pt-20 lg:pt-36">
      <div className="flex-1">
        <DisplayInfo heading={heading} paddingBottom />
      </div>
      <div className="flex-1">
        <div
          className={`grid grid-cols-1 mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 lg:grid-cols-3`}
        >
          {items.map((item) => (
            <TCard
              key={item.author.name + "-" + item.text.length}
              text={item.text}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
