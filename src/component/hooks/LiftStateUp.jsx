import { useState } from "react";

export const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputValue value={inputValue} setValue={setInputValue} />
      <DisplayValue value={inputValue} />
    </>
  );
};

const InputValue = ({ value, setValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

const DisplayValue = ({ value }) => {
  return (
    <>
      <h1>The entered value is:- {value}</h1>
    </>
  );
};
