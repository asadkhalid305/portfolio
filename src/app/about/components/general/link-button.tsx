import { LinkButtonProps } from "@/app/utils/types";

export default function LinkButton({ href, text }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex rounded-lg bg-c-dark text-c-light px-5 py-3 font-medium shadow-lg items-center text-sm w-fit"
    >
      <p>{text}</p>
      <svg
        className="w-3 h-3 ml-2 2xl:m-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
}
