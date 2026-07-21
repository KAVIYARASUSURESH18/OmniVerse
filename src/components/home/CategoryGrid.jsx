import {
  Film,
  Tv,
  Gamepad2,
  BookOpen,
} from "lucide-react";

import CategoryCard from "./CategoryCard";


const CategoryGrid = () => {

  const categories = [
    {
      title: "Movies",
      description:
        "Discover trending movies, popular releases and cinematic experiences.",
      path: "/movies",
      icon: Film,
      gradient: "bg-cyan-500",
    },

    {
      title: "Anime",
      description:
        "Explore anime series, popular characters and your favourite shows.",
      path: "/anime",
      icon: Tv,
      gradient: "bg-purple-500",
    },

    {
      title: "Games",
      description:
        "Discover exciting games, popular titles and gaming experiences.",
      path: "/games",
      icon: Gamepad2,
      gradient: "bg-green-500",
    },

    {
      title: "Engineering Hub",
      description:
        "Learn engineering subjects, semesters, notes and study resources.",
      path: "/engineering",
      icon: BookOpen,
      gradient: "bg-orange-500",
    },
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


      {/* Category Cards */}

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


export default CategoryGrid;
