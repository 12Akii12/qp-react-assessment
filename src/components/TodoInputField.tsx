import React, { useState, useCallback } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInputField: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onAddTodo]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    },
    [handleAddTodo]
  );

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="flex-1 px-4 py-3 mr-2 border border-gray-300 rounded-lg outline-none hover:border-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Add a new todo item..."
      />
      <button
        onClick={handleAddTodo}
        className="px-4 md:px-6 py-1 md:py-2 text-sm md:text-base font-normal text-white bg-[#FF005C] rounded-lg"
      >
        + Add
      </button>
    </div>
  );
};

export default TodoInputField;
