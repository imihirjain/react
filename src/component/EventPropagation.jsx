const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("Grand Parent");
  };
  const handleParent = () => {
    console.log("Parent Click");
  };
  const handleChild = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child Click");
  };
  return (
    <>
      {/* Bubbling Phase */}
      {/* <div onClick={handleGrandParent}>
        <div onClick={handleParent}>
          <button onClick={handleChild}>Child Div</button>
        </div>
      </div> */}

      {/* Capture Phase */}
      <div onClickCapture={handleGrandParent}>
        <div onClickCapture={handleParent}>
          <button onClickCapture={handleChild}>Child Div</button>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
