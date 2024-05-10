import React, { useCallback } from "react";
import TodoInputField from "./TodoInputField";
import VirtualizedTodoList from "./VirtualizedTodoList";
import useLocalStorageTodos from "../custom-hooks/useLocalStorage";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorageTodos("todos");

  const handleAddTodo = useCallback(
    (text: string) => {
      setTodos([...todos, { text, completed: false }]);
    },
    [todos, setTodos]
  );

  const handleToggleCompleted = useCallback(
    (todoText: string) => {
      setTodos(
        todos.map((todo) =>
          todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos, setTodos]
  );

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <TodoInputField onAddTodo={handleAddTodo} />
      <VirtualizedTodoList todos={todos} onToggleCompleted={handleToggleCompleted} />
    </div>
  );
};

export default TodoList;
