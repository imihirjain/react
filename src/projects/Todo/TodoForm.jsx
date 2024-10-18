import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInput = (value) => {
    setInputValue({ id: value, checked: false, content: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", checked: false, content: "" });
  };
  return (
    <>
      <div className="flex justify-center rounded-lg mt-4">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="enter the task"
            value={inputValue.content}
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
    </>
  );
};
