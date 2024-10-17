import seriesData from "../api/seriesData.json";
import { Lists } from "./Lists";
const Card = () => {
  return (
    <>
      <ul>
        {seriesData.map((currEl) => {
          return <Lists key={currEl.id} data={currEl} />;
        })}
      </ul>
    </>
  );
};

export default Card;
