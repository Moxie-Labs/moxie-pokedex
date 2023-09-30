import React from 'react';
import Progress from './Progress';

const Header = ({ pokemonData }) => {
  const stats = [
    { label: 'HP', width: pokemonData?.data.stats[0].base_stat },
    { label: 'Attack', width: pokemonData?.data.stats[1].base_stat },
    { label: 'Defense', width: pokemonData?.data.stats[2].base_stat },
    { label: 'Special Attack', width: pokemonData?.data.stats[3].base_stat },
    { label: 'Special Defense', width: pokemonData?.data.stats[4].base_stat }
  ];
  return (
    <header className="py-10 border-[1px] px-4 lg:px-12 text-slate-100 flex flex-col lg:flex-row justify-between items-center rounded-lg border-slate-700">
      <img
        className="px-4 py-6 h-[400px]"
        alt={pokemonData?.name}
        src={pokemonData?.data.sprites.other.dream_world.front_default}
      ></img>
      <div className="lg:w-[60%]">
        <h1 className="text-[46px] font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-100 capitalize">
          {pokemonData?.data.name}
        </h1>
        <p className="mt-2 mb-12 text-[14px]">
          {pokemonData?.species?.flavor_text_entries?.[0]?.flavor_text || ''}
        </p>
        {stats.map((stat, index) => (
          <Progress key={index} label={stat.label} width={stat.width} />
        ))}
      </div>
    </header>
  );
};

export default Header;
