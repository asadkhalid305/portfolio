export async function getReplyFromChatbot(message: string) {
  const response = await fetch("/api/chatbot", {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
