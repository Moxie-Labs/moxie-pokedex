import React from 'react';
import usePokemonFetch from '../usePokemonFetch';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const { data, loading, error } = usePokemonFetch('https://pokeapi.co/api/v2/pokemon?limit=12');

  const pokemons = data ? data.results : [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1 className='page-title'>Pokémon List</h1>
      <div className="pokemon-list-container">
        <ul className="pokemon-list">
          {pokemons.map(pokemon => (
            <li key={pokemon.name} className="pokemon-item">
              <Link to={`/pokemon/${pokemon.name}`}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <button>Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PokemonList;
