import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Icon } from '@iconify/react';
import PokemonCard from './components/PokemonCard';

const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?offset=24&limit=12'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const detailPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => {
            if (!response.ok) {
              throw new Error(
                'Network response was not ok ' + response.statusText
              );
            }
            return response.json();
          })
        );
        const details = await Promise.all(detailPromises);

        const speciesPromises = details.map((detail) =>
          fetch(detail.species.url).then((response) => {
            if (!response.ok) {
              throw new Error(
                'Network response was not ok ' + response.statusText
              );
            }
            return response.json();
          })
        );
        const speciesData = await Promise.all(speciesPromises);

        const combinedData = data.results.map((pokemon, index) => ({
          ...pokemon,
          details: details[index],
          species: speciesData[index]
        }));

        setPokemonData(combinedData);
      } catch (error) {
        console.error('There has been a problem with fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <header className="pb-10 border-b-[1px] border-slate-700">
        <h1 className="text-[32px] lg:text-4xl text-slate-100 font-bold lg:w-[50%]">
          Explore the Hidden Secrets of Your Favorite Pokémon
        </h1>
        <p className="text-[16px] text-slate-400 font-regular lg:w-[60%] mt-4">
          Click on your favorite Pokémon to uncover their hidden secrets, unique
          abilities, and captivating backstories. Let's embark on this friendly
          adventure together!
        </p>
      </header>
      <section className="flex items-center justify-center">
        {pokemonData ? (
          <ul className="grid grid-cols-1 lg:grid-cols-3 text-slate-100 gap-4 mt-10">
            {pokemonData.map((pokemon, index) => (
              <PokemonCard pokemon={pokemon} key={index} />
            ))}
          </ul>
        ) : (
          <Icon
            icon="line-md:loading-twotone-loop"
            className="mt-[40px] text-rose-500"
          />
        )}
      </section>
    </MainLayout>
  );
};

export default Home;
