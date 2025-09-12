"use client";

import { Send, X, Bot } from "lucide-react";
import { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user" as const, text: input };
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
      const botMessage = { role: "bot" as const, text: data?.response || "Something went wrong." };
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
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg 
                   bg-brand-gradient dark:bg-mint-neon-gradient-dark 
                   text-white flex items-center justify-center 
                   hover:scale-110 transition-all duration-300"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 w-80 h-96 
                     bg-white dark:bg-black shadow-2xl rounded-lg 
                     border border-header-border flex flex-col 
                     overflow-hidden animate-fade-in"
        >
          {/* Header */}
          <div className="bg-brand-gradient dark:bg-mint-neon-gradient-dark text-white px-4 py-4 rounded-t-lg flex items-center justify-between shadow-md">
            <span className="font-semibold text-sm tracking-wide">AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="ml-2 text-lg text-black/70 hover:text-black bg-white rounded-full w-5 h-5 flex justify-center items-center"
              aria-label="Close chat"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm bg-background dark:bg-black/80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Bot icon on left */}
                {msg.role === "bot" && (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                    
                    <FaRobot size={18}/>
                  </div>
                )}

                {/* Message bubble */}
                <div
                  className={`p-3 rounded-2xl max-w-[70%] whitespace-pre-line break-words shadow-sm
                    ${
                      msg.role === "user"
                        ? "bg-brand-gradient text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-foreground dark:text-white"
                    }`}
                >
                  {msg.text}
                </div>

                {/* User icon on right */}
                {msg.role === "user" && (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-gradient text-white">
                    
                    <FaUser size={16} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-accent-mint/70 animate-pulse">
                <Bot size={14} /> Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-header-border/20 px-3 py-4 bg-background dark:bg-black/70">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Write your message here..."
              className="flex-1 px-3 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-black/50 outline-none text-foreground dark:text-white 
                         placeholder:text-gray-400"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="p-2 rounded-full bg-brand-gradient dark:bg-mint-neon-gradient-dark 
                         text-white hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
              disabled={loading || !input.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
