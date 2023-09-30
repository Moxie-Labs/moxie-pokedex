import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import Progress from './components/Progress';

const Sprite = ({ src, alt, label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="px-4 py-6 h-[200px]" alt={alt} src={src}></img>
      <p className="text-[14px] text-slate-300">{label}</p>
    </div>
  );
};
const generateSprite = (alt, src, label) => (
  <Sprite alt={alt} src={src} label={label} />
);

const Bagde = ({ icon, score, label }) => {
  return (
    <div className="border-slate-700 relative border-[1px] rounded-md p-4 text-slate-100">
      <Icon icon={icon} className="text-[24px]  absolute right-4 top-4" />
      <p className="text-[32px]">{score}</p>
      <p className="text-[14px] text-slate-300">{label}</p>
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

  console.log(pokemonData);
  const stats = [
    { label: 'HP', width: pokemonData?.data.stats[0].base_stat },
    { label: 'Attack', width: pokemonData?.data.stats[1].base_stat },
    { label: 'Defense', width: pokemonData?.data.stats[2].base_stat },
    { label: 'Special Attack', width: pokemonData?.data.stats[3].base_stat },
    { label: 'Special Defense', width: pokemonData?.data.stats[4].base_stat }
  ];

  return (
    <MainLayout>
      {pokemonData ? (
        <header className="py-10 border-[1px] px-12 text-slate-100 flex justify-between items-center rounded-lg border-slate-700">
          <img
            className="px-4 py-6 h-[400px]"
            alt={pokemon}
            src={pokemonData?.data.sprites.other.dream_world.front_default}
          ></img>
          <div className="w-[60%]">
            <h1 className="text-[46px] font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-100 capitalize">
              {pokemonData?.data.name}
            </h1>
            <p className="mt-2 text-[14px]">
              {pokemonData?.species?.flavor_text_entries?.[0]?.flavor_text ||
                ''}
            </p>
            {stats.map((stat, index) => (
              <Progress key={index} label={stat.label} width={stat.width} />
            ))}
          </div>
        </header>
      ) : (
        <Icon
          icon="line-md:loading-twotone-loop"
          className="mx-auto text-rose-500"
        />
      )}
      <section className="mt-10">
        <h2 className="text-slate-100 text-[16px] font-medium">Sprites</h2>
        <div className="mt-4 grid grid-cols-4 gap-4 w-[100%] mx-auto">
          <Bagde
            icon={'healthicons:happy'}
            label="Base happiness"
            score={120}
          />
          <Bagde
            icon={'healthicons:happy'}
            label="Base happiness"
            score={120}
          />
          <Bagde
            icon={'healthicons:happy'}
            label="Base happiness"
            score={120}
          />
          <Bagde
            icon={'healthicons:happy'}
            label="Base happiness"
            score={120}
          />
          <Bagde
            icon={'healthicons:happy'}
            label="Base happiness"
            score={120}
          />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-slate-100 text-[16px] font-medium">Sprites</h2>
        <div className="py-10 border-[1px] px-12 text-slate-100 mt-4 grid grid-cols-4 items-center rounded-lg border-slate-700">
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other.dream_world?.front_default,
            'Dream World Front Default'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other.home?.front_default,
            'Home Front Default'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other.home?.front_female,
            'Home Front Female'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other.home?.front_shiny,
            'Home Front Shiny'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other.home?.front_shiny_female,
            'Home Front Shiny Female'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other?.['official-artwork']
              ?.front_default,
            'Official Artwork Front Default'
          )}
          {generateSprite(
            pokemon,
            pokemonData?.data.sprites.other?.['official-artwork']?.front_shiny,
            'Official Artwork Front Shiny'
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Pokemon;
