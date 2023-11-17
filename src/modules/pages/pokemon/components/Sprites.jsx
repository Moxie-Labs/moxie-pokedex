import React from 'react';

const Sprite = ({ src, alt, label }) => {
  if (!src) return;
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

const Sprites = ({ pokemon, pokemonData }) => {
  return (
    <section className="mt-10">
      <h2 className="text-slate-100 text-[16px] font-medium">Sprites</h2>
      <div className="py-10 border-[1px] px-12 text-slate-100 mt-4 grid lg:grid-cols-4 items-center rounded-lg border-slate-700">
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
          pokemonData?.data.sprites.other?.['official-artwork']?.front_default,
          'Official Artwork Front Default'
        )}
        {generateSprite(
          pokemon,
          pokemonData?.data.sprites.other?.['official-artwork']?.front_shiny,
          'Official Artwork Front Shiny'
        )}
      </div>
    </section>
  );
};

export default Sprites;
