import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { useState } from "react";
import { getDataLocalStorage, setDataLocalStorage } from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getDataLocalStorage());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifToDoContentMatched = task.find(
      (currTask) => currTask.content === content
    );

    if (ifToDoContentMatched) return;
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  // Todo Delete and clear all functionality
  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content != value);

    setTask(updatedTask);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  // Todo change functionality
  const handleChangeTodo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  // Add the data as it is after refresh
  setDataLocalStorage(task);
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
        <h1 className="mt-4 bg-slate-400 px-4 py-2 rounded-lg text-4xl font-mono">
          Todo List
        </h1>
        <TodoDateTime />
        <div>
          <TodoForm onAddTodo={handleFormSubmit} />

          <section className="mt-2 flex flex-col ">
            {task.map((currEl) => {
              return (
                <TodoList
                  key={currEl.id}
                  data={currEl.content}
                  checked={currEl.checked}
                  onHandleDelete={handleDeleteTask}
                  onHandleChangeTodo={handleChangeTodo}
                />
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
