import { useMemo } from "react";
import { Filters } from "../components/Filters";
import { PokemonCard } from "../components/PokemonCard";
import { Search } from "../components/Search";
import { usePokemon } from "../context/PokemonContext";
import { AtoZ, ZtoA } from "../util/functions";

const getFilteredPokemonList = (
  pokemonList,
  { searchPokemon, sort, typeFilter }
) => {
  let typeFilteredPokemonList = pokemonList.filter((pokemon) => {
    if (typeFilter === "All") return true;

    return pokemon.types.some(({ type: { name } }) => name === typeFilter);
  });
  let filteredPokemonList = typeFilteredPokemonList.filter((pokemon) => {
    return pokemon.name.includes(searchPokemon);
  });

  const isNoSort = sort === "None";

  if (isNoSort) return filteredPokemonList;

  let sortedPokemonList = [];
  switch (sort) {
    case "A-Z":
      sortedPokemonList = filteredPokemonList.sort(AtoZ);
      break;
    case "Z-A":
      sortedPokemonList = filteredPokemonList.sort(ZtoA);
      break;
    case "Ascending ID":
      sortedPokemonList = filteredPokemonList.sort((a, b) => a.id - b.id);
      break;
    case "Descending ID":
      sortedPokemonList = filteredPokemonList.sort((a, b) => b.id - a.id);
      break;
    default:
      break;
  }

  return sortedPokemonList;
};

export const Home = () => {
  const { pokemonList, searchPokemon, sort, typeFilter } = usePokemon();

  const currentPokemonList = useMemo(
    () =>
      getFilteredPokemonList(pokemonList, {
        searchPokemon,
        sort,
        typeFilter,
      }),
    [pokemonList, searchPokemon, sort, typeFilter]
  );
  return (
    <div className="relative z-50 h-full max-w-[990px] mx-auto">
      <div className="py-4">
        <div className="flex flex-col gap-6">
          <Search />
          <Filters />
          <div className="pt-16">
            <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 grid-cols gap-y-16">
              {currentPokemonList?.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
