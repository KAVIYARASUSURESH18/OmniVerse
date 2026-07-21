import MovieCard from "./MovieCard";

import Loader from "../common/Loader";
import Error from "../common/Error";
import EmptyState from "../common/EmptyState";


const MovieGrid = ({
  movies = [],
  loading = false,
  error = null,
  onRetry,
}) => {


  // Loading State

  if (loading) {

    return (

      <Loader />

    );

  }



  // Error State

  if (error) {

    return (

      <Error

        message={error}

        onRetry={onRetry}

      />

    );

  }



  // Empty State

  if (!movies || movies.length === 0) {

    return (

      <EmptyState

        title="No Movies Found"

        message="We couldn't find any movies to display."

      />

    );

  }



  return (

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-4
        sm:gap-5
      "
    >

      {movies.map((movie) => (

        <MovieCard

          key={movie.id}

          id={movie.id}

          title={
            movie.title ||
            movie.name ||
            "Unknown Movie"
          }

          poster={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null
          }

          rating={
            movie.vote_average
              ? movie.vote_average.toFixed(1)
              : "N/A"
          }

          releaseDate={
            movie.release_date ||
            "Unknown"
          }

        />

      ))}

    </div>

  );

};


export default MovieGrid;
