import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Star,
  Calendar,
  Clock,
  PlayCircle,
  ExternalLink,
} from "lucide-react";


const AnimeDetails = ({
  anime,
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
              border-purple-500
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              mb-4
            "
          />

          <p className="text-gray-400">

            Loading anime details...

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
                bg-purple-600
                hover:bg-purple-500
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



  // Anime Not Found

  if (!anime) {

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

        Anime not found.

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


      {/* Hero / Background */}

      <section
        className="
          relative
          min-h-[600px]
          flex
          items-end
          overflow-hidden
        "
      >


        {/* Background Image */}

        {anime.images?.jpg?.large_image_url && (

          <img
            src={
              anime.images.jpg.large_image_url
            }
            alt={anime.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-20
              blur-sm
            "
          />

        )}


        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/90
            to-slate-950/30
          "
        />


        {/* Main Content */}

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
            to="/anime"
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

            Back to Anime

          </Link>



          {/* Content Grid */}

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

              {anime.images?.jpg
                ?.large_image_url ? (

                <img
                  src={
                    anime.images.jpg
                      .large_image_url
                  }
                  alt={anime.title}
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



            {/* Anime Information */}

            <div>


              {/* Title */}

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  font-extrabold
                  mb-2
                "
              >

                {anime.title}

              </h1>



              {/* Japanese Title */}

              {anime.title_japanese && (

                <p
                  className="
                    text-gray-400
                    mb-5
                  "
                >

                  {anime.title_japanese}

                </p>

              )}



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


                {/* Score */}

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

                  {anime.score
                    ? anime.score.toFixed(1)
                    : "N/A"
                  }

                </span>



                {/* Episodes */}

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <PlayCircle size={18} />

                  {anime.episodes || "N/A"}
                  {" "}Episodes

                </span>



                {/* Duration */}

                {anime.duration && (

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Clock size={18} />

                    {anime.duration}

                  </span>

                )}

              </div>



              {/* Status */}

              {anime.status && (

                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-500/30
                    text-purple-300
                    text-sm
                    font-semibold
                    mb-5
                  "
                >

                  {anime.status}

                </span>

              )}



              {/* Aired Date */}

              {anime.aired?.string && (

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    text-sm
                    mb-6
                  "
                >

                  <Calendar size={18} />

                  {anime.aired.string}

                </div>

              )}



              {/* Genres */}

              {anime.genres?.length > 0 && (

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >

                  {anime.genres.map((genre) => (

                    <span
                      key={genre.mal_id}
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



              {/* Synopsis */}

              <p
                className="
                  max-w-3xl
                  text-gray-300
                  leading-relaxed
                  mb-8
                "
              >

                {anime.synopsis ||
                  "No description available for this anime."
                }

              </p>



              {/* Buttons */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                "
              >

                {/* Trailer */}

                {anime.trailer?.url && (

                  <a
                    href={anime.trailer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      bg-purple-600
                      hover:bg-purple-500
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                      transition
                    "
                  >

                    <PlayCircle size={20} />

                    Watch Trailer

                    <ExternalLink size={16} />

                  </a>

                )}


                {/* MyAnimeList */}

                {anime.url && (

                  <a
                    href={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
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

                    View on MAL

                    <ExternalLink size={16} />

                  </a>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

};


export default AnimeDetails;
