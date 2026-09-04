import clsx from "clsx";
import type { ArrowDirection } from "@/utils/types";

const paths: Record<ArrowDirection, string> = {
  left: "M7 16l-4-4m0 0l4-4m-4 4h18",
  right: "M17 8l4 4m0 0l-4 4m4-4H3",
  "up-right": "M7 17 17 7M7 7h10v10",
  "down-right": "m7 7 10 10M17 7v10H7",
};

const motion: Record<ArrowDirection, string> = {
  left: "group-hover:-translate-x-1",
  right: "group-hover:translate-x-1",
  "up-right": "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  "down-right": "group-hover:translate-x-0.5 group-hover:translate-y-0.5",
};

const cardMotion: Record<ArrowDirection, string> = {
  left: "group-hover/card:-translate-x-1",
  right: "group-hover/card:translate-x-1",
  "up-right":
    "group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5",
  "down-right":
    "group-hover/card:translate-x-0.5 group-hover/card:translate-y-0.5",
};

export default function DirectionalArrow({
  className,
  direction = "right",
  hoverGroup = "action",
}: {
  className?: string;
  direction?: ArrowDirection;
  hoverGroup?: "action" | "card";
}) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-4 w-4 shrink-0 transition-transform duration-300 ease-out",
        hoverGroup === "card" ? cardMotion[direction] : motion[direction],
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={paths[direction]}
      />
    </svg>
  );
}
