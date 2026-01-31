import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish React project", completed: false }
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
    setFilteredTasks((prev) => [...prev, task]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setFilteredTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks: filteredTasks, addTask, toggleComplete, setFilteredTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
