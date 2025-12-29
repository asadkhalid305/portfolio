import { FormEvent, useState, useEffect } from "react";
import chatbotData from "@/constants/chatbot";
import { getReplyFromChatbot } from "@/utils/api";
import { ChatbotMessage } from "@/utils/types";

export default function useChatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);
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
    // Save to localStorage only in browser environment
    if (typeof window !== "undefined") {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
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
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      // Send full conversation history for better context (server adds system prompt + dataset)
      const { message } = await getReplyFromChatbot(updatedMessages);
      setMessages((prev) => [...prev, message]);
    } catch (error) {
      console.warn("Failed to get chatbot reply:", error);

      // Display the error message from the API or a generic fallback
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact me directly!";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    messages,
    userInput,
    setUserInput,
    handleSend,
  };
}
