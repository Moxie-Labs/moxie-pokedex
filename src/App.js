import { useEffect } from 'react';
import { useData } from './contexts/Data';
import logo from './logo.svg';
import './App.css';

import PokemonList from './pages/Pokemon/List';

function App() {
  const { pokemons, fetchPokemons } = useData();

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
