import React from 'react';
import usePokemonFetch from '../usePokemonFetch';
import { useParams, useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const { data: pokemon, loading, error } = usePokemonFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='details-main-container'>
            <h1 className='page-title'>Pokémon Details</h1>
            <div className="pokemon-detail-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="info-container">
                    <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>

                    <div className="details-container">
                        <div>
                            <p><strong>Type: </strong>{pokemon.types.map(type => type.type.name).join(", ")}</p>
                            <p><strong>Height: </strong>{pokemon.height / 10}m</p>
                            <p><strong>Weight:  </strong>{pokemon.weight / 10}kg</p>
                            <p><strong>Base Experience: </strong>{pokemon.base_experience}</p>
                        </div>
                        <div><strong>Abilities: </strong>
                            <div className='inline'>
                                {pokemon.abilities.map(ability => (
                                    <span key={ability.ability.name}>{ability.ability.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate(-1)}>Go Back to List</button>
        </div>
    );
};

export default PokemonDetail;
