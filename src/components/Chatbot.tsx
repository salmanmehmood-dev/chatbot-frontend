"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Use NEXT_PUBLIC_API_URL from .env, fallback to localhost
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: { role: "user" | "bot"; text: string } = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
    const botMessage: { role: "user" | "bot"; text: string } = { role: "bot", text: data?.response || "Something went wrong." };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
  setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Failed to connect to server." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg bg-brand text-accent-mint flex items-center justify-center hover:bg-brand/90 transition"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80 h-96 bg-background shadow-xl rounded-2xl border border-header-border flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-brand text-accent-mint px-4 py-2 font-semibold flex items-center justify-between">
            <span>AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="ml-2 text-lg text-accent-mint/70 hover:text-accent-mint"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm bg-background">
            {messages.map((msg: { role: "user" | "bot"; text: string }, i: number) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] whitespace-pre-line break-words ${
                  msg.role === "user"
                    ? "ml-auto bg-brand text-accent-mint"
                    : "mr-auto bg-accent-mint/10 text-foreground border border-accent-mint/30"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-xs text-accent-mint/70">Thinking...</div>}
          </div>

          {/* Input */}
          <div className="flex border-t border-header-border bg-background">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm bg-background outline-none text-foreground"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-brand text-accent-mint hover:bg-brand/90 transition disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
