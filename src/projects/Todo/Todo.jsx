import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const handleInput = (value) => {
    setInputValue(value);
  };

  // Todo Date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Todo Delete and clear all functionality
  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((currTask) => currTask != value);

    setTask(updatedTask);
  };

  const handleClearAll = () => {
    setTask([]);
  };
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
        <h1 className="mt-4 bg-slate-400 px-4 py-2 rounded-lg text-4xl font-mono">
          Todo List
        </h1>
        <h2>{dateTime}</h2>
        <div>
          <div className="flex justify-center rounded-lg mt-4">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                autoComplete="off"
                placeholder="enter the task"
                value={inputValue}
                onChange={(event) => handleInput(event.target.value)}
                className="uppercase bg-slate-200 px-4 py-2 "
              />
              <button
                type="submit"
                className="bg-slate-400 rounded-tr-md rounded-br-md px-4 py-2"
              >
                Add Task
              </button>
            </form>
          </div>

          <section className="mt-2 flex flex-col ">
            {task.map((currEl, index) => {
              return (
                <li
                  key={index}
                  className="list-none uppercase mt-4 border-2 border-black rounded-md px-4 py-2"
                >
                  <div className="flex justify-between">
                    <span className="text-2xl">{currEl}</span>
                    <button className="text-2xl ">
                      <MdCheck />
                    </button>
                    <button
                      className="text-2xl"
                      onClick={() => handleDeleteTask(currEl)}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </li>
              );
            })}
          </section>
        </div>
        <button
          className="justify-center items-center flex px-4 py-2 text-white rounded-md hover:bg-red-900 bg-red-600"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Todo;
