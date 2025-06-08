import { CardSystemProps } from "@/app/utils/types";
import VCard from "@/app/about/components/general/v-card";

export default function VCardSystem({
  heading,
  records,
}: Readonly<CardSystemProps>) {
  return (
    <div className="pt-16">
      <h2 className="text-3xl font-extrabold capitalize text-center pb-6 lg:text-4xl lg:text-start">
        {heading}
      </h2>
      <div className="grid gap-6 justify-center lg:grid-cols-3">
        {records.map((item) => (
          <VCard
            key={item.id}
            id={item.id}
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
