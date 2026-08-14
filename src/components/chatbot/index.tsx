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
  const [toggleChatbot, setToggleChatbot] = useState(false);

  return (
    <aside
      className={clsx(
        "fixed bottom-0 right-0 z-40 m-6 hidden w-[390px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out dark:border-gray-800 dark:bg-gray-950 xl:flex",
        {
          "h-[560px]": toggleChatbot,
          "h-[72px]": !toggleChatbot,
        }
      )}
      aria-label="AI Chatbot assistant"
    >
      <ChatbotHeader
        toggleChatbot={toggleChatbot}
        setToggleChatbot={setToggleChatbot}
      />
      {toggleChatbot ? (
        <>
          <ChatbotMessages loading={loading} messages={messages} />
          <ChatbotForm
            userInput={userInput}
            setUserInput={setUserInput}
            handleSend={handleSend}
          />
        </>
      ) : null}
    </aside>
  );
}
