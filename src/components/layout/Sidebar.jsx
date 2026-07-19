import { 
  X,
  Home,
  Film,
  Tv,
  Gamepad2,
  BookOpen,
  Bot,
  Search,
  User,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";


const Sidebar = ({ isOpen, closeSidebar }) => {


  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: Home
    },

    {
      name: "Movies",
      path: "/movies",
      icon: Film
    },

    {
      name: "Anime",
      path: "/anime",
      icon: Tv
    },

    {
      name: "Games",
      path: "/games",
      icon: Gamepad2
    },

    {
      name: "Engineering",
      path: "/engineering",
      icon: BookOpen
    },

    {
      name: "Omni AI",
      path: "/ai",
      icon: Bot
    },

    {
      name: "Search",
      path: "/search",
      icon: Search
    },

    {
      name: "Profile",
      path: "/profile",
      icon: User
    },

    {
      name: "Settings",
      path: "/settings",
      icon: Settings
    }

  ];


  return (

    <>

      {/* Overlay */}

      {isOpen && (

        <div
          onClick={closeSidebar}
          className="
          fixed inset-0
          bg-black/60
          z-40
          lg:hidden
          "
        />

      )}



      {/* Sidebar */}

      <aside

        className={`
        
        fixed
        top-0
        left-0
        h-full
        w-72
        bg-slate-900
        border-r
        border-slate-800
        z-50
        transform
        transition-transform
        duration-300
        
        ${

          isOpen
          ? "translate-x-0"
          : "-translate-x-full"

        }

        lg:hidden
        
        `}

      >


        {/* Header */}

        <div
        className="
        flex
        items-center
        justify-between
        p-5
        border-b
        border-slate-800
        "
        >


          <h2
          className="
          text-xl
          font-bold
          text-white
          "
          >
            🌌 OmniVerse
          </h2>


          <button

          onClick={closeSidebar}

          className="
          p-2
          rounded-lg
          hover:bg-slate-800
          "

          >

            <X 
            size={22}
            className="text-white"
            />

          </button>


        </div>



        {/* Menu */}


        <nav
        className="
        p-4
        space-y-2
        "
        >


        {
          menuItems.map((item)=>{


            const Icon = item.icon;


            return (

              <NavLink

              key={item.name}

              to={item.path}

              onClick={closeSidebar}


              className={({isActive}) => `

              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-xl
              transition


              ${
                isActive

                ?

                "bg-cyan-600 text-white"

                :

                "text-gray-300 hover:bg-slate-800"

              }


              `}


              >


                <Icon size={22}/>


                <span
                className="
                font-medium
                "
                >

                  {item.name}

                </span>


              </NavLink>


            )


          })
        }


        </nav>



        {/* Bottom */}

        <div
        className="
        absolute
        bottom-5
        left-5
        right-5
        "
        >


          <div
          className="
          bg-slate-800
          rounded-xl
          p-4
          "
          >

            <p
            className="
            text-sm
            text-gray-300
            "
            >

              🤖 Omni AI

            </p>


            <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
            >

              Your Smart AI Companion

            </p>


          </div>


        </div>


      </aside>


    </>

  );

};


export default Sidebar;
