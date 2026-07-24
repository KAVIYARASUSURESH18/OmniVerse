import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Star,
  Calendar,
  Gamepad2,
  Globe,
  Code2,
  Building2,
} from "lucide-react";


const GameDetails = ({
  game,
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
              border-green-500
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              mb-4
            "
          />

          <p className="text-gray-400">

            Loading game details...

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
                bg-green-600
                hover:bg-green-500
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



  // Game Not Found

  if (!game) {

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

        Game not found.

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


      {/* Hero Section */}

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

        {game.background_image && (

          <img
            src={game.background_image}
            alt={game.name}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-25
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
            via-slate-950/90
            to-slate-950/30
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
            to="/games"
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

            Back to Games

          </Link>



          {/* Main Grid */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[350px_1fr]
              gap-8
              items-end
            "
          >


            {/* Game Image */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                shadow-2xl
                bg-slate-900
              "
            >

              {game.background_image ? (

                <img
                  src={game.background_image}
                  alt={game.name}
                  className="
                    w-full
                    aspect-[16/10]
                    object-cover
                  "
                />

              ) : (

                <div
                  className="
                    aspect-[16/10]
                    flex
                    items-center
                    justify-center
                    text-gray-500
                  "
                >

                  <Gamepad2 size={50} />

                </div>

              )}

            </div>



            {/* Game Information */}

            <div>


              {/* Game Name */}

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  font-extrabold
                  mb-6
                "
              >

                {game.name}

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

                  {game.rating
                    ? game.rating.toFixed(1)
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

                  {game.released || "Unknown"}

                </span>

              </div>



              {/* Genres */}

              {game.genres?.length > 0 && (

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >

                  {game.genres.map((genre) => (

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



              {/* Platforms */}

              {game.platforms?.length > 0 && (

                <div className="mb-6">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-300
                      mb-3
                    "
                  >

                    <Gamepad2 size={18} />

                    <span className="font-semibold">

                      Platforms

                    </span>

                  </div>


                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {game.platforms.map((item) => (

                      <span
                        key={
                          item.platform?.id ||
                          item.platform?.name
                        }
                        className="
                          px-3
                          py-1
                          rounded-lg
                          bg-slate-800
                          text-sm
                          text-gray-400
                        "
                      >

                        {item.platform?.name}

                      </span>

                    ))}

                  </div>

                </div>

              )}



              {/* Description */}

              <div className="mb-8">

                <h2
                  className="
                    text-xl
                    font-bold
                    mb-3
                  "
                >

                  About This Game

                </h2>


                <div
                  className="
                    max-w-3xl
                    text-gray-300
                    leading-relaxed
                  "
                  dangerouslySetInnerHTML={{
                    __html:
                      game.description ||
                      "No description available.",
                  }}
                />

              </div>



              {/* Developer & Publisher */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-6
                  mb-8
                  text-sm
                "
              >

                {game.developers?.length > 0 && (

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                    "
                  >

                    <Code2 size={18} />

                    <span>

                      Developer:

                    </span>

                    <strong className="text-white">

                      {game.developers
                        .map(
                          (developer) =>
                            developer.name
                        )
                        .join(", ")
                      }

                    </strong>

                  </div>

                )}



                {game.publishers?.length > 0 && (

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                    "
                  >

                    <Building2 size={18} />

                    <span>

                      Publisher:

                    </span>

                    <strong className="text-white">

                      {game.publishers
                        .map(
                          (publisher) =>
                            publisher.name
                        )
                        .join(", ")
                      }

                    </strong>

                  </div>

                )}

              </div>



              {/* Website */}

              {game.website && (

                <a
                  href={game.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-green-600
                    hover:bg-green-500
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >

                  <Globe size={20} />

                  Official Website

                </a>

              )}

            </div>

          </div>

        </div>

      </section>

    </main>

  );

};


export default GameDetails;
