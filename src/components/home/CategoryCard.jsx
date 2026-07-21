import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({
  title,
  description,
  path,
  icon: Icon,
  gradient = "bg-cyan-500",
}) => {
  return (
    <Link
      to={path}
      className="
        group
        relative
        overflow-hidden
        block
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-slate-600
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          w-32
          h-32
          rounded-full
          blur-3xl
          opacity-20
          ${gradient}
        `}
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10
          w-14
          h-14
          flex
          items-center
          justify-center
          rounded-xl
          bg-slate-800
          mb-5
          group-hover:scale-110
          transition-transform
          duration-300
        "
      >
        <Icon
          size={28}
          className="text-cyan-400"
        />
      </div>

      {/* Title */}

      <h3
        className="
          relative
          z-10
          text-xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-2
          text-sm
          text-gray-400
          leading-relaxed
        "
      >
        {description}
      </p>

      {/* Explore Button */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-2
          mt-6
          text-cyan-400
          text-sm
          font-semibold
        "
      >
        Explore

        <ArrowRight
          size={18}
          className="
            group-hover:translate-x-2
            transition-transform
          "
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
