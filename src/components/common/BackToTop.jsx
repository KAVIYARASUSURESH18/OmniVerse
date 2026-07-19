import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const BackToTop = () => {


  const [visible, setVisible] = useState(false);



  useEffect(() => {


    const handleScroll = () => {


      if(window.scrollY > 300){

        setVisible(true);

      }

      else{

        setVisible(false);

      }


    };



    window.addEventListener(
      "scroll",
      handleScroll
    );



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);





  const scrollTop = () => {


    window.scrollTo({

      top:0,

      behavior:"smooth"

    });


  };





  if(!visible){

    return null;

  }




  return (

    <button

    onClick={scrollTop}

    className="
    fixed
    bottom-24
    right-6
    z-50
    bg-cyan-600
    hover:bg-cyan-500
    text-white
    p-3
    rounded-full
    shadow-lg
    transition
    "

    >


      <ArrowUp

      size={22}

      />


    </button>


  );


};


export default BackToTop;
