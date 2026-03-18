import { NextResponse } from "next/server";

function randomReply(replies: string[]) {
  return replies[Math.floor(Math.random() * replies.length)];
}

function getAIResponse(message: string) {
  const text = message.toLowerCase();

  // sapaan
  if (text.includes("halo") || text.includes("hai")) {
    return randomReply([
      "Halo juga! 😊",
      "Hai! 👋",
      "Halo! Ada yang bisa aku bantu?",
      "Hi juga 😄",
    ]);
  }

  // tanya kabar
  if (text.includes("apa kabar")) {
    return randomReply([
      "Aku baik! Kamu gimana? 😄",
      "Baik dong! Lagi santai nih 🤖",
      "Alhamdulillah baik 😊 kamu?",
    ]);
  }

  // tanya nama
  if (text.includes("nama")) {
    return randomReply([
      "Aku AI buatan kamu 🤖",
      "Belum punya nama, kasih nama dong 😄",
      "Aku chatbot sederhana kamu 😎",
    ]);
  }

  // tanya waktu
  if (text.includes("jam")) {
    return `Sekarang jam ${new Date().toLocaleTimeString()}`;
  }

  // fallback
  return randomReply([
    "Menarik! Ceritakan lebih lanjut 😄",
    "Aku belum terlalu paham 😅 coba jelaskan lagi",
    "Wah seru! lanjut dong 👀",
  ]);
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const reply = getAIResponse(message);

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Terjadi error 😢" }, { status: 500 });
  }
}
