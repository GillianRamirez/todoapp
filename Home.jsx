import React, { useState, useEffect } from "react";
import "../styles.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  //Count Tracker
  const Progress = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prevCount) => prevCount + 1);
  };
  const stopped = () => {
    const [count, setCount] = useState(0);
    const decrement = () => setCount((prevCount) => prevCount - 1 == 0);
  };
  return (
    <header className="App-header">
      <h1 className="font">Sunny Tasks Buddy</h1>
      <p className="font">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ipsum
        necessitatibus! Recusandae sint sequi quasi consequatur officia vel
        voluptatibus. Ipsam deserunt molestiae magnam alias ipsa modi aspernatur
        natus, quae autem!
      </p>
      <div className="tracker">
        <h2 className="font">In Progress: {(Progress, stopped)}</h2>
        <h2 className="font">Completed: {Progress}</h2>
        <h2 className="font">Incompleted: {Progress}</h2>
      </div>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      <div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="font" key={index}>
              {todo}
              <button className="font" onClick={() => handleRemoveTodo(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Home;
