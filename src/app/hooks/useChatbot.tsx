import { FormEvent, useState } from "react";
import { getReplyFromChatbot } from "../utils/api";
import { ChatbotMessage } from "../utils/types";

export default function useChatbot() {
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);
  const [userInput, setUserInput] = useState("");

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
