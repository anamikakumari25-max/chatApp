import { Circle } from "lucide-react";

function OnlineUsers({ users }) {
  return (
    <aside className="hidden w-64 border-l bg-white p-5 md:block">
      <h2 className="mb-5 text-lg font-bold">
        Online Users
      </h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user}
            className="flex items-center gap-3"
          >
            <Circle
              size={10}
              fill="currentColor"
              className="text-green-500"
            />

            <span>{user}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default OnlineUsers;