import { CardSystemProps } from "@/app/utils/types";
import VCard from "./v-card";

export default function VCardSystem({ heading, records }: CardSystemProps) {
  return (
    <div className="pt-16">
      <h1
        className={
          "text-3xl font-extrabold capitalize text-center pb-6 lg:text-4xl lg:text-start"
        }
      >
        {heading}
      </h1>
      <div className="grid gap-6 justify-center lg:grid-cols-3">
        {records.map((item, index) => (
          <VCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
