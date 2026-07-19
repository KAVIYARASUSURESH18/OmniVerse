import {
  AlertTriangle,
  RefreshCcw
} from "lucide-react";


const Error = ({
  message = "Something went wrong!",
  onRetry
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
      bg-slate-900
      border
      border-red-500/30
      rounded-2xl
      p-8
      text-center
      max-w-md
      shadow-xl
      "

      >



        {/* Icon */}


        <div

        className="
        flex
        justify-center
        mb-4
        "

        >

          <AlertTriangle

          size={50}

          className="
          text-red-400
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

          Oops! Something went wrong

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





        {/* Retry */}


        {

        onRetry &&

        (

          <button

          onClick={onRetry}

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


            <RefreshCcw size={18}/>

            Try Again


          </button>

        )

        }



      </div>



    </div>


  );


};


export default Error;
