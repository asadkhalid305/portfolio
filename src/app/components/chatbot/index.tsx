"use client";

import ChatbotHeader from "@/app/components/chatbot/chatbot-header";
import ChatbotForm from "@/app/components/chatbot/chatbot-form";
import ChatbotMessages from "@/app/components/chatbot/chatbot-messages";
import useChatbot from "@/app/hooks/useChatbot";
import { useState } from "react";
import clsx from "clsx";

export default function Chatbot() {
  const {
    loading,
    messages,
    isMessageLimitReached,
    userInput,
    setUserInput,
    handleSend,
  } = useChatbot();
  const [toggleChatbot, setToggleChatbot] = useState(true);

  return (
    <aside
      className={clsx(
        "flex-col w-96 fixed bottom-0 right-0 m-4 mb-6 bg-gray-100 rounded-t-lg shadow-xl overflow-hidden transition-all duration-700 ease-in-out hidden xl:flex",
        {
          "h-2/5": toggleChatbot,
          "h-[3.75rem]": !toggleChatbot,
        }
      )}
      aria-label="AI Chatbot assistant"
    >
      <ChatbotHeader
        toggleChatbot={toggleChatbot}
        setToggleChatbot={setToggleChatbot}
      />
      <ChatbotMessages loading={loading} messages={messages} />
      <ChatbotForm
        isMessageLimitReached={isMessageLimitReached}
        userInput={userInput}
        setUserInput={setUserInput}
        handleSend={handleSend}
      />
    </aside>
  );
}
