import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import MovesTable from './components/MovesTable';
import EndCTA from './components/EndCTA';
import Badges from './components/Badges';
import Header from './components/Header';
import Sprites from './components/Sprites';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-end justify-end mb-5">
      <button
        onClick={() => navigate('/')}
        className="bg-rose-700 inline-flex items-center text-slate-100 px-4 py-2 rounded-lg"
      >
        <Icon icon="ion:chevron-back-sharp" className="text-[20px] mr-4" />
        Back to Homepage
      </button>
    </div>
  );
};

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemon } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const speciesPromises = fetch(data.species.url).then((response) => {
          if (!response.ok) {
            throw new Error(
              'Network response was not ok ' + response.statusText
            );
          }
          return response.json();
        });

        const speciesData = await Promise.resolve(speciesPromises);

        const combinedData = {
          data,
          species: speciesData
        };

        setPokemonData(combinedData);
      } catch (error) {
        console.error('There has been a problem with fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  if (!pokemonData)
    return (
      <Icon
        icon="line-md:loading-twotone-loop"
        className="mx-auto text-rose-500"
      />
    );

  return (
    <MainLayout>
      <BackButton />
      <Header pokemonData={pokemonData} />
      <Badges pokemonData={pokemonData} />
      <Sprites pokemon={pokemon} pokemonData={pokemonData} />
      <MovesTable pokemonData={pokemonData} />
      <EndCTA />
    </MainLayout>
  );
};

export default Pokemon;
