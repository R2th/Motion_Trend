import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "../MovieList";
import "./index.scss";

const MovieCollection = (props) => {
  const { movies, viewDetail, setDetail, setPage, moviesList } = props;

  const selectMovie = (id) => {
    if (!viewDetail.isOpened) {
      setDetail({
        id,
        isOpened: true,
      });
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="container">
      <div className="movie-collection">
        <div className="movie-title">
          <div className="movie-title__tab">
            <p title="Motion trend pick">Motion trend pick</p>
            <p title="Latest">Latest</p>
            <p title="Recommended">Recommended</p>
          </div>
          <div className="movie-title__criteria">Selection criteria</div>
        </div>

        <section className="movie-list">
          <InfiniteScroll
            next={() => setPage((prev) => prev + 1)}
            hasMore={true}
            loader={<h3>loading...</h3>}
            dataLength={movies.length}
            height={700}
          >
            {movies?.map((movie, idx) => (
              <div key={idx} onClick={() => selectMovie(movie.id)}>
                <MovieList
                  movies={movies}
                  viewDetail={viewDetail}
                  setDetail={setDetail}
                  key={idx}
                  id={movie.id}
                  title={movie.title}
                  background_image={movie.background_image}
                  firstEl={idx === 0 ? "label" : null}
                />
              </div>
            ))}
            {moviesList?.map((movie, idx) => (
              <div key={idx} onClick={() => selectMovie(movie.id)}>
                <MovieList
                  movies={movies}
                  moviesList={moviesList}
                  viewDetail={viewDetail}
                  setDetail={setDetail}
                  key={idx}
                  id={movie.id}
                  title={movie.title}
                  background_image={movie.background_image}
                  firstEl={idx === 0 ? "label" : null}
                />
              </div>
            ))}
          </InfiniteScroll>
        </section>
      </div>
    </div>
  );
};

export default MovieCollection;
