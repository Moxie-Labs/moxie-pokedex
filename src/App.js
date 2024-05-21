import { useEffect } from "react";
import { usePokemon } from "./context/PokemonContext";
import { fetchPokemons } from "./util/queries";
import { POKEMON_LIST } from "./util/constants";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { PokemonDetails } from "./pages/PokemonDetails";
import { FilterDrawer } from "./components/FilterDrawer";

function App() {
  const { updatePokemonList, pokemonList } = usePokemon();

  useEffect(() => {
    fetchPokemons(POKEMON_LIST).then((data) => {
      const fetchedPokemons = data.filter((pokemon) => pokemon.status === 200);
      const pokemonDetailsList = fetchedPokemons.map((pokemon) => pokemon.data);

      updatePokemonList(pokemonDetailsList);
    });
  }, [updatePokemonList]);

  return (
    <Router>
      <Routes>
        <Route path="/" exact strict element={<Home />} />
        <Route
          path="/pokemon/:id/"
          element={<PokemonDetails pokemonList={pokemonList} />}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <div className="sm:hidden">
        <FilterDrawer />
      </div>
    </Router>
  );
}

export default App;
