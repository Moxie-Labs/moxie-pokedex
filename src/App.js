import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PokemonList, PokemonDetail } from "./pages/Pokemon";
import { useData } from './contexts/Data';
import './App.css';

function App() {
  const { fetchPokemons } = useData();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <RouterProvider
        router={createBrowserRouter([
          { path: "/pokemons/:name", element: <PokemonDetail /> },
          { path: "/", element: <PokemonList /> },
        ])}
      />
    </div>
  );
}

export default App;
