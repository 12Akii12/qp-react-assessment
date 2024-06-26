import React from "react";

interface TodoProps {
  todo: string;
  completed: boolean;
  onToggleCompleted: (todo: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, completed, onToggleCompleted }) => {
  return (
    <div
      className={`flex items-center mb-4 w-full py-3 pl-3 pr-5 ${
        completed ? "bg-gray-300" : "bg-white"
      }  cursor-pointer border border-gray-300 rounded-lg outline-none false hover:border-gray-400 focus-within:border-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-300 gap-x-2 md:gap-x-5`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(todo)}
        className="w-4 h-4 mr-2"
      />
      <span className={`text-base font-normal line-clamp-1 ${completed ? "line-through" : ""}`}>
        {todo}
      </span>
    </div>
  );
};

export default Todo;
