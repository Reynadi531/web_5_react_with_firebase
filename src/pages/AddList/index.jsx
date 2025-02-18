import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskInput } from "../../components/Input";

export const AddTodoList = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    heading: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi form
    if (!task.heading || !task.description) {
      alert("Harap Isi Form");
      return;
    }

    // get "tasks" dari local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // task baru
    const newTask = {
      id: Date.now(),
      heading: task.heading,
      description: task.description,
      createdAt: Date.now(),
    };

    // Update task dengan array
    const updatedTasks = [...tasks, newTask];

    // save update
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // navigate ke todolist
    navigate("/");
  };

  return (
    <div className="m-12 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Heading Input */}
        <TaskInput
          name={"heading"}
          value={task.heading}
          onChange={handleInputChange}
          placeholder={"Please Input Heading"}
        />
        {/* Description Input */}
        <TaskInput
          name={"description"}
          value={task.description}
          onChange={handleInputChange}
          placeholder={"Please Input Description"}
        />
        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="rounded-lg bg-red-500 px-6 py-2 text-white"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-green-500 px-6 py-2 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
