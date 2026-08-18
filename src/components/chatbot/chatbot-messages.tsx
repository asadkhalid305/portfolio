import { useEffect, useRef } from "react";
import { ChatbotMessagesProps } from "@/utils/types";
import ChatbotLoading from "@/components/chatbot/chatbot-loading";
import ChatbotMessage from "@/components/chatbot/chatbot-message";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function ChatbotMessages({
  messages,
  loading,
}: ChatbotMessagesProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [loading, messages]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative min-h-0 flex-1 space-y-4 overflow-y-auto bg-gray-50/50 p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent dark:bg-gray-900/50 dark:scrollbar-thumb-gray-600"
    >
      {messages.map((message, index) => (
        <ChatbotMessage key={index} index={index} message={message} />
      ))}
      {loading && <ChatbotLoading />}
      <ProgressiveBlur
        blurLevels={[0.25, 0.5, 1, 2, 3, 5, 8, 12]}
        height="12%"
        position="top"
      />
    </div>
  );
}
