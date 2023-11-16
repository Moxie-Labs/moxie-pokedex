import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async (pageNo = 0, limit = 20) => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=" +
        limit +
        "&offset=" +
        pageNo * limit
    );
    const data = await res.json();
    console.log("pokemons: ", data);
    setPokemons(data);
  };

  return (
    <DataContext.Provider value={{ pokemons, fetchPokemons }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const { pokemons, fetchPokemons } = useContext(DataContext);

  return {
    pokemons,
    fetchPokemons,
  };
};

export { DataProvider, useData };
