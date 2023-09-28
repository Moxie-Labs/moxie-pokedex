import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
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
  );
};

export default PokemonList;
