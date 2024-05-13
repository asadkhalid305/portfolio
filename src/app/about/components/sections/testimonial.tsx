import { testimonial } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import TCard from "../general/t-card";

const { heading, items } = testimonial;

export default function Testimonial() {
  const gridColsCount = Math.ceil(items.length / 2);

  return (
    <div className="flex flex-col pt-20 lg:pt-36">
      <div className="flex-1">
        <DisplayInfo whitespacePreWrap heading={heading} paddingBottom />
      </div>
      <div className="flex-1">
        <div
          style={{
            gridTemplateColumns: `repeat(${gridColsCount}, minmax(0, 1fr))`,
          }}
          className={`grid grid-cols-1 mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12`}
        >
          {items.map((item, index) => (
            <TCard key={index} text={item.text} author={item.author} />
          ))}
        </div>
      </div>
    </div>
  );
}
