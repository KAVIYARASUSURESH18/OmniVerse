import {
  ArrowRight,
  Sparkles,
} from "lucide-react";


const PromptCard = ({
  icon = "✨",
  title,
  prompt,
  onClick,
}) => {

  const handleClick = () => {

    if (onClick) {
      onClick(prompt);
    }

  };


  return (

    <button
      type="button"
      onClick={handleClick}
      className="
        group
        w-full
        text-left
        p-5
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        hover:border-purple-500/40
        hover:bg-slate-800
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* Top Section */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >

        {/* Icon */}

        <div
          className="
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-xl
            bg-purple-500/10
            border
            border-purple-500/20
            text-xl
            shrink-0
          "
        >

          {icon}

        </div>


        {/* Arrow */}

        <ArrowRight
          size={18}
          className="
            text-gray-600
            group-hover:text-purple-400
            group-hover:translate-x-1
            transition
          "
        />

      </div>



      {/* Title */}

      <h3
        className="
          mt-4
          font-bold
          text-white
          group-hover:text-purple-400
          transition
        "
      >

        {title}

      </h3>



      {/* Prompt */}

      <p
        className="
          mt-2
          text-sm
          text-gray-500
          leading-relaxed
          line-clamp-2
        "
      >

        {prompt}

      </p>



      {/* Bottom Label */}

      <div
        className="
          flex
          items-center
          gap-2
          mt-4
          text-xs
          text-gray-600
          group-hover:text-purple-400
          transition
        "
      >

        <Sparkles size={13} />

        Try this prompt

      </div>

    </button>

  );

};


export default PromptCard;
