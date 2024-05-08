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
        className="flex-1 mr-2 px-4 py-2 border border-gray-300 rounded"
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </div>
  );
};

export default TodoInputField;
