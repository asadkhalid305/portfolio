import { FormEvent, useState, useEffect } from "react";
import { chatbot } from "@/app/utils/constants";
import { getReplyFromChatbot } from "@/app/utils/api";
import { ChatbotMessage } from "@/app/utils/types";

const { limit } = chatbot;

export default function useChatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);
  const [isMessageLimitReached, setIsMessageLimitReached] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load messages from local storage when the component mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    savedMessages &&
      JSON.parse(savedMessages).length &&
      setMessages(JSON.parse(savedMessages));
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    setIsMessageLimitReached(
      messages.map((message) => message.role === "user").length >= limit
    );

    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  /**
   * Handles the form submission event when sending a message.
   *
   * @param event - The form submission event.
   */
  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = userInput.trim();

    setUserInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: inputValue }]);

    setTimeout(async () => {
      const { message } = await getReplyFromChatbot(inputValue);

      setLoading(false);
      setMessages((prev) => [...prev, message]);
    }, 1000);
  };

  return {
    loading,
    messages,
    isMessageLimitReached,
    userInput,
    setUserInput,
    handleSend,
  };
}
