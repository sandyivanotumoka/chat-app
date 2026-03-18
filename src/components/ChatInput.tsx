"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ketik pesan..."
        className="flex-1 border rounded-xl px-4 py-2 outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 rounded-xl"
      >
        Kirim
      </button>
    </div>
  );
}
