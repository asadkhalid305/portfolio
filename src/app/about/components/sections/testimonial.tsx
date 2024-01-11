import React from "react";
import DisplayInfo from "../general/display-info";
import {
  testimonialHeading as heading,
  testimonial,
} from "@/app/utils/constants";
import TCard from "../general/t-card";

export default function Testimonial() {
  const gridColsCount = Math.ceil(testimonial.length / 2);

  return (
    <div className="flex flex-col pt-20 lg:pt-36">
      <div className="flex-1">
        <DisplayInfo heading={heading} paddingRight paddingTop paddingBottom />
      </div>
      <div className="flex-1">
        <div
          style={{
            gridTemplateColumns: `repeat(${gridColsCount}, minmax(0, 1fr))`,
          }}
          className={`grid grid-cols-1 mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12`}
        >
          {testimonial.map((item, index) => (
            <TCard key={index} text={item.text} author={item.author} />
          ))}
        </div>
      </div>
    </div>
  );
}
