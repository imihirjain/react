export const EventHandling = () => {
  const handleClick = (event) => {
    alert("Hi i am handle click");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
  };

  const handleUser = (user) => {
    console.log(`Hey ${user}, Welcome to react js course`);
  };
  return (
    <>
      <button onClick={handleClick}>click me 1</button> <br />
      <button onClick={(event) => handleClick(event)}>click me 2</button>
      <br />
      <button onClick={(event) => console.log(event)}>
        Inline event handle function
      </button>
      <br />
      <button onClick={() => alert("I am inline arrow function")}>
        Inline Arrow function
      </button>
      <br />
      <button
        onClick={() => {
          handleUser("Rahul");
        }}
      >
        Handle User
      </button>
    </>
  );
};
