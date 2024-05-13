import Image from "next/image";
import IconMagic from "public/icons/magic.png";
import IconInfo from "public/icons/info.png";
import { ChatbotHeaderProps } from "@/app/utils/types";
import { chatbot } from "@/app/utils/constants";

const { info } = chatbot;

export default function ChatbotHeader({
  showChatbot,
  setShowChatbot,
}: ChatbotHeaderProps) {
  const openInfoModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the event from bubbling up the DOM tree.
    e.preventDefault(); // Prevents the browser's default action.
    alert(info);
  };

  return (
    <>
      <div
        onClick={() => setShowChatbot(!showChatbot)}
        role="button"
        tabIndex={0}
        onKeyPress={() => setShowChatbot(!showChatbot)}
      >
        <div className="flex justify-between bg-c-dark rounded-t-lg border-2 text-white p-4 h-[3.75rem]">
          <div className="flex flex-1 justify-center ml-6">
            <p className="mr-2">AI Assistant</p>
            <Image
              alt="ai icon"
              draggable="false"
              src={IconMagic}
              width="24"
              height="24"
            />
          </div>
          <button
            onClick={(e) => {
              openInfoModal(e);
            }}
          >
            <Image
              alt="info icon"
              draggable="false"
              src={IconInfo}
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
    </>
  );
}
