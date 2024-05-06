export async function getReplyFromChatbot(message: string) {
  const res = await fetch("/api/chatbot", {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
