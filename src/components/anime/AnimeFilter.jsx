import {
  Search,
  Filter,
  X,
} from "lucide-react";


const AnimeFilter = ({
  search,
  setSearch,

  genre,
  setGenre,

  year,
  setYear,

  score,
  setScore,

  type,
  setType,

  status,
  setStatus,

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
            className="text-purple-400"
          />

          <h2
            className="
              text-lg
              font-bold
              text-white
            "
          >

            Filter Anime

          </h2>

        </div>


        {/* Clear Filters */}

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
            placeholder="Search anime..."
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
              focus:border-purple-500
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
            focus:border-purple-500
          "
        >

          <option value="">
            All Genres
          </option>

          <option value="1">
            Action
          </option>

          <option value="2">
            Adventure
          </option>

          <option value="4">
            Comedy
          </option>

          <option value="8">
            Drama
          </option>

          <option value="10">
            Fantasy
          </option>

          <option value="14">
            Horror
          </option>

          <option value="7">
            Mystery
          </option>

          <option value="22">
            Romance
          </option>

          <option value="24">
            Sci-Fi
          </option>

          <option value="36">
            Slice of Life
          </option>

          <option value="37">
            Supernatural
          </option>

        </select>



        {/* Year */}

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
            focus:border-purple-500
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



        {/* Score */}

        <select
          value={score}
          onChange={(e) =>
            setScore(e.target.value)
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
            focus:border-purple-500
          "
        >

          <option value="">
            Any Score
          </option>

          <option value="9">
            9+ ⭐
          </option>

          <option value="8">
            8+ ⭐
          </option>

          <option value="7">
            7+ ⭐
          </option>

          <option value="6">
            6+ ⭐
          </option>

          <option value="5">
            5+ ⭐
          </option>

        </select>



        {/* Type */}

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
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
            focus:border-purple-500
          "
        >

          <option value="">
            All Types
          </option>

          <option value="tv">
            TV
          </option>

          <option value="movie">
            Movie
          </option>

          <option value="ova">
            OVA
          </option>

          <option value="ona">
            ONA
          </option>

          <option value="special">
            Special
          </option>

          <option value="music">
            Music
          </option>

        </select>

      </div>



      {/* Second Row */}

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

        {/* Status */}

        <label
          className="
            text-sm
            text-gray-400
          "
        >

          Status:

        </label>


        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
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
            focus:border-purple-500
          "
        >

          <option value="">
            All Status
          </option>

          <option value="airing">
            Currently Airing
          </option>

          <option value="complete">
            Finished Airing
          </option>

          <option value="upcoming">
            Not Yet Aired
          </option>

        </select>



        {/* Sort */}

        <label
          className="
            text-sm
            text-gray-400
            sm:ml-4
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
            focus:border-purple-500
          "
        >

          <option value="score">
            Highest Rated
          </option>

          <option value="popularity">
            Most Popular
          </option>

          <option value="title">
            Title A-Z
          </option>

          <option value="newest">
            Newest

          </option>

        </select>

      </div>

    </section>

  );

};


export default AnimeFilter;
