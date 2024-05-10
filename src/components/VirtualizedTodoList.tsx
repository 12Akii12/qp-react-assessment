import React from "react";
import { FixedSizeList as List } from "react-window";
import Todo from "./Todo";
import { useMediaQuery } from "react-responsive";

interface TodoItem {
  text: string;
  completed: boolean;
}

interface VirtualizedTodoListProps {
  todos: TodoItem[];
  onToggleCompleted: (todoText: string) => void;
}

const VirtualizedTodoList: React.FC<VirtualizedTodoListProps> = ({ todos, onToggleCompleted }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 628px)" });

  const rowHeight = 64;

  const renderRow = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const todo = todos[index];
    return (
      <div style={style}>
        <Todo todo={todo.text} completed={todo.completed} onToggleCompleted={onToggleCompleted} />
      </div>
    );
  };

  return (
    <List
      height={window.innerHeight - 200}
      itemCount={todos.length}
      itemSize={rowHeight}
      width={isMobile ? "100%" : 672}
    >
      {renderRow}
    </List>
  );
};

export default VirtualizedTodoList;
