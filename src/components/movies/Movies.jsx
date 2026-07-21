import MovieGrid from "../components/movies/MovieGrid";


function Movies() {

  const movies = [

    {
      id: 1,
      title: "Sample Movie 1",
      poster_path: null,
      vote_average: 8.5,
      release_date: "2026-01-01",
    },

    {
      id: 2,
      title: "Sample Movie 2",
      poster_path: null,
      vote_average: 7.8,
      release_date: "2026-02-15",
    },

  ];


  return (

    <main className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="
          text-3xl
          font-bold
          text-white
          mb-8
        ">

          🎬 Movies

        </h1>


        <MovieGrid

          movies={movies}

          loading={false}

          error={null}

        />

      </div>

    </main>

  );

}

import { useState } from "react";

import MovieFilter from "../components/movies/MovieFilter";
import MovieGrid from "../components/movies/MovieGrid";


function Movies() {

  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");

  const [year, setYear] = useState("");

  const [rating, setRating] = useState("");

  const [sortBy, setSortBy] = useState(
    "popularity.desc"
  );


  const clearFilters = () => {

    setSearch("");

    setGenre("");

    setYear("");

    setRating("");

    setSortBy("popularity.desc");

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

        {/* Title */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            mb-8
          "
        >

          🎬 Explore Movies

        </h1>


        {/* Filter */}

        <MovieFilter

          search={search}

          setSearch={setSearch}

          genre={genre}

          setGenre={setGenre}

          year={year}

          setYear={setYear}

          rating={rating}

          setRating={setRating}

          sortBy={sortBy}

          setSortBy={setSortBy}

          onClear={clearFilters}

        />


        {/* Movie Grid */}

        <MovieGrid

          movies={[]}

          loading={false}

          error={null}

        />

      </div>

    </main>

  );

}


export default Movies;


export default Movies;
