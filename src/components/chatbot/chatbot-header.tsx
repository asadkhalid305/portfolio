import { ChatbotHeaderProps } from "@/utils/types";
import { useState } from "react";
import { Bot, Info } from "lucide-react";
import commonData from "@/constants/common.json";
import ChatbotInfoModal from "./chatbot-info-modal";

const { chatbot } = commonData;

export default function ChatbotHeader({
  toggleChatbot,
  setToggleChatbot,
}: Readonly<ChatbotHeaderProps>) {
  const [showInfo, setShowInfo] = useState(false);

  const openInfoModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShowInfo(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setToggleChatbot(!toggleChatbot);
    }
  };

  return (
    <>
      <div
        onClick={() => setToggleChatbot(!toggleChatbot)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={toggleChatbot ? "Minimize chatbot" : "Maximize chatbot"}
        className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300"
      >
        <div className="flex justify-between items-center bg-c-dark rounded-t-2xl text-c-light px-5 py-4 h-[72px] shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-base">{chatbot.title}</p>
              <p className="text-xs text-gray-300">{chatbot.status}</p>
            </div>
          </div>
          <button
            onClick={openInfoModal}
            aria-label="Show chatbot information"
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ChatbotInfoModal
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        content={
          chatbot.info || "AI Assistant trained on Asad's portfolio data."
        }
      />
    </>
  );
}
