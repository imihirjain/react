export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleMouseEnter = () => {
    alert("Hovered over");
  };
  return (
    <>
      <WelcomeUser
        onButtonClick={() => handleWelcomeUser("Ram")}
        onHover={handleMouseEnter}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onHover } = props;
  const handleGreet = (user) => {
    console.log(`Hey ${user}, Welcome`);
    onButtonClick();
  };
  return (
    <>
      <button onClick={onButtonClick}>Click me</button>
      <button onMouseEnter={onHover}>Hover Me</button>
      <button onClick={() => handleGreet("Ram")}>Greeting</button>
    </>
  );
};
