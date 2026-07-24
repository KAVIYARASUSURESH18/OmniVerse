import { Link } from "react-router-dom";

import {
  Star,
  Calendar,
  Gamepad2,
  ArrowRight,
} from "lucide-react";


const GameCard = ({
  id,
  name,
  image,
  rating = "N/A",
  releaseDate = "Unknown",
  platforms = [],
}) => {

  return (

    <div
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-green-500/40
        hover:shadow-2xl
      "
    >

      {/* Game Image */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-slate-800
        "
      >

        {image ? (

          <img
            src={image}
            alt={name}
            loading="lazy"
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

        ) : (

          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
              text-gray-500
            "
          >

            <Gamepad2 size={40} />

          </div>

        )}


        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
          "
        />


        {/* Rating */}

        <div
          className="
            absolute
            top-3
            right-3
            flex
            items-center
            gap-1
            px-2
            py-1
            rounded-lg
            bg-black/70
            backdrop-blur-sm
            text-yellow-400
            text-xs
            font-semibold
          "
        >

          <Star
            size={14}
            fill="currentColor"
          />

          {rating}

        </div>


        {/* Details Button */}

        <Link
          to={`/games/${id}`}
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-green-600
            hover:bg-green-500
            text-white
            text-sm
            font-semibold
            opacity-0
            group-hover:opacity-100
            transition
          "
        >

          Details

          <ArrowRight size={16} />

        </Link>

      </div>


      {/* Game Information */}

      <div
        className="
          p-4
        "
      >

        {/* Game Name */}

        <h3
          className="
            text-base
            font-bold
            text-white
            truncate
          "
          title={name}
        >

          {name}

        </h3>


        {/* Release Date */}

        <div
          className="
            flex
            items-center
            gap-2
            mt-2
            text-gray-500
            text-xs
          "
        >

          <Calendar size={14} />

          {releaseDate || "Unknown"}

        </div>


        {/* Platforms */}

        {platforms?.length > 0 && (

          <div
            className="
              flex
              items-center
              gap-2
              mt-2
              text-gray-500
              text-xs
            "
          >

            <Gamepad2 size={14} />

            <span className="truncate">

              {platforms
                .slice(0, 3)
                .map((platform) =>
                  platform.name || platform
                )
                .join(", ")
              }

            </span>

          </div>

        )}

      </div>

    </div>

  );

};


export default GameCard;
