export const Lists = ({ data }) => {
  //   console.log(props);
  const { img_url, s_name, rating, description, cast, genre, watch_url, id } =
    data;
  return (
    <li >
      <div>
        <img src={img_url} />
      </div>
      <div >
        <h2>Name:- {s_name}</h2>
        <h3>Rating:- {rating}</h3>
        <p>Summary:- {description}</p>
        <p>Cast:- {cast}</p>
        <p>Genre:- {genre}</p>
        <a href={watch_url} target="_blank">
          <button className="px-4 py-2 bg-cyan-400 border-none text-red-600">
            Enjoy the Show
          </button>
        </a>
      </div>
    </li>
  );
};
