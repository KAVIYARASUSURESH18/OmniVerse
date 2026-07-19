import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";


const ThemeToggle = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);



  return (

    <button

    onClick={toggleTheme}

    className="
    p-2
    rounded-xl
    bg-slate-800
    hover:bg-slate-700
    transition
    "

    >


      {

      theme === "dark"

      ?

      (

        <Sun

        size={22}

        className="
        text-yellow-400
        "

        />

      )


      :

      (

        <Moon

        size={22}

        className="
        text-cyan-400
        "

        />

      )


      }



    </button>


  );


};


export default ThemeToggle;
