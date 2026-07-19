import { 
  Github,
  Instagram,
  Youtube,
  Mail
} from "lucide-react";

import { Link } from "react-router-dom";


const Footer = () => {


  const quickLinks = [

    {
      name:"Home",
      path:"/"
    },

    {
      name:"Movies",
      path:"/movies"
    },

    {
      name:"Anime",
      path:"/anime"
    },

    {
      name:"Games",
      path:"/games"
    },

    {
      name:"Engineering",
      path:"/engineering"
    },

    {
      name:"Omni AI",
      path:"/ai"
    }

  ];



  const supportLinks = [

    {
      name:"About",
      path:"/about"
    },

    {
      name:"Privacy Policy",
      path:"/privacy"
    },

    {
      name:"Terms",
      path:"/terms"
    }

  ];



  return (

    <footer
    className="
    bg-slate-950
    border-t
    border-slate-800
    mt-10
    "
    >


      <div
      className="
      max-w-7xl
      mx-auto
      px-6
      py-12
      grid
      grid-cols-1
      md:grid-cols-4
      gap-10
      "
      >



        {/* Brand */}


        <div>


          <div
          className="
          flex
          items-center
          gap-3
          "
          >


            <img

            src="/logo.png"

            alt="OmniVerse"

            className="
            w-12
            h-12
            rounded-full
            "

            />


            <h2
            className="
            text-2xl
            font-bold
            text-white
            "
            >

              OmniVerse

            </h2>


          </div>



          <p
          className="
          text-gray-400
          mt-4
          text-sm
          "
          >

            Learn • Watch • Play • Explore

            <br/>

            Everything in one platform.

          </p>



          <div
          className="
          flex
          gap-4
          mt-5
          "
          >


            <a
            href="#"
            className="
            text-gray-400
            hover:text-white
            "
            >

              <Github size={22}/>

            </a>



            <a
            href="#"
            className="
            text-gray-400
            hover:text-pink-500
            "
            >

              <Instagram size={22}/>

            </a>



            <a
            href="#"
            className="
            text-gray-400
            hover:text-red-500
            "
            >

              <Youtube size={22}/>

            </a>



            <a
            href="#"
            className="
            text-gray-400
            hover:text-cyan-400
            "
            >

              <Mail size={22}/>

            </a>



          </div>


        </div>




        {/* Quick Links */}


        <div>


          <h3
          className="
          text-white
          font-semibold
          mb-4
          "
          >

            Explore

          </h3>



          <ul
          className="
          space-y-3
          "
          >

          {

          quickLinks.map((item)=>(


            <li key={item.name}>


              <Link

              to={item.path}

              className="
              text-gray-400
              hover:text-cyan-400
              transition
              "

              >

                {item.name}

              </Link>


            </li>


          ))

          }


          </ul>


        </div>





        {/* Support */}


        <div>


          <h3
          className="
          text-white
          font-semibold
          mb-4
          "
          >

            Support

          </h3>



          <ul
          className="
          space-y-3
          "
          >

          {

          supportLinks.map((item)=>(


            <li key={item.name}>


              <Link

              to={item.path}

              className="
              text-gray-400
              hover:text-cyan-400
              "

              >

                {item.name}

              </Link>


            </li>


          ))

          }


          </ul>


        </div>





        {/* Omni AI */}


        <div>


          <h3
          className="
          text-white
          font-semibold
          mb-4
          "
          >

            🤖 Omni AI

          </h3>


          <p
          className="
          text-gray-400
          text-sm
          "
          >

            Your smart AI companion for:

          </p>


          <ul
          className="
          mt-3
          text-gray-400
          text-sm
          space-y-2
          "
          >

            <li>💻 Coding Help</li>

            <li>📚 Study Support</li>

            <li>🎬 Recommendations</li>

            <li>🧠 Smart Assistant</li>


          </ul>


        </div>



      </div>





      {/* Bottom Copyright */}


      <div
      className="
      border-t
      border-slate-800
      py-5
      text-center
      "
      >


        <p
        className="
        text-gray-500
        text-sm
        "
        >

          © {new Date().getFullYear()} OmniVerse.
          All rights reserved.

        </p>


      </div>



    </footer>


  );

};



export default Footer;
