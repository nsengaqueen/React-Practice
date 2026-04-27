import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    if (input === "") return;
    const newTodo = {
      id: Math.random(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </p>
          <button onClick={() => handleComplete(todo.id)}>Complete</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
