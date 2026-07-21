import AnimeCard from "./AnimeCard";

import Loader from "../common/Loader";
import Error from "../common/Error";
import EmptyState from "../common/EmptyState";


const AnimeGrid = ({
  animeList = [],
  loading = false,
  error = null,
  onRetry,
}) => {


  // Loading State

  if (loading) {

    return (

      <Loader />

    );

  }



  // Error State

  if (error) {

    return (

      <Error

        message={error}

        onRetry={onRetry}

      />

    );

  }



  // Empty State

  if (!animeList || animeList.length === 0) {

    return (

      <EmptyState

        title="No Anime Found"

        message="We couldn't find any anime to display."

      />

    );

  }



  return (

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-4
        sm:gap-5
      "
    >

      {animeList.map((anime) => (

        <AnimeCard

          key={anime.mal_id}

          id={anime.mal_id}

          title={
            anime.title ||
            "Unknown Anime"
          }

          image={
            anime.images?.jpg
              ?.large_image_url ||
            anime.images?.jpg
              ?.image_url ||
            null
          }

          score={
            anime.score
              ? anime.score.toFixed(1)
              : "N/A"
          }

          episodes={
            anime.episodes ||
            "N/A"
          }

          releaseDate={
            anime.aired?.from
              ? anime.aired.from.slice(0, 10)
              : "Unknown"
          }

        />

      ))}

    </div>

  );

};


export default AnimeGrid;
