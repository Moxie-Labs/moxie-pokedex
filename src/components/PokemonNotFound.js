import { Link } from "react-router-dom";

export const PokemonNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] relative">
      <div className="flex flex-col items-center justify-center">
        <div className="w-28 aspect-square">
          <img src="/pokeball-spin.gif" alt="" />
        </div>
        <h2 className="text-lg md:text-7xl">Pokemon not found</h2>
        <Link
          className="p-2 px-3 mt-10 transition-all bg-red-600 rounded-2xl glow-red hover:scale-105 focus:scale-105 active:scale-95"
          to={`/`}>
          <p className="flex items-center justify-center gap-2 text-white">
            <span className="text-2xl">←</span>
            <span>Go back</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
