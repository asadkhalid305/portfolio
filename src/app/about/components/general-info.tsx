type Props = {
  description: string;
  heading: string;
};

export default function GeneralInfo({ description = "", heading = "" }: Props) {
  return (
    <div className="max-lg:pb-20 lg:pr-20">
      <div className="text-4xl font-extrabold mb-6">{heading}</div>
      <div className="text-xl">{description}</div>
    </div>
  );
}
