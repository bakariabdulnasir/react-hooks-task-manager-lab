import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function SearchBar() {
  const { tasks, setFilteredTasks } = useContext(TaskContext);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setFilteredTasks(tasks.filter((t) => t.title.toLowerCase().includes(query)));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
    />
  );
}
