// TaskList.jsx
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export default function TaskList() {
  const { tasks, toggleComplete } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} data-testid={task.id}>
          {task.title}{" "}
          {task.completed ? (
            <button onClick={() => toggleComplete(task.id)}>Undo</button>
          ) : (
            <button onClick={() => toggleComplete(task.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}