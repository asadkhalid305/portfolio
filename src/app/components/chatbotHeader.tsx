import Image from "next/image";
import { ChatbotHeaderProps } from "../utils/types";

import IconMagic from "public/icons/magic.png";
import clsx from "clsx";

export default function ChatbotHeader({
  showChatbot,
  setShowChatbot,
}: ChatbotHeaderProps) {
  return (
    <button onClick={() => setShowChatbot(!showChatbot)}>
      <div className="flex justify-center bg-c-dark border-2 text-white p-4 h-[3.75rem]">
        <p className="mr-2">AI Assistant</p>
        <Image
          alt="ai icon"
          draggable="false"
          src={IconMagic}
          width="24"
          height="24"
        />
      </div>
    </button>
  );
}
