import { ChatbotFormProps } from "@/lib/utils/types";

export default function ChatbotForm({
  userInput,
  setUserInput,
  handleSend,
}: Readonly<ChatbotFormProps>) {
  return (
    <form
      className="flex items-center gap-3 p-5 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
      autoComplete="off"
      onSubmit={handleSend}
    >
      <label htmlFor="chatbot-message-input" className="sr-only">
        Type your question
      </label>
      <input
        id="chatbot-message-input"
        type="text"
        name="message-input"
        placeholder="Ask me anything..."
        value={userInput}
        onInput={(e) => setUserInput(e.currentTarget.value)}
        className="flex-grow py-3 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-c-dark dark:focus:ring-c-light focus:border-transparent"
        aria-label="Type your question"
      />
      <button
        disabled={!userInput}
        type="submit"
        aria-label="Send question"
        className="py-3 px-6 bg-c-dark text-c-light font-medium rounded-xl border-2 border-c-dark dark:border-gray-600 transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-500 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-c-dark dark:focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Send
      </button>
    </form>
  );
}
