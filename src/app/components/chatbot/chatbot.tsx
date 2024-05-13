"use client";

import ChatbotHeader from "./chatbotHeader";
import ChatbotForm from "./chatbotForm";
import ChatbotMessages from "./chatbotMessages";
import useChatbot from "../../hooks/useChatbot";
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
  const [showChatbot, setShowChatbot] = useState(true);

  return (
    <div
      className={clsx(
        "flex-col w-96 fixed bottom-0 right-0 m-4 mb-6 bg-gray-100 rounded-t-lg shadow-inner overflow-hidden transition-all duration-700 ease-in-out hidden xl:flex",
        {
          "h-2/5": showChatbot,
          "h-[3.75rem]": !showChatbot,
        }
      )}
    >
      <ChatbotHeader
        showChatbot={showChatbot}
        setShowChatbot={setShowChatbot}
      />
      <ChatbotMessages loading={loading} messages={messages} />
      <ChatbotForm
        isMessageLimitReached={isMessageLimitReached}
        userInput={userInput}
        setUserInput={setUserInput}
        handleSend={handleSend}
      />
    </div>
  );
}
