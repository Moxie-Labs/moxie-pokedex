import { useRef } from "react";
import { usePokemon } from "../context/PokemonContext";
import { Pokeball } from "../util/svgs";
import { Card } from "./Card";

export const Search = () => {
  const { searchPokemon, updateSearchPokemon } = usePokemon();
  const ref = useRef();
  return (
    <label>
      <Card>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className="flex w-full h-20 gap-4 px-6 py-4">
            <input
              name="searchPokemon"
              className="w-full h-full outline-none"
              placeholder="Search pokemon"
              defaultValue={searchPokemon}
              ref={ref}
            />
            {searchPokemon && (
              <button
                onClick={() => {
                  updateSearchPokemon("");
                  ref.current.value = "";
                }}>
                X
              </button>
            )}
            <button
              className="flex items-center justify-center h-full bg-red-500 rounded-2xl aspect-square glow-red"
              onClick={() => {
                updateSearchPokemon(ref.current.value.toLowerCase());
              }}>
              <Pokeball className="fill-white" />
            </button>
          </div>
        </form>
      </Card>
    </label>
  );
};
