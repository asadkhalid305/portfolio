import Text3DFlip from "@/components/ui/text-3d-flip";

export default function BrandMark() {
  return (
    <span className="flex items-center gap-3" aria-hidden="true">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[0.9rem] bg-c-dark text-c-light shadow-sm">
        <span className="text-sm font-bold tracking-[-0.08em]">AK</span>
      </span>
      <span className="hidden leading-none sm:block">
        <Text3DFlip
          as="span"
          className="block text-[0.68rem] font-semibold tracking-[0.22em]"
          flipTextClassName="text-blue-600"
          textClassName="text-c-dark"
        >
          ASAD ULLAH
        </Text3DFlip>
        <Text3DFlip
          as="span"
          className="mt-1 block text-[0.68rem] font-semibold tracking-[0.34em]"
          flipTextClassName="text-blue-500"
          textClassName="text-gray-500"
        >
          KHALID
        </Text3DFlip>
      </span>
    </span>
  );
}
