export default function ChatbotLoading() {
  return (
    <div className="flex justify-start w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center gap-1.5 px-5 py-4 rounded-2xl rounded-bl-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 bg-c-dark dark:bg-c-light rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.6s",
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}
