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
      <div className={clsx("flex bg-c-dark border-2 text-white p-4 h-14")}>
        <div className="flex flex-1 justify-center">
          <p className="mr-2">AI Assistant</p>
          <Image
            alt="ai icon"
            draggable="false"
            src={IconMagic}
            width="24"
            height="24"
          />
        </div>
      </div>
    </button>
  );
}
