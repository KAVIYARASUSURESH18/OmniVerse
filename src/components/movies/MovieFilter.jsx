import {
  Search,
  Filter,
  X,
} from "lucide-react";


const MovieFilter = ({
  search,
  setSearch,
  genre,
  setGenre,
  year,
  setYear,
  rating,
  setRating,
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
            className="text-cyan-400"
          />

          <h2
            className="
              text-lg
              font-bold
              text-white
            "
          >

            Filter Movies

          </h2>

        </div>


        {/* Clear */}

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


      {/* Filters */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-4
        "
      >


        {/* Search */}

        <div
          className="
            relative
            lg:col-span-2
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
            placeholder="Search movies..."
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
              focus:border-cyan-500
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
            focus:border-cyan-500
          "
        >

          <option value="">
            All Genres
          </option>

          <option value="28">
            Action
          </option>

          <option value="12">
            Adventure
          </option>

          <option value="16">
            Animation
          </option>

          <option value="35">
            Comedy
          </option>

          <option value="80">
            Crime
          </option>

          <option value="18">
            Drama
          </option>

          <option value="27">
            Horror
          </option>

          <option value="10749">
            Romance
          </option>

          <option value="878">
            Science Fiction
          </option>

          <option value="53">
            Thriller
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
            focus:border-cyan-500
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
            focus:border-cyan-500
          "
        >

          <option value="">
            Any Rating
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
            focus:border-cyan-500
          "
        >

          <option value="popularity.desc">
            Most Popular
          </option>

          <option value="vote_average.desc">
            Highest Rated
          </option>

          <option value="release_date.desc">
            Newest Releases
          </option>

          <option value="release_date.asc">
            Oldest Releases
          </option>

        </select>

      </div>

    </section>

  );

};


export default MovieFilter;
