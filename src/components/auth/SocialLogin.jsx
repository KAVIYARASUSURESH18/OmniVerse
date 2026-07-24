import { useState } from "react";

import {
  LoaderCircle,
  Github,
} from "lucide-react";


const SocialLogin = () => {

  const [loading, setLoading] =
    useState(null);


  // Social Login Handler

  const handleSocialLogin = (provider) => {

    setLoading(provider);


    /*
      Temporary Demo Login

      Later connect:

      Google  -> Firebase Google Auth
      GitHub  -> Firebase GitHub Auth
    */

    setTimeout(() => {

      setLoading(null);

      console.log(
        `${provider} login clicked`
      );

    }, 1200);

  };


  return (

    <div
      className="
        w-full
      "
    >


      {/* Divider */}

      <div
        className="
          flex
          items-center
          gap-4
          my-6
        "
      >

        <div
          className="
            flex-1
            h-px
            bg-slate-800
          "
        />


        <span
          className="
            text-xs
            text-gray-600
            uppercase
            tracking-wider
          "
        >

          Or continue with

        </span>


        <div
          className="
            flex-1
            h-px
            bg-slate-800
          "
        />

      </div>



      {/* Social Buttons */}

      <div
        className="
          grid
          grid-cols-2
          gap-3
        "
      >


        {/* Google */}

        <button
          type="button"
          onClick={() =>
            handleSocialLogin("Google")
          }
          disabled={loading !== null}
          className="
            group
            h-12
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-950
            border
            border-slate-800
            text-gray-300
            font-medium
            text-sm
            hover:bg-slate-800
            hover:border-slate-700
            hover:text-white
            transition-all
            duration-300
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >

          {loading === "Google" ? (

            <LoaderCircle
              size={18}
              className="
                animate-spin
              "
            />

          ) : (

            <span
              className="
                w-5
                h-5
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                text-sm
                font-bold
                group-hover:scale-110
                transition
              "
            >

              <span
                className="
                  bg-gradient-to-r
                  from-blue-500
                  via-red-500
                  to-yellow-500
                  bg-clip-text
                  text-transparent
                "
              >

                G

              </span>

            </span>

          )}


          <span>

            Google

          </span>

        </button>



        {/* GitHub */}

        <button
          type="button"
          onClick={() =>
            handleSocialLogin("GitHub")
          }
          disabled={loading !== null}
          className="
            group
            h-12
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-950
            border
            border-slate-800
            text-gray-300
            font-medium
            text-sm
            hover:bg-slate-800
            hover:border-slate-700
            hover:text-white
            transition-all
            duration-300
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >

          {loading === "GitHub" ? (

            <LoaderCircle
              size={18}
              className="
                animate-spin
              "
            />

          ) : (

            <Github
              size={20}
              className="
                group-hover:scale-110
                transition
              "
            />

          )}


          <span>

            GitHub

          </span>

        </button>

      </div>

    </div>

  );

};


export default SocialLogin;
