// ChatMessage.tsx
import { ChatbotMessagesProps } from "../utils/types";
import ChatbotLoading from "./chatbotLoading";
import ChatbotMessage from "./chatbotMessage";

export default function ChatbotMessages({
  messages,
  loading,
}: ChatbotMessagesProps) {
  return (
    <div className="flex flex-col overflow-y-auto p-4 h-full">
      {messages.map((message, index) => (
        <ChatbotMessage key={index} message={message} />
      ))}
      {loading && <ChatbotLoading />}
    </div>
  );
}
