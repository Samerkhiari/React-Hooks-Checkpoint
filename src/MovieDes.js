import { useParams, useNavigate } from "react-router-dom";
import { Data } from "./Data";



const MovieDes = () => {
  const { idMovie } = useParams();
  const navigate = useNavigate();
  const Movie = Data.find((movie) => movie.id === Number(idMovie));
  const redirect = () => {
    navigate("/List");
  };
  return (
    <div>
     <iframe width="560" height="315" src={Movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button onClick={redirect}>go Home</button>
    </div>
  );
};
export default MovieDes;
