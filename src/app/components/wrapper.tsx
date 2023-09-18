import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootWrapper({ children }: Props) {
  return <div className="flex flex-col h-screen">{children}</div>;
}
