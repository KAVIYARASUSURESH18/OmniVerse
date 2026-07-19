import {
  SearchX,
  ArrowLeft
} from "lucide-react";


const EmptyState = ({
  title = "No Data Found",
  message = "Nothing to display here.",
  buttonText,
  onButtonClick
}) => {


  return (

    <div

    className="
    min-h-[300px]
    flex
    items-center
    justify-center
    "

    >


      <div

      className="
      text-center
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-8
      max-w-md
      "

      >



        {/* Icon */}


        <div

        className="
        flex
        justify-center
        mb-5
        "

        >

          <SearchX

          size={55}

          className="
          text-cyan-400
          "

          />

        </div>





        {/* Title */}


        <h2

        className="
        text-xl
        font-bold
        text-white
        mb-2
        "

        >

          {title}

        </h2>





        {/* Message */}


        <p

        className="
        text-gray-400
        text-sm
        mb-6
        "

        >

          {message}

        </p>





        {/* Button */}


        {

        buttonText &&

        (

          <button

          onClick={onButtonClick}

          className="
          flex
          items-center
          gap-2
          mx-auto
          bg-cyan-600
          hover:bg-cyan-500
          text-white
          px-5
          py-2
          rounded-xl
          transition
          "

          >


            <ArrowLeft size={18}/>


            {buttonText}


          </button>

        )

        }



      </div>



    </div>


  );


};


export default EmptyState;
