import { FormEvent, useState, useEffect } from "react";
import { chatbot } from "@/lib/constants";
import { getReplyFromChatbot } from "@/lib/utils/api";
import { ChatbotMessage } from "@/lib/utils/types";

const { limit } = chatbot;

export default function useChatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);
  const [isMessageLimitReached, setIsMessageLimitReached] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load messages from local storage when the component mounts
  useEffect(() => {
    // Fix SSR crash: Check if window is defined before accessing localStorage
    if (typeof window === "undefined") return;

    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (error) {
        console.error("Failed to parse saved messages:", error);
      }
    }
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    // Fix: Correctly count user messages
    const userMessageCount = messages.filter((m) => m.role === "user").length;
    setIsMessageLimitReached(userMessageCount >= limit);

    // Save to localStorage only in browser environment
    if (typeof window !== "undefined") {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
    // limit is a constant from constants, not a reactive value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  /**
   * Handles the form submission event when sending a message.
   *
   * @param event - The form submission event.
   */
  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = userInput.trim();
    if (!inputValue) return;

    // Add user message immediately
    const userMessage = { role: "user" as const, content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const { message } = await getReplyFromChatbot(inputValue);
      setMessages((prev) => [...prev, message]);
    } catch (error) {
      console.error("Failed to get chatbot reply:", error);
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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
