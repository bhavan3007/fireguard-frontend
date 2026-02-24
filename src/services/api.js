export const sendChat = async (question, userId, sessionId) => {
  const res = await fetch("https://fireguard-backend.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question,
      user_id: userId,
      session_id: sessionId,
    }),
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};
