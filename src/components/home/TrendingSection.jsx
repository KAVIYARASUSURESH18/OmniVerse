import { Link } from "react-router-dom";
import {
  Flame,
  ArrowRight,
  Play,
} from "lucide-react";


const TrendingCard = ({
  title,
  category,
  image,
  path,
}) => {

  return (

    <Link
      to={path}
      className="
        group
        min-w-[220px]
        sm:min-w-[250px]
        relative
        overflow-hidden
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-slate-600
      "
    >

      {/* Image */}

      <div
        className="
          relative
          h-64
          overflow-hidden
        "
      >

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />


        {/* Play Button */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-cyan-600
              flex
              items-center
              justify-center
            "
          >

            <Play
              size={20}
              fill="white"
              className="text-white"
            />

          </div>

        </div>


        {/* Category */}

        <span
          className="
            absolute
            top-3
            left-3
            px-3
            py-1
            rounded-full
            bg-black/60
            backdrop-blur-sm
            text-xs
            text-cyan-400
            font-semibold
          "
        >

          {category}

        </span>


        {/* Title */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-4
          "
        >

          <h3
            className="
              text-lg
              font-bold
              text-white
              truncate
            "
          >

            {title}

          </h3>

        </div>

      </div>

    </Link>

  );

};



const TrendingSection = () => {


  const trendingItems = [

    {
      title: "Trending Movies",
      category: "Movies",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      path: "/movies",
    },

    {
      title: "Popular Anime",
      category: "Anime",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477",
      path: "/anime",
    },

    {
      title: "Trending Games",
      category: "Games",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      path: "/games",
    },

    {
      title: "Engineering Hub",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      path: "/engineering",
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


      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-orange-500/10
              flex
              items-center
              justify-center
            "
          >

            <Flame
              size={25}
              className="text-orange-400"
            />

          </div>


          <div>

            <p
              className="
                text-sm
                text-cyan-400
                font-semibold
              "
            >

              What's Hot

            </p>


            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
              "
            >

              Trending Now

            </h2>

          </div>

        </div>


        {/* View All */}

        <Link
          to="/search"
          className="
            hidden
            sm:flex
            items-center
            gap-2
            text-cyan-400
            text-sm
            font-semibold
            hover:text-cyan-300
          "
        >

          View All

          <ArrowRight size={18} />

        </Link>

      </div>



      {/* Cards */}

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-4
          scrollbar-hide
        "
      >

        {trendingItems.map((item) => (

          <TrendingCard
            key={item.title}
            {...item}
          />

        ))}

      </div>


    </section>

  );

};


export default TrendingSection;
