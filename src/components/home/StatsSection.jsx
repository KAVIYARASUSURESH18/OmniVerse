import {
  Film,
  Tv,
  Gamepad2,
  BookOpen,
  Bot,
} from "lucide-react";


const StatsSection = () => {


  const stats = [

    {
      value: "1000+",
      label: "Movies",
      icon: Film,
      description: "Movies to explore",
    },

    {
      value: "500+",
      label: "Anime",
      icon: Tv,
      description: "Anime titles",
    },

    {
      value: "1000+",
      label: "Games",
      icon: Gamepad2,
      description: "Games to discover",
    },

    {
      value: "∞",
      label: "Learning",
      icon: BookOpen,
      description: "Engineering resources",
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
          text-center
          mb-10
        "
      >

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-400
            text-sm
            font-semibold
          "
        >

          <Bot size={18} />

          Powered by OmniVerse

        </div>


        <h2
          className="
            mt-4
            text-3xl
            sm:text-4xl
            font-bold
            text-white
          "
        >

          One Platform.
          <span className="text-cyan-400">
            {" "}Multiple Worlds.
          </span>

        </h2>


        <p
          className="
            mt-3
            text-gray-400
            max-w-2xl
            mx-auto
          "
        >

          Explore entertainment, gaming, anime and
          engineering resources — all from one place.

        </p>

      </div>


      {/* Stats Grid */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          sm:gap-6
        "
      >

        {stats.map((stat) => {

          const Icon = stat.icon;


          return (

            <div
              key={stat.label}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-5
                sm:p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-xl
              "
            >

              {/* Icon */}

              <div
                className="
                  w-12
                  h-12
                  mx-auto
                  rounded-xl
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  group-hover:bg-cyan-500/10
                  transition
                "
              >

                <Icon
                  size={24}
                  className="
                    text-cyan-400
                  "
                />

              </div>


              {/* Value */}

              <h3
                className="
                  mt-4
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >

                {stat.value}

              </h3>


              {/* Label */}

              <p
                className="
                  mt-1
                  text-sm
                  sm:text-base
                  font-semibold
                  text-gray-300
                "
              >

                {stat.label}

              </p>


              {/* Description */}

              <p
                className="
                  mt-1
                  text-xs
                  sm:text-sm
                  text-gray-500
                "
              >

                {stat.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>

  );

};


export default StatsSection;
