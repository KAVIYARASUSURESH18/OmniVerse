import GameCard from "./GameCard";

import Loader from "../common/Loader";
import Error from "../common/Error";
import EmptyState from "../common/EmptyState";


const GameGrid = ({
  games = [],
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

  if (!games || games.length === 0) {

    return (

      <EmptyState
        title="No Games Found"
        message="We couldn't find any games to display."
      />

    );

  }


  return (

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-5
      "
    >

      {games.map((game) => (

        <GameCard

          key={game.id}

          id={game.id}

          name={
            game.name ||
            "Unknown Game"
          }

          image={
            game.background_image ||
            null
          }

          rating={
            game.rating
              ? game.rating.toFixed(1)
              : "N/A"
          }

          releaseDate={
            game.released ||
            "Unknown"
          }

          platforms={
            game.platforms?.map(
              (item) => item.platform
            ) || []
          }

        />

      ))}

    </div>

  );

};


export default GameGrid;
