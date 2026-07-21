import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";


const MovieCard = ({
  id,
  title,
  poster,
  rating = "N/A",
  releaseDate = "Unknown",
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
        hover:border-cyan-500/40
        hover:shadow-2xl
      "
    >

      {/* Poster */}

      <div
        className="
          relative
          aspect-[2/3]
          overflow-hidden
          bg-slate-800
        "
      >

        {poster ? (

          <img
            src={poster}
            alt={title}
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

            No Image

          </div>

        )}


        {/* Dark Overlay */}

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
          to={`/movies/${id}`}
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
            bg-cyan-600
            hover:bg-cyan-500
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


      {/* Movie Info */}

      <div
        className="
          p-4
        "
      >

        {/* Title */}

        <h3
          className="
            text-base
            font-bold
            text-white
            truncate
          "
          title={title}
        >

          {title}

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

      </div>

    </div>

  );

};


export default MovieCard;
