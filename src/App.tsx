// import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">Todo App</h1>
        </div>
      </header>
      <main>
        <div className="w-full px-4 py-8 mx-auto md:max-w-7xl">
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
