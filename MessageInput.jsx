import { useState } from "react";
import { Send } from "lucide-react";

function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-t bg-white p-4"
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-full border px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
      >
        <Send size={20} />
      </button>
    </form>
  );
}

export default MessageInput;