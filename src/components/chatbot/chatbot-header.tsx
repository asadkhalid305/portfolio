import { ChatbotHeaderProps } from "@/utils/types";
import { useState } from "react";
import { Bot, ChevronDown, Info } from "lucide-react";
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

  return (
    <>
      <div
        className="flex h-[72px] shrink-0 items-center justify-between bg-c-dark px-3 text-c-light shadow-lg"
      >
        <button
          type="button"
          onClick={() => setToggleChatbot(!toggleChatbot)}
          aria-label={toggleChatbot ? "Minimize chatbot" : "Maximize chatbot"}
          aria-expanded={toggleChatbot}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
            <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-base">{chatbot.title}</p>
              <p className="text-xs text-gray-300">{chatbot.status}</p>
            </div>
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                toggleChatbot ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
        </button>
          <button
            type="button"
            onClick={openInfoModal}
            aria-label="Show chatbot information"
            className="ml-1 rounded-lg p-2 transition-all duration-200 hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Info className="w-5 h-5" />
          </button>
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
