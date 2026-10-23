import { useState } from "react";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import OnlineUsers from "../components/OnlineUsers";

function ChatRoom() {
  const currentUser = localStorage.getItem("username") || "Guest";

  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "Rahul",
      text: "Hey everyone! 👋",
      time: "4:20 PM",
    },
    {
      id: 2,
      username: "Priya",
      text: "Hello! How are you all?",
      time: "4:21 PM",
    },
  ]);

  const [users] = useState([
    "Rahul",
    "Priya",
    currentUser,
  ]);

  const sendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      username: currentUser,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="h-screen bg-gray-100 p-4">
      <div className="mx-auto flex h-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Main Chat */}
        <main className="flex flex-1 flex-col">

          {/* Header */}
          <header className="border-b p-5">
            <h1 className="text-xl font-bold">
              💬 General Group
            </h1>

            <p className="text-sm text-gray-500">
              {users.length} members online
            </p>
          </header>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-5">
            {messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                currentUser={currentUser}
              />
            ))}
          </div>

          {/* Input */}
          <MessageInput onSend={sendMessage} />

        </main>

        {/* Users */}
        <OnlineUsers users={users} />

      </div>
    </div>
  );
}

export default ChatRoom;