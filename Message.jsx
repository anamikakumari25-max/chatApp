function Message({ message, currentUser }) {
  const isMine = message.username === currentUser;

  return (
    <div
      className={`flex ${
        isMine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          isMine
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        {!isMine && (
          <p className="mb-1 text-sm font-bold">
            {message.username}
          </p>
        )}

        <p>{message.text}</p>

        <p
          className={`mt-1 text-xs ${
            isMine ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}

export default Message;