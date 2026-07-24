import {
  Bot,
  Sparkles,
  MessageCircle,
  Zap,
} from "lucide-react";

import ChatBox from "./ChatBox";
import PromptCard from "./PromptCard";


const OmniAI = () => {

  // Suggested prompts

  const prompts = [

    {
      id: 1,
      icon: "📚",
      title: "Study Assistant",
      prompt:
        "Explain Data Structures in simple terms.",
    },

    {
      id: 2,
      icon: "💻",
      title: "Code Helper",
      prompt:
        "Help me debug my Java program.",
    },

    {
      id: 3,
      icon: "📝",
      title: "Exam Preparation",
      prompt:
        "Give me important questions for my exam.",
    },

    {
      id: 4,
      icon: "💡",
      title: "Ask Anything",
      prompt:
        "Explain a difficult topic to me.",
    },

  ];


  return (

    <section
      className="
        min-h-screen
        bg-slate-950
        text-white
        py-12
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
        "
      >


        {/* AI Header */}

        <div
          className="
            text-center
            mb-10
          "
        >

          {/* AI Icon */}

          <div
            className="
              relative
              inline-flex
              items-center
              justify-center
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              to-purple-600
              shadow-2xl
              mb-5
            "
          >

            <Bot size={40} />

            <div
              className="
                absolute
                -top-2
                -right-2
                w-7
                h-7
                flex
                items-center
                justify-center
                rounded-full
                bg-yellow-400
                text-black
              "
            >

              <Sparkles size={15} />

            </div>

          </div>



          {/* Title */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              font-extrabold
              bg-gradient-to-r
              from-blue-400
              via-purple-400
              to-pink-400
              bg-clip-text
              text-transparent
            "
          >

            Omni AI

          </h1>



          {/* Subtitle */}

          <p
            className="
              max-w-2xl
              mx-auto
              mt-4
              text-gray-400
              leading-relaxed
            "
          >

            Your intelligent AI assistant for learning,
            coding, entertainment and everyday questions.

          </p>



          {/* Online Status */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              mt-5
              px-4
              py-2
              rounded-full
              bg-slate-900
              border
              border-slate-800
              text-sm
              text-gray-400
            "
          >

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
                animate-pulse
              "
            />

            Omni AI is ready

          </div>

        </div>



        {/* Feature Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            mb-8
          "
        >


          {/* Learning */}

          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
            "
          >

            <div
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                text-blue-400
              "
            >

              <MessageCircle size={22} />

            </div>

            <div>

              <h3
                className="
                  font-semibold
                  text-white
                "
              >

                Smart Answers

              </h3>

              <p
                className="
                  text-xs
                  text-gray-500
                  mt-1
                "
              >

                Get clear explanations

              </p>

            </div>

          </div>



          {/* Coding */}

          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
            "
          >

            <div
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                bg-purple-500/10
                text-purple-400
              "
            >

              <Bot size={22} />

            </div>

            <div>

              <h3
                className="
                  font-semibold
                  text-white
                "
              >

                Coding Help

              </h3>

              <p
                className="
                  text-xs
                  text-gray-500
                  mt-1
                "
              >

                Learn and debug code

              </p>

            </div>

          </div>



          {/* Fast */}

          <div
            className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
            "
          >

            <div
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                bg-yellow-500/10
                text-yellow-400
              "
            >

              <Zap size={22} />

            </div>

            <div>

              <h3
                className="
                  font-semibold
                  text-white
                "
              >

                Quick Response

              </h3>

              <p
                className="
                  text-xs
                  text-gray-500
                  mt-1
                "
              >

                Get help instantly

              </p>

            </div>

          </div>

        </div>



        {/* Suggested Prompts */}

        <div className="mb-8">

          <div
            className="
              flex
              items-center
              gap-2
              mb-4
            "
          >

            <Sparkles
              size={18}
              className="text-purple-400"
            />

            <h2
              className="
                text-lg
                font-bold
                text-white
              "
            >

              Try asking Omni AI

            </h2>

          </div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >

            {prompts.map((prompt) => (

              <PromptCard
                key={prompt.id}
                {...prompt}
              />

            ))}

          </div>

        </div>



        {/* Chat Box */}

        <ChatBox />

      </div>

    </section>

  );

};


export default OmniAI;
