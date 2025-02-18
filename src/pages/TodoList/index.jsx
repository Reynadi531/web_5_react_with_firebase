import { ListCard } from "../../components/ListCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    console.log(storedTasks);
    setList(storedTasks);
  }, []);

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    console.log(updatedList);
    setList(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  return (
    <div className="m-12">
      <div className="flex justify-between gap-3 px-2 py-3">
        <p className="text-3xl font-bold">TodoList App</p>
        <button
          className="max-h-fit rounded-lg bg-green-500 px-8 py-2 font-medium text-white"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {list.map((list) => {
          return (
            <ListCard
              id={list.id}
              key={list.id}
              heading={list.heading}
              description={list.description}
              createdAt={list.createdAt}
              onDelete={handleDelete}
            ></ListCard>
          );
        })}
      </div>
    </div>
  );
};
