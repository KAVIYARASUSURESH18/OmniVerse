import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";


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
