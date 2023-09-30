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

const Bagde = ({ icon, score, label, vibe }) => {
  return (
    <div className="border-slate-700 relative border-[1px] rounded-md p-4 text-slate-100">
      <Icon
        icon={icon}
        className={`text-[32px] absolute right-4 top-4 ${vibe}`}
      />
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
            <p className="mt-2 mb-12 text-[14px]">
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
        <h2 className="text-slate-100 text-[16px] font-medium">Species Stat</h2>
        <div className="mt-4 grid grid-cols-4 gap-4 w-[100%] mx-auto">
          <Bagde
            icon={'system-uicons:face-happy'}
            label="Base happiness"
            score={pokemonData?.species?.base_happiness}
            vibe={'text-yellow-500'}
          />
          <Bagde
            icon={'ic:baseline-block'}
            label="Capture rate"
            score={pokemonData?.species?.capture_rate}
            vibe={'text-rose-500'}
          />
          <Bagde
            icon={'ph:gender-intersex'}
            label="Gender rate"
            score={pokemonData?.species?.gender_rate}
            vibe={'text-pink-500'}
          />
          <Bagde
            icon={'ph:egg-crack-light'}
            label="Hatch counter"
            score={pokemonData?.species?.hatch_counter}
            vibe={'text-lime-500'}
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

      <section className="mt-10">
        <h2 className="text-slate-100 text-[16px] font-medium">Moves</h2>
        <table className="mt-4 w-[100%]" style={{ borderCollapse: 'collapse' }}>
          <tbody>
            <thead className="grid grid-cols-5 text-left px-6 py-3 text-slate-300 text-[14px] bg-slate-700">
              <th>SI</th>
              <th>Name</th>
              <th>Level Learn</th>
              <th>Learn Method</th>
              <th>Version Group Name</th>
            </thead>
            {pokemonData?.data.moves.slice(0, 15).map((move, index) => (
              <tr
                key={index}
                className={`${
                  index > 0 &&
                  index < pokemonData?.data.moves.length - 1 &&
                  'border-b-[1px] border-slate-800'
                } grid grid-cols-5 border-b-[1px] capitalize border-slate-800 px-6 py-4 text-slate-300 text-[14px]`}
              >
                <td>{index + 1}</td>
                <td>{move.move.name}</td>
                <td>{move.version_group_details[0].level_learned_at}</td>
                <td>{move.version_group_details[0].move_learn_method.name}</td>
                <td>{move.version_group_details[0].version_group.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="border-[1px] flex justify-between items-start border-slate-800 px-6 py-6 rounded-lg mt-12">
        <div>
          <h6 className="text-slate-300 mb-2 text-[18px] font-bold">
            Thanks for Exploring Pokémon with Us!
          </h6>
          <p className="text-slate-400 mb-2 lg:w-[80%] text-[14px]">
            Regrettably, we can't extend this further due to time constraints.
            Feel free to continue your Pokémon exploration with thousands more
            to discover
          </p>
        </div>
        <button className="bg-rose-700 text-slate-100 px-4 py-2 rounded-lg">
          Explore Other Pokemons
        </button>
      </section>
    </MainLayout>
  );
};

export default Pokemon;
