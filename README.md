# 💬 Chat App (Next.js + TypeScript)

A simple and lightweight chat application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
This project simulates a chat experience with an AI-like response system.


## 🌐 Live Demo

[🚀 View Live App](my-chat-nextjs-sepia.vercel.app)

---

## 🚀 Features

- 💬 Send and receive messages
- 🤖 AI-like auto reply (dummy logic)
- ⏳ Typing indicator ("AI sedang mengetik...")
- 📱 Responsive design (mobile & desktop)
- ⚡ Lightweight and fast

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hooks

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx
│   └── api/chat/route.ts
├── components/
│   ├── ChatInput.tsx
│   └── MessageBubble.tsx
```

---

## 🧠 How It Works

1. User sends a message
2. Message is stored in state
3. App calls API route (`/api/chat`)
4. API returns a simulated AI response
5. Message is displayed in chat UI

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sandyivanotumoka/chat-app.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🔐 Environment Variables (Optional)

If you want to use real AI (OpenAI), create a `.env.local` file:

```
OPENAI_API_KEY=your_api_key_here
```

---

## 📸 Preview

Simple chat interface with:

- User messages (right)
- AI messages (left)
- Typing indicator

---

## 🧠 Future Improvements

- Real AI integration (OpenAI)
- Chat history (memory)
- Authentication
- Real-time messaging (WebSocket)

---

## 📄 License

This project is open-source and free to use.

---

## 🙌 Author

Built with Sandy Ivano Tumoka using Next.js
