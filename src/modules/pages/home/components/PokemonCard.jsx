import { Icon } from '@iconify/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const getTypeIcon = (typeName) => {
  switch (typeName) {
    case 'normal':
      return 'fa6-solid:o';
    case 'fire':
      return 'bi:fire';
    case 'water':
      return 'ic:sharp-water-drop';
    case 'electric':
      return 'mdi:electricity';
    case 'grass':
      return 'game-icons:linden-leaf';
    case 'ice':
      return 'arcticons:snow';
    case 'fighting':
      return 'mingcute:hand-grab-fill';
    case 'poison':
      return 'ph:skull-bold';
    case 'ground':
      return 'fluent:tent-48-filled';
    case 'flying':
      return 'fa-solid:campground';
    case 'psychic':
      return 'tabler:whirl';
    case 'bug':
      return 'ri:bug-fill';
    case 'rock':
      return 'game-icons:rock';
    case 'ghost':
      return '';
    case 'dark':
      return '';
    case 'dragon':
      return '';
    case 'steel':
      return '';
    case 'fairy':
      return 'mdi:fairy';
    default:
      return '';
  }
};

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  console.log(pokemon);
  return (
    <li
      onClick={() => navigate(`/${pokemon.name}`)}
      className="bg-slate-800 rounded-lg px-4 py-3 hover:bg-rose-500 hover:bg-opacity-10 cursor-pointer"
    >
      <p className="pb-[4px] font-medium text-[12px]">
        Evolves from
        <span className="ml-1 text-rose-500">
          {pokemon?.species?.evolves_from_species?.name
            ? pokemon?.species?.evolves_from_species?.name
            : 'N/A'}
        </span>
      </p>
      <div className="relative mt-0 flex justify-between border-b-[1px] border-slate-700 pb-[4px]">
        <h3 className="text-[36px] ml-[0px] capitalize font-semibold">
          {pokemon.name}
        </h3>

        <div className="absolute right-[-30px] top-[-30px]">
          <img src="/star.svg" className="w-[60px] z-[-1]" />
          <p className="z-[1] mt-[-50px] font-bold ml-[15px] text-[28px] tracking-tighter">
            {pokemon?.details?.order}
          </p>
        </div>
      </div>
      <img
        className="w-[100%] px-4 py-6 h-[300px]"
        alt="Pokemon Image"
        src={pokemon?.details?.sprites.other.dream_world.front_default}
      ></img>
      <div className="border-slate-700 border-[1px] text-[14px] rounded-lg font-medium px-4 py-2 flex items-center justify-between">
        <div className="bg-rose-500 rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <Icon
            icon={getTypeIcon(pokemon.details.types[0].type.name)}
            className="text-[20px]"
          />
        </div>
        <p className="capitalize">
          Height:
          <span className="text-slate-400 ml-4">{pokemon.details.height}</span>
        </p>
        <p className="capitalize">
          Weight:
          <span className="text-slate-400 ml-4">{pokemon.details.weight}</span>
        </p>
      </div>
      <p className="mt-4 text-[14px]">
        <span className="text-lime-500 mr-2 font-semibold">Power</span>
        {pokemon.species.flavor_text_entries[0].flavor_text}
      </p>
      <div className="border-t-[1px] grid grid-cols-3 border-b-[1px] border-slate-700 py-3 mt-4">
        <p className="capitalize text-blue-500">
          {pokemon.details.moves[0].move.name}
        </p>
        <p className="capitalize text-lime-500">
          {pokemon.details.stats[1].base_stat}
        </p>
        <p className="capitalize text-rose-500">
          {pokemon.details.stats[2].base_stat}
        </p>
      </div>
      <div className="grid grid-cols-3 text-[12px] text-slate-200 py-3">
        <p className="capitalize">Move</p>
        <p className="capitalize">Attack</p>
        <p className="capitalize">Defense</p>
      </div>
    </li>
  );
};

export default PokemonCard;
