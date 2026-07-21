import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";


const FeaturedSection = () => {

  const featuredItems = [

    {
      title: "Featured Movies",
      description:
        "Explore the latest blockbusters, popular movies and cinematic experiences.",
      category: "Movies",
      path: "/movies",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    },

    {
      title: "Featured Anime",
      description:
        "Discover popular anime series and explore amazing worlds and characters.",
      category: "Anime",
      path: "/anime",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477",
    },

    {
      title: "Featured Games",
      description:
        "Find exciting games and discover your next gaming adventure.",
      category: "Games",
      path: "/games",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e",
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
          flex
          items-center
          gap-3
          mb-8
        "
      >

        <div
          className="
            w-11
            h-11
            rounded-xl
            bg-purple-500/10
            flex
            items-center
            justify-center
          "
        >

          <Sparkles
            size={24}
            className="text-purple-400"
          />

        </div>


        <div>

          <p
            className="
              text-sm
              text-purple-400
              font-semibold
            "
          >
            Featured
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
            "
          >
            Explore Something Amazing
          </h2>

        </div>

      </div>


      {/* Featured Grid */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >

        {featuredItems.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
            "
          >

            {/* Background Image */}

            <img
              src={item.image}
              alt={item.title}
              className="
                absolute
                inset-0
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
                via-black/60
                to-transparent
              "
            />


            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
              "
            >

              {/* Category */}

              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/20
                  border
                  border-cyan-400/30
                  text-cyan-300
                  text-xs
                  font-semibold
                  mb-3
                "
              >

                {item.category}

              </span>


              {/* Title */}

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-2
                "
              >

                {item.title}

              </h3>


              {/* Description */}

              <p
                className="
                  text-sm
                  text-gray-300
                  leading-relaxed
                  mb-5
                "
              >

                {item.description}

              </p>


              {/* Explore */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-cyan-400
                  font-semibold
                  text-sm
                "
              >

                Explore Now

                <ArrowRight
                  size={18}
                  className="
                    group-hover:translate-x-2
                    transition-transform
                  "
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};


export default FeaturedSection;
