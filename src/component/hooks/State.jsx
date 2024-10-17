import { useState } from "react";

export const State = () => {
  //   let value = 0;
  //   const handleButtonClick = () => {
  //     value++;
  //     console.log(value);
  //   };
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  const handleDecrement = () => {
    setCount(() => count - 1);
    if (count === 0) setCount(0);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center border-2 border-gray-700 p-4 rounded-lg">
          <h1 className="text-4xl">{count}</h1>
          <button
            onClick={handleButtonClick}
            className="border-2 mt-3 bg-green-600 px-4 py-2 rounded-lg"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="border-2 mt-3 bg-red-500 px-4 py-2 rounded-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
