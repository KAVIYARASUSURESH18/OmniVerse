import { useState } from "react";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  Sparkles,
  Bot,
  LoaderCircle,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import SocialLogin
  from "./SocialLogin";

const RegisterForm = () => {

  const navigate = useNavigate();


  // Form State

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] =
    useState(false);

  const [loading, setLoading] =
    useState(false);


  // Password Strength

  const getPasswordStrength = () => {

    if (!password) {
      return {
        label: "",
        width: "0%",
      };
    }


    let score = 0;


    if (password.length >= 8) {
      score++;
    }

    if (/[A-Z]/.test(password)) {
      score++;
    }

    if (/[0-9]/.test(password)) {
      score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    }


    if (score <= 1) {

      return {
        label: "Weak",
        width: "25%",
      };

    }


    if (score === 2) {

      return {
        label: "Medium",
        width: "50%",
      };

    }


    if (score === 3) {

      return {
        label: "Good",
        width: "75%",
      };

    }


    return {
      label: "Strong",
      width: "100%",
    };

  };


  const passwordStrength =
    getPasswordStrength();


  // Password Match

  const passwordsMatch =
    confirmPassword &&
    password === confirmPassword;


  // Register Handler

  const handleSubmit = (event) => {

    event.preventDefault();


    if (!name || !email || !password) {

      alert(
        "Please fill in all required fields."
      );

      return;

    }


    if (password !== confirmPassword) {

      alert(
        "Passwords do not match."
      );

      return;

    }


    if (!agreeTerms) {

      alert(
        "Please accept the Terms and Conditions."
      );

      return;

    }


    setLoading(true);


    /*
      Temporary Registration

      Later connect Firebase Auth
      or your backend authentication.
    */

    setTimeout(() => {

      setLoading(false);

      navigate("/login");

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
          -right-40
          w-96
          h-96
          rounded-full
          bg-purple-600/20
          blur-3xl
          animate-pulse
        "
      />


      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-blue-600/20
          blur-3xl
          animate-pulse
        "
      />


      {/* Floating Orb */}

      <div
        className="
          absolute
          top-24
          right-[15%]
          w-4
          h-4
          rounded-full
          bg-purple-400
          shadow-lg
          shadow-purple-500/50
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

            Join{" "}

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

            Create your account and explore
            your digital universe.

          </p>

        </div>



        {/* Register Card */}

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


          {/* Heading */}

          <div
            className="
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

              Create Account

            </h2>


            <p
              className="
                mt-1
                text-sm
                text-gray-500
              "
            >

              Start your OmniVerse experience today.

            </p>

          </div>



          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="
              space-y-5
            "
          >


            {/* Full Name */}

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

                Full Name

              </label>


              <div
                className="
                  relative
                  group
                "
              >

                <User
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
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  placeholder="Enter your full name"
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
                  placeholder="Create a password"
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
                  "
                >

                  {showPassword ? (

                    <EyeOff size={19} />

                  ) : (

                    <Eye size={19} />

                  )}

                </button>

              </div>



              {/* Password Strength */}

              {password && (

                <div className="mt-3">

                  <div
                    className="
                      h-1.5
                      w-full
                      rounded-full
                      bg-slate-800
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-red-500
                        via-yellow-500
                        to-green-500
                        transition-all
                        duration-500
                      "
                      style={{
                        width:
                          passwordStrength.width,
                      }}
                    />

                  </div>


                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                    "
                  >

                    Password strength:{" "}

                    <span className="text-gray-300">

                      {passwordStrength.label}

                    </span>

                  </p>

                </div>

              )}

            </div>



            {/* Confirm Password */}

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

                Confirm Password

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
                  "
                />


                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={
                    confirmPassword
                  }
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value
                    )
                  }
                  placeholder="Confirm your password"
                  className="
                    w-full
                    h-12
                    pl-12
                    pr-20
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-blue-500
                    transition
                  "
                  required
                />


                {/* Match Status */}

                {confirmPassword && (

                  <div
                    className="
                      absolute
                      right-12
                      top-1/2
                      -translate-y-1/2
                    "
                  >

                    {passwordsMatch ? (

                      <Check
                        size={18}
                        className="
                          text-green-400
                        "
                      />

                    ) : (

                      <X
                        size={18}
                        className="
                          text-red-400
                        "
                      />

                    )}

                  </div>

                )}


                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-white
                  "
                >

                  {showConfirmPassword ? (

                    <EyeOff size={18} />

                  ) : (

                    <Eye size={18} />

                  )}

                </button>

              </div>

            </div>



            {/* Terms */}

            <label
              className="
                flex
                items-start
                gap-3
                cursor-pointer
              "
            >

              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(event) =>
                  setAgreeTerms(
                    event.target.checked
                  )
                }
                className="
                  mt-1
                  w-4
                  h-4
                  accent-purple-600
                "
              />


              <span
                className="
                  text-xs
                  leading-relaxed
                  text-gray-500
                "
              >

                I agree to the{" "}

                <a
                  href="#terms"
                  className="
                    text-purple-400
                    hover:text-purple-300
                  "
                >

                  Terms and Conditions

                </a>{" "}

                and{" "}

                <a
                  href="#privacy"
                  className="
                    text-purple-400
                    hover:text-purple-300
                  "
                >

                  Privacy Policy

                </a>

              </span>

            </label>



            {/* Register Button */}

            <button
              type="submit"
              disabled={
                loading ||
                !passwordsMatch ||
                !agreeTerms
              }
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
                disabled:opacity-40
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

                  Creating Account...

                </>

              ) : (

                <>

                  <UserPlus size={19} />

                  Create Account

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



          {/* Login Link */}

          <div
            className="
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

              Already have an account?{" "}

              <Link
                to="/login"
                className="
                  font-semibold
                  text-blue-400
                  hover:text-blue-300
                  transition
                "
              >

                Sign In

              </Link>

            </p>

          </div>

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


export default RegisterForm;
