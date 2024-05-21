import { createContext, useCallback, useContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [sort, setSort] = useState("None");
  const [typeFilter, setTypeFilter] = useState("All");

  const updatePokemonList = useCallback(
    (newPokemonList) => {
      setPokemonList(newPokemonList);
    },
    [setPokemonList]
  );

  const updateSearchPokemon = (newSearchPokemon) => {
    setSearchPokemon(newSearchPokemon);
  };

  const updateSort = (newSort) => {
    setSort(newSort);
  };

  const updateTypeFilter = useCallback(
    (newTypeFilter) => {
      setTypeFilter(newTypeFilter);
    },
    [setTypeFilter]
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        updatePokemonList,
        searchPokemon,
        updateSearchPokemon,
        sort,
        updateSort,
        typeFilter,
        updateTypeFilter,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
