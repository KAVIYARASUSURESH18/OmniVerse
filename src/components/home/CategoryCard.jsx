import { Link } from "react-router-dom";
import {
  ArrowRight,
  Film,
  Tv,
  Gamepad2,
  BookOpen
} from "lucide-react";


const CategoryCard = ({
  title,
  description,
  path,
  icon: Icon,
  gradient
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


      {/* Explore */}

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



const CategoryCardGrid = () => {


  const categories = [

    {
      title: "Movies",
      description:
        "Discover trending movies, popular releases and cinematic experiences.",
      path: "/movies",
      icon: Film,
      gradient: "bg-cyan-500"
    },

    {
      title: "Anime",
      description:
        "Explore anime series, popular characters and your favourite shows.",
      path: "/anime",
      icon: Tv,
      gradient: "bg-purple-500"
    },

    {
      title: "Games",
      description:
        "Discover exciting games, popular titles and gaming experiences.",
      path: "/games",
      icon: Gamepad2,
      gradient: "bg-green-500"
    },

    {
      title: "Engineering Hub",
      description:
        "Learn engineering subjects, semesters, notes and study resources.",
      path: "/engineering",
      icon: BookOpen,
      gradient: "bg-orange-500"
    }

  ];


  return (

    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-16
      "
    >

      {/* Section Header */}

      <div
        className="
        text-center
        mb-10
        "
      >

        <p
          className="
          text-cyan-400
          text-sm
          font-semibold
          uppercase
          tracking-wider
          "
        >

          Explore OmniVerse

        </p>


        <h2
          className="
          mt-2
          text-3xl
          sm:text-4xl
          font-bold
          text-white
          "
        >

          Everything in One Universe

        </h2>


        <p
          className="
          mt-3
          text-gray-400
          max-w-2xl
          mx-auto
          "
        >

          Choose your world and start exploring
          movies, anime, games or engineering.

        </p>

      </div>


      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
      >

        {categories.map((category) => (

          <CategoryCard
            key={category.title}
            {...category}
          />

        ))}

      </div>

    </section>

  );

};


export default CategoryCardGrid;
