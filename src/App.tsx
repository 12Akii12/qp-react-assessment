// import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Todo App</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
