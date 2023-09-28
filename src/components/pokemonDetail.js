import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching the pokemon data:', error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <>
    <div className="pokemon-detail-container">
        <h1>Pokémon Details</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>

        <div className="details-container">
            <p>Type: {pokemon.types.map(type => type.type.name).join(", ")}</p>
            <p>Height: {pokemon.height / 10}m</p>
            <p>Weight: {pokemon.weight / 10}kg</p>
            <p>Base Experience: {pokemon.base_experience}</p>
        </div>
        
        <div>
            <h2>Abilities:</h2>
            <ul>
                {pokemon.abilities.map(ability => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
        
        <button onClick={() => navigate(-1)}>Go Back to List</button>
    </div>
    </>
);
};

export default PokemonDetail;
