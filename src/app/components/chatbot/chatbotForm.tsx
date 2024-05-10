import React from "react";
import { ChatbotFormProps } from "@/app/utils/types";

export default function ChatbotForm({
  userInput,
  setUserInput,
  isMessageLimitReached,
  handleSend,
}: ChatbotFormProps) {
  return (
    <form className="flex p-4" autoComplete="off" onSubmit={handleSend}>
      <input
        type="text"
        name="message-input"
        placeholder="Write a question..."
        value={userInput}
        onInput={(e) => setUserInput(e.currentTarget.value)}
        className="flex-grow mr-2 py-2 px-4 rounded border-2 focus:outline-none focus:border-c-dark"
      />
      <button
        disabled={!userInput || isMessageLimitReached}
        type="submit"
        className="py-2 px-4 bg-c-dark text-white rounded transition-opacity duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Ask
      </button>
    </form>
  );
}
