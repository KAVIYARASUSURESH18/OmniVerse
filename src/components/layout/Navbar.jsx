import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Search, User } from "lucide-react";

const Navbar = ({ toggleSidebar, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="OmniVerse Logo"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              OmniVerse
            </h1>

            <p className="text-xs text-gray-400">
              Learn • Watch • Play
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">

          <NavLink
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Movies
          </NavLink>

          <NavLink
            to="/anime"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Anime
          </NavLink>

          <NavLink
            to="/games"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Games
          </NavLink>

          <NavLink
            to="/engineering"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Engineering
          </NavLink>

          <NavLink
            to="/ai"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Omni AI
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <Link
            to="/search"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
          >
            <Search size={20} className="text-white" />
          </Link>

          {/* Dark Mode */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
          >
            <Moon size={20} className="text-white" />
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-white"
          >
            <User size={18} />
            Login
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-800"
          >
            <Menu size={24} className="text-white" />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
