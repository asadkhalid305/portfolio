export default function ChatbotLoading() {
  return (
    <div className="flex">
      <div className="flex items-center space-x-2 mt-2 p-2 rounded-md bg-gray-200">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 bg-c-dark rounded-full animate-pulse"
            ></div>
          ))}
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
