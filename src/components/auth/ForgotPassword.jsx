import { useState } from "react";

import {
  Mail,
  ArrowLeft,
  Send,
  LoaderCircle,
  CheckCircle,
  Bot,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";


const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [sent, setSent] =
    useState(false);


  // Handle Reset Request

  const handleSubmit = (event) => {

    event.preventDefault();


    if (!email) {

      return;

    }


    setLoading(true);


    /*
      Temporary Reset Flow

      Later connect Firebase
      or backend email service.
    */

    setTimeout(() => {

      setLoading(false);

      setSent(true);

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


      {/* Background Glow */}

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


      {/* Floating Orb */}

      <div
        className="
          absolute
          top-24
          right-[20%]
          w-4
          h-4
          rounded-full
          bg-blue-400
          shadow-lg
          shadow-blue-500/50
          animate-bounce
        "
      />



      {/* Main Container */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
        "
      >


        {/* Branding */}

        <div
          className="
            text-center
            mb-8
          "
        >

          {/* Logo */}

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

            OmniVerse

          </h1>


          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >

            Your universe. Your account.

          </p>

        </div>



        {/* Card */}

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


          {!sent ? (

            /* =========================
               RESET PASSWORD FORM
            ========================== */

            <>

              {/* Heading */}

              <div
                className="
                  mb-7
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    mb-4
                  "
                >

                  <Mail
                    size={22}
                    className="
                      text-purple-400
                    "
                  />

                </div>


                <h2
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >

                  Forgot Password?

                </h2>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-500
                  "
                >

                  Enter your email address and
                  we'll send you a link to reset
                  your password.

                </p>

              </div>



              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="
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
                        group-focus-within:text-purple-400
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
                        focus:border-purple-500
                        focus:ring-2
                        focus:ring-purple-500/10
                        transition
                      "
                      required
                    />

                  </div>

                </div>



                {/* Submit Button */}

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

                      Sending Link...

                    </>

                  ) : (

                    <>

                      <Send size={18} />

                      Send Reset Link

                    </>

                  )}

                </button>

              </form>

            </>

          ) : (

            /* =========================
               SUCCESS MESSAGE
            ========================== */

            <div
              className="
                text-center
                py-5
              "
            >

              {/* Success Icon */}

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  animate-pulse
                "
              >

                <CheckCircle
                  size={32}
                  className="
                    text-green-400
                  "
                />

              </div>



              <h2
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-white
                "
              >

                Check Your Email

              </h2>


              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-gray-500
                "
              >

                We've sent password reset
                instructions to:

              </p>


              <p
                className="
                  mt-2
                  font-medium
                  text-purple-400
                  break-all
                "
              >

                {email}

              </p>


              <p
                className="
                  mt-4
                  text-xs
                  text-gray-600
                "
              >

                Didn't receive the email?
                Check your spam folder.

              </p>



              {/* Back to Login */}

              <Link
                to="/login"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  mt-7
                  w-full
                  h-12
                  rounded-xl
                  bg-slate-800
                  hover:bg-slate-700
                  text-gray-200
                  font-semibold
                  transition
                "
              >

                <ArrowLeft size={18} />

                Back to Login

              </Link>

            </div>

          )}



          {/* Back to Login */}

          {!sent && (

            <div
              className="
                mt-7
                pt-6
                border-t
                border-slate-800
                text-center
              "
            >

              <Link
                to="/login"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-500
                  hover:text-white
                  transition
                "
              >

                <ArrowLeft size={16} />

                Back to Login

              </Link>

            </div>

          )}

        </div>



        {/* Footer */}

        <p
          className="
            mt-6
            text-center
            text-xs
            text-gray-600
          "
        >

          🌐 Movies • Anime • Games • Engineering • AI

        </p>

      </div>

    </div>

  );

};


export default ForgotPassword;
