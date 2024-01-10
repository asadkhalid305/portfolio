import { ButtonProps } from "@/app/utils/types";

export default function Button({ children }: ButtonProps) {
  return (
    <button className="w-full inline-block rounded-lg bg-c-dark text-c-light px-5 py-3 font-medium shadow-lg">
      {children}
    </button>
  );
}
