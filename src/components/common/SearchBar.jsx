import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Search,
  X,
} from "lucide-react";


const SearchBar = ({
  placeholder = "Search OmniVerse...",
  onSearch,
  initialValue = "",
}) => {

  const [query, setQuery] =
    useState(initialValue);


  // Handle Search

  const handleSubmit = (event) => {

    event.preventDefault();


    const trimmedQuery =
      query.trim();


    if (!trimmedQuery) {
      return;
    }


    if (onSearch) {

      onSearch(trimmedQuery);

    }

  };


  // Clear Search

  const handleClear = () => {

    setQuery("");


    if (onSearch) {

      onSearch("");

    }

  };


  return (

    <form
      onSubmit={handleSubmit}
      className="
        w-full
      "
    >

      <div
        className="
          relative
          group
        "
      >


        {/* Search Icon */}

        <Search
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            group-focus-within:text-purple-400
            transition-colors
            duration-300
          "
        />



        {/* Input */}

        <input
          type="search"
          value={query}
          onChange={(event) =>
            setQuery(
              event.target.value
            )
          }
          placeholder={placeholder}
          className="
            w-full
            h-12
            pl-12
            pr-12
            rounded-xl
            bg-slate-900
            border
            border-slate-800
            text-white
            placeholder:text-gray-600
            outline-none
            transition-all
            duration-300
            focus:border-purple-500/50
            focus:ring-4
            focus:ring-purple-500/10
            hover:border-slate-700
          "
        />



        {/* Clear Button */}

        {query && (

          <button
            type="button"
            onClick={handleClear}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              w-8
              h-8
              flex
              items-center
              justify-center
              rounded-lg
              text-gray-500
              hover:text-white
              hover:bg-slate-800
              transition
            "
            aria-label="Clear search"
          >

            <X size={17} />

          </button>

        )}

      </div>

    </form>

  );

};


export default SearchBar;


const SearchBar = () => {


  const [query, setQuery] = useState("");

  const navigate = useNavigate();



  const handleSearch = (e) => {

    e.preventDefault();


    if(query.trim()){

      navigate(`/search?q=${query}`);

      setQuery("");

    }

  };



  return (

    <form

    onSubmit={handleSearch}

    className="
    w-full
    max-w-xl
    "

    >


      <div

      className="
      relative
      flex
      items-center
      "

      >


        <input


        type="text"


        value={query}


        onChange={(e)=>setQuery(e.target.value)}


        placeholder="
        Search Movies, Anime, Games, Courses...
        "


        className="
        w-full
        bg-slate-900
        border
        border-slate-700
        text-white
        rounded-xl
        py-3
        pl-5
        pr-12
        outline-none
        focus:border-cyan-500
        transition
        "


        />



        <button


        type="submit"


        className="
        absolute
        right-3
        p-2
        rounded-lg
        hover:bg-slate-800
        "

        >


          <Search

          size={22}

          className="
          text-cyan-400
          "

          />


        </button>



      </div>



    </form>


  );


};


export default SearchBar;
import EmptyState from "../components/common/EmptyState";


if(results.length === 0){

return (

<EmptyState

title="No Results Found"

message="Try searching another movie, anime or game."

buttonText="Go Home"

onButtonClick={()=>navigate("/")}

/>

)

}
