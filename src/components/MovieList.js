import "./MovieList.css";
function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="row">
      <div className="row__poster">
        {props.movies &&
          props.movies.map((movie) => (
            <div className="row__contains">
              <img
                className="row__image"
                key={movie.imdbID}
                src={movie.Poster}
                alt="title"
              ></img>

              <div
                className="row__overlay"
                onClick={() => props.handleFavouritesClick(movie)}
              >
                <FavouriteComponent />
              </div>
            </div>
          ))}
        ;
      </div>
    </div>
  );
}

export default MovieList;
