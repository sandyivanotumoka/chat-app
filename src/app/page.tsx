"use client";

import { useState } from "react";
import MassageBubble from "@/components/MassageBubble";
import ChatInput from "@/components/ChatInput";
import { useEffect, useRef } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [],
  );

  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async (message: string) => {
    // 1. Tambah pesan user
    setMessages((prev) => [...prev, { text: message, isUser: true }]);

    // 2. Mulai typing
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      // 3. Delay biar natural
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: data.reply, isUser: false }]);

        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
    }
  };
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md lg:max-w-2xl bg-white rounded-2xl shadow flex flex-col h-[80vh]">
        {/* Header */}
        <div className="p-4 border-b font-semibold text-lg">Chat</div>

        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {messages.map((msg, index) => (
            <MassageBubble key={index} text={msg.text} isUser={msg.isUser} />
          ))}

          {isTyping && (
            <div className="text-xs text-gray-400 italic px-2">
              AI sedang mengetik...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </main>
  );
}
