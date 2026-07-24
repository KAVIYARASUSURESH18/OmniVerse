import GameGrid from "../components/games/GameGrid";

import { useState } from "react";

import GameFilter from "../components/games/GameFilter";
import GameGrid from "../components/games/GameGrid";


function Games() {

  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");

  const [year, setYear] = useState("");

  const [rating, setRating] = useState("");

  const [platform, setPlatform] = useState("");

  const [sortBy, setSortBy] = useState("rating");


  const clearFilters = () => {

    setSearch("");

    setGenre("");

    setYear("");

    setRating("");

    setPlatform("");

    setSortBy("rating");

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

          🎮 Explore Games

        </h1>


        {/* Game Filter */}

        <GameFilter

          search={search}
          setSearch={setSearch}

          genre={genre}
          setGenre={setGenre}

          year={year}
          setYear={setYear}

          rating={rating}
          setRating={setRating}

          platform={platform}
          setPlatform={setPlatform}

          sortBy={sortBy}
          setSortBy={setSortBy}

          onClear={clearFilters}

        />


        {/* Game Grid */}

        <GameGrid

          games={[]}

          loading={false}

          error={null}

        />

      </div>

    </main>

  );

}


export default Games;


function Games() {

  const games = [

    {
      id: 1,

      name: "Sample Game 1",

      background_image:
        "https://example.com/game1.jpg",

      rating: 4.5,

      released: "2026-01-01",

      platforms: [

        {
          platform: {
            name: "PC",
          },
        },

        {
          platform: {
            name: "PlayStation",
          },
        },

      ],
    },


    {
      id: 2,

      name: "Sample Game 2",

      background_image:
        "https://example.com/game2.jpg",

      rating: 4.2,

      released: "2025-08-15",

      platforms: [

        {
          platform: {
            name: "Xbox",
          },
        },

        {
          platform: {
            name: "PC",
          },
        },

      ],
    },

  ];


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

          🎮 Explore Games

        </h1>


        {/* Game Grid */}

        <GameGrid

          games={games}

          loading={false}

          error={null}

        />

      </div>

    </main>

  );

}


export default Games;
