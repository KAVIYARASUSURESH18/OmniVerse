import { useState } from "react";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Sparkles,
  Bot,
  LoaderCircle,
  ArrowRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";


const LoginForm = () => {

  const navigate = useNavigate();
  import SocialLogin
  from "./SocialLogin";


  // Form State

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [loading, setLoading] =
    useState(false);


  // Login Handler

  const handleSubmit = (event) => {

    event.preventDefault();


    if (!email || !password) {

      alert(
        "Please enter your email and password."
      );

      return;

    }


    setLoading(true);


    /*
      Temporary Login

      Later connect Firebase
      or your backend authentication.
    */

    setTimeout(() => {

      setLoading(false);

      navigate("/");

    }, 1500);

  };


  return (

    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        bg-slate-950
        px-4
        py-12
      "
    >


      {/* Background Glow 1 */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-blue-600/20
          blur-3xl
          animate-pulse
        "
      />


      {/* Background Glow 2 */}

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-purple-600/20
          blur-3xl
          animate-pulse
        "
      />


      {/* Floating Orb 1 */}

      <div
        className="
          absolute
          top-20
          left-[15%]
          w-4
          h-4
          rounded-full
          bg-blue-400
          shadow-lg
          shadow-blue-500/50
          animate-bounce
        "
      />


      {/* Floating Orb 2 */}

      <div
        className="
          absolute
          bottom-24
          right-[20%]
          w-3
          h-3
          rounded-full
          bg-purple-400
          shadow-lg
          shadow-purple-500/50
          animate-ping
        "
      />


      {/* Main Container */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          animate-[fadeIn_0.7s_ease-out]
        "
      >


        {/* Branding */}

        <div
          className="
            text-center
            mb-8
          "
        >

          {/* AI Logo */}

          <div
            className="
              relative
              inline-flex
              items-center
              justify-center
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              via-purple-600
              to-pink-600
              shadow-2xl
              shadow-purple-500/20
              animate-[float_3s_ease-in-out_infinite]
            "
          >

            <Bot
              size={38}
              className="text-white"
            />


            <div
              className="
                absolute
                -top-2
                -right-2
                w-7
                h-7
                flex
                items-center
                justify-center
                rounded-full
                bg-yellow-400
                text-black
                shadow-lg
              "
            >

              <Sparkles size={14} />

            </div>

          </div>



          {/* Title */}

          <h1
            className="
              mt-5
              text-3xl
              font-extrabold
              text-white
            "
          >

            Welcome to{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >

              OmniVerse

            </span>

          </h1>


          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >

            Your universe of knowledge and entertainment.

          </p>

        </div>



        {/* Login Card */}

        <div
          className="
            relative
            p-6
            sm:p-8
            rounded-3xl
            bg-slate-900/80
            backdrop-blur-xl
            border
            border-slate-800
            shadow-2xl
          "
        >


          {/* Card Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-br
              from-blue-500/5
              via-transparent
              to-purple-500/5
              pointer-events-none
            "
          />


          {/* Heading */}

          <div
            className="
              relative
              mb-7
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >

              Sign in

            </h2>


            <p
              className="
                mt-1
                text-sm
                text-gray-500
              "
            >

              Continue your OmniVerse journey.

            </p>

          </div>



          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="
              relative
              space-y-5
            "
          >


            {/* Email */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-300
                "
              >

                Email Address

              </label>


              <div
                className="
                  relative
                  group
                "
              >

                <Mail
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    group-focus-within:text-blue-400
                    transition
                  "
                />


                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="Enter your email"
                  className="
                    w-full
                    h-12
                    pl-12
                    pr-4
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/10
                    transition
                  "
                  required
                />

              </div>

            </div>



            {/* Password */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-300
                "
              >

                Password

              </label>


              <div
                className="
                  relative
                  group
                "
              >

                <Lock
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    group-focus-within:text-purple-400
                    transition
                  "
                />


                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder="Enter your password"
                  className="
                    w-full
                    h-12
                    pl-12
                    pr-12
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/10
                    transition
                  "
                  required
                />


                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-white
                    transition
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (

                    <EyeOff size={19} />

                  ) : (

                    <Eye size={19} />

                  )}

                </button>

              </div>

            </div>



            {/* Remember + Forgot */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <label
                className="
                  flex
                  items-center
                  gap-2
                  cursor-pointer
                "
              >

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(
                      event.target.checked
                    )
                  }
                  className="
                    w-4
                    h-4
                    accent-purple-600
                  "
                />


                <span
                  className="
                    text-xs
                    text-gray-500
                  "
                >

                  Remember me

                </span>

              </label>


              <Link
                to="/forgot-password"
                className="
                  text-xs
                  font-medium
                  text-purple-400
                  hover:text-purple-300
                  transition
                "
              >

                Forgot Password?

              </Link>

            </div>



            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                w-full
                h-12
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                hover:from-blue-500
                hover:to-purple-500
                text-white
                font-semibold
                shadow-lg
                shadow-purple-500/10
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              "
            >

              {loading ? (

                <>

                  <LoaderCircle
                    size={19}
                    className="
                      animate-spin
                    "
                  />

                  Signing in...

                </>

              ) : (

                <>

                  <LogIn size={19} />

                  Sign In

                  <ArrowRight
                    size={17}
                    className="
                      group-hover:translate-x-1
                      transition
                    "
                  />

                </>

              )}

            </button>

          </form>



          {/* Register */}

          <div
            className="
              relative
              mt-7
              pt-6
              border-t
              border-slate-800
              text-center
            "
          >

            <p
              className="
                text-sm
                text-gray-500
              "
            >

              Don't have an account?{" "}

              <Link
                to="/register"
                className="
                  font-semibold
                  text-blue-400
                  hover:text-blue-300
                  transition
                "
              >

                Create Account

              </Link>

            </p>

          </div>

        </div>



        {/* Footer Text */}

        <p
          className="
            mt-6
            text-center
            text-xs
            text-gray-600
          "
        >
           <Link to="/forgot-password">
           Forgot Password?
           </Link>

          🌐 Movies • Anime • Games • Engineering • AI

        </p>

      </div>

    </div>

  );

};


export default LoginForm;
