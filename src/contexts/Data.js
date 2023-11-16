import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <DataContext.Provider value={{ pokemons, fetchPokemons, loading }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const { pokemons, fetchPokemons, loading } = useContext(DataContext);

  return {
    pokemons,
    fetchPokemons,
    loading,
  };
};

export { DataProvider, useData };
