import { Link } from "react-router-dom";

import {
  BookOpen,
  FileText,
  ArrowRight,
} from "lucide-react";


const SubjectCard = ({
  id,
  name,
  code,
  semester,
  description,
  units = 0,
  icon = "📚",
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


      {/* Subject Icon */}

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
          text-3xl
          mb-5
        "
      >

        {icon}

      </div>



      {/* Subject Code */}

      {code && (

        <span
          className="
            inline-block
            px-3
            py-1
            mb-3
            rounded-full
            bg-slate-800
            border
            border-slate-700
            text-xs
            font-semibold
            text-blue-400
          "
        >

          {code}

        </span>

      )}



      {/* Subject Name */}

      <h3
        className="
          text-xl
          font-bold
          text-white
          mb-2
          line-clamp-2
          group-hover:text-blue-400
          transition
        "
      >

        {name}

      </h3>



      {/* Semester */}

      {semester && (

        <p
          className="
            text-sm
            text-gray-500
            mb-3
          "
        >

          Semester {semester}

        </p>

      )}



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



      {/* Units */}

      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-400
          mb-5
        "
      >

        <BookOpen size={17} />

        <span>

          {units} {units === 1 ? "Unit" : "Units"}

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

        {/* Notes */}

        <Link
          to={`/engineering/subject/${id}`}
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
          to={`/engineering/subject/${id}`}
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
          aria-label={`View ${name}`}
        >

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>

  );

};


export default SubjectCard;
