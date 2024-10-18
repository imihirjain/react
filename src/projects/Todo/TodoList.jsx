import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoList = ({
  data,
  checked,
  onHandleDelete,
  onHandleChangeTodo,
}) => {
  return (
    <>
      <li className="list-none uppercase mt-4 border-2 border-black rounded-md px-4 py-2">
        <div className="flex justify-between">
          <span
            className={`text-2xl ${checked ? "line-through" : "no-underline"} `}
          >
            {data}
          </span>
          <button
            className="text-2xl "
            onClick={() => onHandleChangeTodo(data)}
          >
            <MdCheck />
          </button>
          <button className="text-2xl" onClick={() => onHandleDelete(data)}>
            <MdDeleteForever />
          </button>
        </div>
      </li>
    </>
  );
};
