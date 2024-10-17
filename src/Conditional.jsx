export const Conditional = () => {
  const name = "";
  const rating = "8.2";
  const age = "18";
  const description = "";
  const returnGen = () => {
    const genre = "Romantic Couple";
    return genre;
  };

  let canWatch = "Not Available";
  if (age >= 18) canWatch = "Watch Now";
  return (
    <>
      <h1>Name:- {name} </h1>
      <h1>Rating: {rating}</h1>
      <p>Description:- {description}</p>
      <p>Genre:- {returnGen()}</p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not available"}</button> */}
      <button>{canWatch}</button>
    </>
  );
};
