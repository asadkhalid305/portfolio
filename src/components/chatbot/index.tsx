"use client";

import ChatbotHeader from "@/components/chatbot/chatbot-header";
import ChatbotForm from "@/components/chatbot/chatbot-form";
import ChatbotMessages from "@/components/chatbot/chatbot-messages";
import useChatbot from "@/hooks/useChatbot";
import { useState } from "react";
import clsx from "clsx";

export default function Chatbot() {
  const { loading, messages, userInput, setUserInput, handleSend } =
    useChatbot();
  const [toggleChatbot, setToggleChatbot] = useState(true);

  return (
    <aside
      className={clsx(
        "flex-col w-[420px] fixed bottom-0 right-0 m-6 backdrop-blur-xl bg-white dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out hidden xl:flex border border-gray-200 dark:border-gray-800",
        {
          "h-[600px]": toggleChatbot,
          "h-[72px]": !toggleChatbot,
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
        userInput={userInput}
        setUserInput={setUserInput}
        handleSend={handleSend}
      />
    </aside>
  );
}
