import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Star,
  Calendar,
  Clock,
  Play,
} from "lucide-react";


const MovieDetails = ({
  movie,
  loading = false,
  error = null,
  onRetry,
}) => {


  // Loading State

  if (loading) {

    return (

      <div
        className="
          min-h-screen
          bg-slate-950
          flex
          items-center
          justify-center
          text-white
        "
      >

        <div className="text-center">

          <div
            className="
              w-12
              h-12
              border-4
              border-cyan-500
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              mb-4
            "
          />

          <p className="text-gray-400">

            Loading movie details...

          </p>

        </div>

      </div>

    );

  }



  // Error State

  if (error) {

    return (

      <div
        className="
          min-h-screen
          bg-slate-950
          flex
          items-center
          justify-center
          px-6
        "
      >

        <div className="text-center">

          <h2
            className="
              text-2xl
              font-bold
              text-white
              mb-3
            "
          >

            Something went wrong

          </h2>


          <p
            className="
              text-gray-400
              mb-6
            "
          >

            {error}

          </p>


          {onRetry && (

            <button
              onClick={onRetry}
              className="
                bg-cyan-600
                hover:bg-cyan-500
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >

              Try Again

            </button>

          )}

        </div>

      </div>

    );

  }



  // No Movie

  if (!movie) {

    return (

      <div
        className="
          min-h-screen
          bg-slate-950
          flex
          items-center
          justify-center
          text-gray-400
        "
      >

        Movie not found.

      </div>

    );

  }



  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >


      {/* Backdrop */}

      <section
        className="
          relative
          min-h-[550px]
          flex
          items-end
          overflow-hidden
        "
      >

        {movie.backdrop_path && (

          <img
            src={
              `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            }
            alt={movie.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-30
            "
          />

        )}


        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/80
            to-transparent
          "
        />


        {/* Content */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            w-full
            px-6
            py-12
          "
        >


          {/* Back Button */}

          <Link
            to="/movies"
            className="
              inline-flex
              items-center
              gap-2
              text-gray-300
              hover:text-white
              mb-8
            "
          >

            <ArrowLeft size={20} />

            Back to Movies

          </Link>



          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[250px_1fr]
              gap-8
              items-end
            "
          >


            {/* Poster */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                shadow-2xl
                bg-slate-900
              "
            >

              {movie.poster_path ? (

                <img
                  src={
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  alt={movie.title}
                  className="
                    w-full
                    aspect-[2/3]
                    object-cover
                  "
                />

              ) : (

                <div
                  className="
                    aspect-[2/3]
                    flex
                    items-center
                    justify-center
                    text-gray-500
                  "
                >

                  No Image

                </div>

              )}

            </div>



            {/* Movie Information */}

            <div>


              {/* Title */}

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  font-extrabold
                  mb-5
                "
              >

                {movie.title}

              </h1>



              {/* Meta Information */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-5
                  text-sm
                  text-gray-300
                  mb-6
                "
              >


                {/* Rating */}

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-yellow-400
                    font-semibold
                  "
                >

                  <Star
                    size={18}
                    fill="currentColor"
                  />

                  {movie.vote_average
                    ? movie.vote_average.toFixed(1)
                    : "N/A"
                  }

                </span>



                {/* Release Date */}

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <Calendar size={18} />

                  {movie.release_date || "Unknown"}

                </span>



                {/* Runtime */}

                {movie.runtime && (

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Clock size={18} />

                    {movie.runtime} min

                  </span>

                )}

              </div>



              {/* Genres */}

              {movie.genres?.length > 0 && (

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >

                  {movie.genres.map((genre) => (

                    <span
                      key={genre.id}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-sm
                        text-gray-300
                      "
                    >

                      {genre.name}

                    </span>

                  ))}

                </div>

              )}



              {/* Overview */}

              <p
                className="
                  max-w-3xl
                  text-gray-300
                  leading-relaxed
                  mb-8
                "
              >

                {movie.overview ||
                  "No description available for this movie."
                }

              </p>



              {/* Action Buttons */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                "
              >

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    bg-cyan-600
                    hover:bg-cyan-500
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >

                  <Play
                    size={20}
                    fill="currentColor"
                  />

                  Watch Trailer

                </button>


                <button
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-slate-800
                    hover:bg-slate-700
                    border
                    border-slate-700
                    text-white
                    font-semibold
                    transition
                  "
                >

                  + Add to Watchlist

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

};


export default MovieDetails;
