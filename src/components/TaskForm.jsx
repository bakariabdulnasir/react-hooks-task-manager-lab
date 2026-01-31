import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task">New Task</label>
      <input
        id="new-task"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
