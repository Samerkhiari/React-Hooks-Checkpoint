import ReactStars from "react-stars";
const SearchMovie = ({ setSearchName, setSearchRating }) => {
  const ratingChanged = (newRating) => {
    setSearchRating(newRating);
  };

  return (
    <div className="bar">
      <input type="text" placeholder="type here " onChange={(event) => setSearchName(event.target.value)} />
      <ReactStars 
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
        edit={true}
        half={false}
      />
    </div>
  );
};
export default SearchMovie;