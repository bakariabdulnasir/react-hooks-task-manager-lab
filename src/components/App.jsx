import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList"; 

export default function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} data-testid={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

