import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(false);

  /**
   * Fetches the list of pokemons
   * @param {number} pageNo - Page number to read, starts from 0
   * @param {number} limit - Limit count of pokemons to read
   */
  const fetchPokemons = async (pageNo = 0, limit = 20) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=" +
          limit +
          "&offset=" +
          pageNo * limit
      );
      const data = await res.json();
      console.log("pokemons: ", data);

      setPokemons(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  /**
   * Fetches details of individual pokemon
   * @param {string} name - Name of pokemon to read
   * @returns
   *
   * This function uses memoization to reduce unnecessary fetching and optimize UI/UX.
   */
  const fetchPokemon = async (name) => {
    if (pokemonDetails[name]) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
      const data = await res.json();
      setPokemonDetails({ ...pokemonDetails, [name]: data });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{ pokemons, pokemonDetails, loading, fetchPokemons, fetchPokemon }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const { pokemons, pokemonDetails, loading, fetchPokemons, fetchPokemon } =
    useContext(DataContext);

  return {
    pokemons,
    pokemonDetails,
    loading,
    fetchPokemons,
    fetchPokemon,
  };
};

export { DataProvider, useData };
