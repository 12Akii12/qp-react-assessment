import React, { useState, useCallback } from "react";
import Todo from "./Todo";
import TodoInputField from "./TodoInputField";

interface TodoItem {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = useCallback(
    (text: string) => {
      setTodos([...todos, { text, completed: false }]);
    },
    [todos]
  );

  const handleToggleCompleted = useCallback(
    (todoText: string) => {
      setTodos(
        todos.map((todo) =>
          todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="max-w-md mx-auto mt-8">
      <TodoInputField onAddTodo={handleAddTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo.text}
            completed={todo.completed}
            onToggleCompleted={handleToggleCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
