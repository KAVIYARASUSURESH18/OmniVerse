import { Link } from "react-router-dom";

import {
  BookOpen,
  FileText,
  ArrowRight,
  List,
} from "lucide-react";


const UnitCard = ({
  id,
  unitNumber,
  title,
  description,
  topicsCount = 0,
}) => {

  return (

    <div
      className="
        group
        relative
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-xl
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -top-16
          -right-16
          w-32
          h-32
          bg-blue-500/10
          rounded-full
          blur-3xl
          group-hover:bg-blue-500/20
          transition
        "
      />


      {/* Unit Icon */}

      <div
        className="
          relative
          w-14
          h-14
          flex
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-500/20
          text-blue-400
          mb-5
        "
      >

        <BookOpen size={28} />

      </div>



      {/* Unit Number */}

      <span
        className="
          inline-block
          px-3
          py-1
          mb-3
          rounded-full
          bg-blue-500/10
          border
          border-blue-500/20
          text-xs
          font-semibold
          text-blue-400
        "
      >

        Unit {unitNumber}

      </span>



      {/* Unit Title */}

      <h3
        className="
          text-xl
          font-bold
          text-white
          mb-3
          group-hover:text-blue-400
          transition
        "
      >

        {title}

      </h3>



      {/* Description */}

      {description && (

        <p
          className="
            text-sm
            text-gray-400
            leading-relaxed
            line-clamp-3
            mb-5
          "
        >

          {description}

        </p>

      )}



      {/* Topics Count */}

      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-400
          mb-6
        "
      >

        <List size={17} />

        <span>

          {topicsCount}{" "}
          {topicsCount === 1
            ? "Topic"
            : "Topics"
          }

        </span>

      </div>



      {/* Bottom Actions */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          pt-4
          border-t
          border-slate-800
        "
      >

        {/* View Notes */}

        <Link
          to={`/engineering/unit/${id}`}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-blue-400
            hover:text-blue-300
            transition
          "
        >

          <FileText size={17} />

          View Notes

        </Link>



        {/* Arrow */}

        <Link
          to={`/engineering/unit/${id}`}
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-xl
            bg-slate-800
            text-gray-400
            group-hover:bg-blue-600
            group-hover:text-white
            transition
          "
          aria-label={`View Unit ${unitNumber}`}
        >

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>

  );

};


export default UnitCard;
