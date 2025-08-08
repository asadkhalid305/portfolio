import { journey } from "@/app/utils/constants";
import DisplayInfo from "@/app/about/components/general/display-info";

const { heading, description } = journey;

export default function Journey() {
  return (
    <div className="pt-20 lg:pt-36">
      <DisplayInfo description={description} heading={heading} />
    </div>
  );
}
