import { useState } from "react";
import "./App.css";
import InputField from "@/components/InputField/InputField";
import { Todo } from "@/models/TodoModel/TodoModel";
import TodoList from "@/components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setToDos] = useState<Todo[]>([]);
  const [todosHistory, settodosHistory] = useState<Todo[][]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if (todo) {
      const newTodo: Todo = { id: Date.now(), todo, isDone: false };
      const nextTodos = [...todos, newTodo];
      settodosHistory([...todosHistory, nextTodos]);
      setToDos(nextTodos);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <h1 className="header">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setToDos} />
    </div>
  );
}

export default App;
