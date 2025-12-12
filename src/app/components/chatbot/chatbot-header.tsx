import Image from "next/image";
import { ChatbotHeaderProps } from "@/lib/utils/types";
import { useState } from "react";
import { Bot, Info, Minimize2, Maximize2 } from "lucide-react";
import { chatbot } from "@/lib/constants";

const {
  info,
  header: { heading },
} = chatbot;

export default function ChatbotHeader({
  toggleChatbot,
  setToggleChatbot,
}: Readonly<ChatbotHeaderProps>) {
  const [showInfo, setShowInfo] = useState(false);

  const openInfoModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    // TODO: Replace with proper modal/dialog component
    alert(info);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setToggleChatbot(!toggleChatbot);
    }
  };

  return (
    <div
      onClick={() => setToggleChatbot(!toggleChatbot)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={toggleChatbot ? "Minimize chatbot" : "Maximize chatbot"}
    >
      <div className="flex justify-between bg-c-dark rounded-t-lg border-2 text-c-light p-4 h-[3.75rem]">
        <div className="flex flex-1 justify-center items-center gap-2">
          <Bot className="w-6 h-6" />
          <p>{heading}</p>
        </div>
        <button
          onClick={openInfoModal}
          aria-label="Show chatbot information"
          className="hover:opacity-80 transition-opacity"
        >
          <Info className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
