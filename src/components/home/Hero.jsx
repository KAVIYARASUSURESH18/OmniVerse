import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Play
} from "lucide-react";


const Hero = () => {

  return (

    <section
      className="
      relative
      min-h-[80vh]
      flex
      items-center
      overflow-hidden
      bg-slate-950
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        -left-40
        w-96
        h-96
        bg-cyan-500/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -bottom-40
        -right-40
        w-96
        h-96
        bg-purple-600/20
        rounded-full
        blur-3xl
        "
      />


      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-20
        w-full
        "
      >

        <div
          className="
          max-w-3xl
          "
        >

          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-slate-900
            border
            border-slate-700
            text-cyan-400
            text-sm
            mb-6
            "
          >

            <span>🌌</span>

            Welcome to OmniVerse

          </div>


          {/* Heading */}

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-extrabold
            text-white
            leading-tight
            "
          >

            One Universe.

            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Endless Possibilities.
            </span>

          </h1>


          {/* Description */}

          <p
            className="
            mt-6
            text-gray-400
            text-base
            sm:text-lg
            max-w-2xl
            leading-relaxed
            "
          >

            Explore movies, anime, games and engineering
            resources — all in one powerful platform,
            enhanced with Omni AI.

          </p>


          {/* Buttons */}

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-8
            "
          >

            {/* Explore */}

            <Link
              to="/movies"
              className="
              flex
              items-center
              gap-2
              bg-cyan-600
              hover:bg-cyan-500
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
              "
            >

              <Play size={20} />

              Explore Now

              <ArrowRight size={20} />

            </Link>


            {/* Omni AI */}

            <Link
              to="/ai"
              className="
              flex
              items-center
              gap-2
              bg-slate-800
              hover:bg-slate-700
              border
              border-slate-700
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
              "
            >

              <Bot size={20} />

              Try Omni AI

            </Link>

          </div>


          {/* Quick Stats */}

          <div
            className="
            flex
            flex-wrap
            gap-8
            mt-12
            "
          >

            <div>

              <p
                className="
                text-2xl
                font-bold
                text-white
                "
              >
                4+
              </p>

              <p
                className="
                text-sm
                text-gray-500
                "
              >
                Categories
              </p>

            </div>


            <div>

              <p
                className="
                text-2xl
                font-bold
                text-white
                "
              >
                AI
              </p>

              <p
                className="
                text-sm
                text-gray-500
                "
              >
                Powered
              </p>

            </div>


            <div>

              <p
                className="
                text-2xl
                font-bold
                text-white
                "
              >
                ∞
              </p>

              <p
                className="
                text-sm
                text-gray-500
                "
              >
                Possibilities
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};


export default Hero;
