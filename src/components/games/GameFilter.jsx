import {
  Search,
  Filter,
  X,
} from "lucide-react";


const GameFilter = ({
  search,
  setSearch,

  genre,
  setGenre,

  year,
  setYear,

  rating,
  setRating,

  platform,
  setPlatform,

  sortBy,
  setSortBy,

  onClear,
}) => {

  return (

    <section
      className="
        w-full
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
        mb-8
      "
    >

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-5
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <Filter
            size={20}
            className="text-green-400"
          />

          <h2
            className="
              text-lg
              font-bold
              text-white
            "
          >

            Filter Games

          </h2>

        </div>


        {/* Clear Button */}

        <button
          onClick={onClear}
          className="
            flex
            items-center
            gap-1
            text-sm
            text-gray-400
            hover:text-red-400
            transition
          "
        >

          <X size={16} />

          Clear

        </button>

      </div>



      {/* Filter Grid */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-6
          gap-4
        "
      >


        {/* Search */}

        <div
          className="
            relative
            xl:col-span-2
          "
        >

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-500
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search games..."
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              pl-10
              pr-4
              py-3
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-green-500
              transition
            "
          />

        </div>



        {/* Genre */}

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-gray-300
            outline-none
            focus:border-green-500
          "
        >

          <option value="">
            All Genres
          </option>

          <option value="action">
            Action
          </option>

          <option value="adventure">
            Adventure
          </option>

          <option value="rpg">
            RPG
          </option>

          <option value="strategy">
            Strategy
          </option>

          <option value="shooter">
            Shooter
          </option>

          <option value="sports">
            Sports
          </option>

          <option value="racing">
            Racing
          </option>

          <option value="simulation">
            Simulation
          </option>

          <option value="indie">
            Indie
          </option>

        </select>



        {/* Release Year */}

        <select
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-gray-300
            outline-none
            focus:border-green-500
          "
        >

          <option value="">
            All Years
          </option>

          <option value="2026">
            2026
          </option>

          <option value="2025">
            2025
          </option>

          <option value="2024">
            2024
          </option>

          <option value="2023">
            2023
          </option>

          <option value="2022">
            2022
          </option>

          <option value="2021">
            2021
          </option>

          <option value="2020">
            2020
          </option>

        </select>



        {/* Rating */}

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-gray-300
            outline-none
            focus:border-green-500
          "
        >

          <option value="">
            Any Rating
          </option>

          <option value="4">
            4+ ⭐
          </option>

          <option value="3">
            3+ ⭐
          </option>

          <option value="2">
            2+ ⭐
          </option>

          <option value="1">
            1+ ⭐
          </option>

        </select>



        {/* Platform */}

        <select
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value)
          }
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-gray-300
            outline-none
            focus:border-green-500
          "
        >

          <option value="">
            All Platforms
          </option>

          <option value="4">
            PC
          </option>

          <option value="18">
            PlayStation 4
          </option>

          <option value="187">
            PlayStation 5
          </option>

          <option value="1">
            Xbox One
          </option>

          <option value="186">
            Xbox Series S/X
          </option>

          <option value="7">
            Nintendo Switch
          </option>

        </select>

      </div>



      {/* Sort */}

      <div
        className="
          mt-4
          flex
          flex-col
          sm:flex-row
          sm:items-center
          gap-3
        "
      >

        <label
          className="
            text-sm
            text-gray-400
          "
        >

          Sort By:

        </label>


        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-2
            text-gray-300
            outline-none
            focus:border-green-500
          "
        >

          <option value="rating">
            Highest Rated
          </option>

          <option value="popularity">
            Most Popular
          </option>

          <option value="released">
            Newest Releases
          </option>

          <option value="name">
            Name A-Z
          </option>

        </select>

      </div>

    </section>

  );

};


export default GameFilter;
