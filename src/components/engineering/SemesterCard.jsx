import { Link } from "react-router-dom";

import {
  GraduationCap,
  BookOpen,
  ArrowRight,
} from "lucide-react";


const SemesterCard = ({
  id,
  semester,
  title,
  description,
  subjectsCount = 0,
  icon = "🎓",
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
        hover:shadow-2xl
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-40
          h-40
          bg-blue-500/10
          rounded-full
          blur-3xl
          group-hover:bg-blue-500/20
          transition
        "
      />


      {/* Semester Icon */}

      <div
        className="
          relative
          w-16
          h-16
          flex
          items-center
          justify-center
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-500/20
          text-3xl
          mb-6
        "
      >

        {icon}

      </div>



      {/* Semester Number */}

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
          text-sm
          font-semibold
          text-blue-400
        "
      >

        Semester {semester}

      </span>



      {/* Title */}

      <h3
        className="
          text-2xl
          font-bold
          text-white
          mb-3
          group-hover:text-blue-400
          transition
        "
      >

        {title || `Semester ${semester}`}

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



      {/* Subject Count */}

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

        <BookOpen size={18} />

        <span>

          {subjectsCount}{" "}
          {subjectsCount === 1
            ? "Subject"
            : "Subjects"
          }

        </span>

      </div>



      {/* Bottom Section */}

      <div
        className="
          flex
          items-center
          justify-between
          pt-4
          border-t
          border-slate-800
        "
      >

        {/* View Subjects */}

        <Link
          to={`/engineering/semester/${id}`}
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

          <GraduationCap size={18} />

          View Subjects

        </Link>



        {/* Arrow */}

        <Link
          to={`/engineering/semester/${id}`}
          className="
            w-10
            h-10
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
          aria-label={`View Semester ${semester}`}
        >

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>

  );

};


export default SemesterCard;
