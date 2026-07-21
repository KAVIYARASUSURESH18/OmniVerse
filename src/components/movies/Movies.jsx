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


export default Movies;
