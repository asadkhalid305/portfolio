import Image from "next/image";
import { ChatbotHeaderProps } from "@/app/utils/types";
import { chatbot } from "@/app/utils/constants";

const {
  info,
  header: { heading },
} = chatbot;

export default function ChatbotHeader({
  toggleChatbot,
  setToggleChatbot,
}: ChatbotHeaderProps) {
  const openInfoModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the event from bubbling up the DOM tree.
    e.preventDefault(); // Prevents the browser's default action.
    alert(info);
  };

  return (
    <div
      onClick={() => setToggleChatbot(!toggleChatbot)}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between bg-c-dark rounded-t-lg border-2 text-c-light p-4 h-[3.75rem]">
        <div className="flex flex-1 justify-center ml-6">
          <p className="mr-2">{heading}</p>
          <Image
            alt="ai icon"
            draggable="false"
            src="/icons/ai.png"
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
            src="/icons/info.png"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
}
