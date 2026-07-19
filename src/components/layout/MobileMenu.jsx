import { 
  Home,
  Search,
  Bot,
  User,
  Film
} from "lucide-react";

import { NavLink } from "react-router-dom";


const MobileMenu = () => {


  const menuItems = [

    {
      name:"Home",
      path:"/",
      icon:Home
    },

    {
      name:"Movies",
      path:"/movies",
      icon:Film
    },

    {
      name:"Search",
      path:"/search",
      icon:Search
    },

    {
      name:"AI",
      path:"/ai",
      icon:Bot
    },

    {
      name:"Profile",
      path:"/profile",
      icon:User
    }

  ];



  return (

    <div
    className="
    fixed
    bottom-0
    left-0
    right-0
    z-50
    lg:hidden
    "
    >


      <nav

      className="
      mx-4
      mb-4
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      shadow-xl
      flex
      justify-around
      items-center
      p-3
      "

      >


      {
        menuItems.map((item)=>{


          const Icon = item.icon;


          return (

            <NavLink

            key={item.name}

            to={item.path}


            className={({isActive}) => `

            flex
            flex-col
            items-center
            gap-1
            text-xs
            transition


            ${
              isActive

              ?

              "text-cyan-400"

              :

              "text-gray-400"

            }


            `}


            >


              <Icon

              size={22}

              />


              <span>

                {item.name}

              </span>


            </NavLink>

          )


        })

      }


      </nav>


    </div>

  );

};


export default MobileMenu;
