import { useState } from "react";

import AnimeFilter from "../components/anime/AnimeFilter";
import AnimeGrid from "../components/anime/AnimeGrid";


function Anime() {

  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");

  const [year, setYear] = useState("");

  const [score, setScore] = useState("");

  const [type, setType] = useState("");

  const [status, setStatus] = useState("");

  const [sortBy, setSortBy] = useState("score");


  const clearFilters = () => {

    setSearch("");

    setGenre("");

    setYear("");

    setScore("");

    setType("");

    setStatus("");

    setSortBy("score");

  };


  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        py-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Page Title */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            mb-8
          "
        >

          🎌 Explore Anime

        </h1>


        {/* Anime Filter */}

        <AnimeFilter

          search={search}
          setSearch={setSearch}

          genre={genre}
          setGenre={setGenre}

          year={year}
          setYear={setYear}

          score={score}
          setScore={setScore}

          type={type}
          setType={setType}

          status={status}
          setStatus={setStatus}

          sortBy={sortBy}
          setSortBy={setSortBy}

          onClear={clearFilters}

        />


        {/* Anime Grid */}

        <AnimeGrid

          animeList={[]}

          loading={false}

          error={null}

        />

      </div>

    </main>

  );

}


export default Anime;
