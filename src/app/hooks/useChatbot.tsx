import { FormEvent, useState, useEffect } from "react";
import { getReplyFromChatbot } from "../utils/api";
import { ChatbotMessage } from "../utils/types";

export default function useChatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);

  // Load messages from local storage when the component mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    savedMessages &&
      JSON.parse(savedMessages).length &&
      setMessages(JSON.parse(savedMessages));
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
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
    setMessages((prev) => [...prev, { role: "user", content: inputValue }]);

    const { response } = await getReplyFromChatbot(inputValue);

    setMessages((prev) => [...prev, response.message]);
  };

  return { messages, userInput, setUserInput, handleSend };
}
