import { useState } from "react";

export const DerivedState = () => {
  const [user, setUser] = useState([
    { name: "Mihir", age: 25 },
    { name: "Rajnessh", age: 48 },
    { name: "Rohit", age: 29 },
    { name: "Neeraj", age: 35 },
  ]);

  const userCount = user.length;

  const averageAge =
    user.reduce((accum, currEl) => accum + currEl.age, 0) / userCount;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Users List</h1>
        <ul>
          {user.map((curEle, index) => {
            return (
              <li key={index}>
                {curEle.name} - {curEle.age} years old.
              </li>
            );
          })}
        </ul>
        <h1>Total Student:- {userCount}</h1>
        <h1>Average Age:- {averageAge}</h1>
      </div>
    </>
  );
};
