import { CardSystemProps } from "@/lib/utils/types";
import VCard from "@/app/about/components/general/v-card";
import LinkButton from "@/app/about/components/general/link-button";

export default function VCardSystem({
  heading,
  records,
  isOverview,
}: Readonly<CardSystemProps>) {
  const displayRecords = isOverview ? records.slice(0, 3) : records;

  return (
    <div className="pt-16">
      <h2 className="text-3xl font-extrabold capitalize text-center pb-6 lg:text-4xl lg:text-start">
        {heading}
      </h2>
      <div className="grid gap-6 justify-center lg:grid-cols-3">
        {displayRecords.map((item) => (
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
      {isOverview && (
        <div className="mt-8 flex justify-center lg:justify-start">
          <LinkButton
            href="/contribution"
            showIcon={false}
            text={`See all ${heading}`}
            variant="minimal"
          />
        </div>
      )}
    </div>
  );
}
