import { ChildrenProps } from "@/util/types";

export default function RootWrapper({ children }: ChildrenProps) {
  return <div className="flex flex-col h-screen">{children}</div>;
}
