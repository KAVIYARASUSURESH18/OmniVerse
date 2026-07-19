const Loader = ({ fullScreen = false }) => {


  return (


    <div

    className={`
    
    flex
    items-center
    justify-center

    ${
      fullScreen
      ?
      "min-h-screen"
      :
      "py-10"
    }

    `}

    >


      <div
      className="
      flex
      flex-col
      items-center
      gap-4
      "
      >



        {/* Logo Loader */}


        <div

        className="
        w-16
        h-16
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        to-purple-600
        flex
        items-center
        justify-center
        animate-spin
        "

        >


          <div

          className="
          w-10
          h-10
          rounded-full
          bg-slate-900
          "

          />


        </div>




        {/* Text */}


        <p

        className="
        text-gray-400
        text-sm
        animate-pulse
        "

        >

          Loading OmniVerse...

        </p>



      </div>



    </div>


  );


};


export default Loader;
