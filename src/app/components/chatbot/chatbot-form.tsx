import { ChatbotFormProps } from "@/app/utils/types";

export default function ChatbotForm({
  userInput,
  setUserInput,
  isMessageLimitReached,
  handleSend,
}: Readonly<ChatbotFormProps>) {
  return (
    <form className="flex p-4" autoComplete="off" onSubmit={handleSend}>
      <label htmlFor="chatbot-message-input" className="sr-only">
        Type your question
      </label>
      <input
        id="chatbot-message-input"
        type="text"
        name="message-input"
        placeholder="Write a question..."
        value={userInput}
        onInput={(e) => setUserInput(e.currentTarget.value)}
        className="flex-grow mr-2 py-2 px-4 rounded border-2 transition-all duration-300 ease-in-out hover:shadow-inner focus:outline-none focus:border-c-dark focus:shadow-inner"
        aria-label="Type your question"
        aria-disabled={isMessageLimitReached}
      />
      <button
        disabled={!userInput || isMessageLimitReached}
        type="submit"
        aria-label="Send question"
        className="py-2 px-4 bg-c-dark text-c-light rounded transition-opacity duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Ask
      </button>
      {isMessageLimitReached && (
        <span className="sr-only" aria-live="polite">
          Message limit reached
        </span>
      )}
    </form>
  );
}
