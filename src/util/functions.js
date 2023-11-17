import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args) => clsx(twMerge(...args));

export const getAnimatedImageSrc = (pokemon) => {
  if (!pokemon) return;
  return (
    pokemon.sprites?.versions["generation-v"]["black-white"].animated
      .front_default ?? pokemon.sprites?.front_default
  );
};

export const getStaticImageSrc = (pokemon) => {
  if (!pokemon) return;
  return pokemon.sprites?.front_default;
}

export const getPokemonTypes = (pokemon) => {
  if (!pokemon) return;
  return pokemon.types.map((item) => item.type.name);
};

export const AtoZ = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (b.name < a.name) {
    return 1;
  }
  return 0;
};

export const ZtoA = (a, b) => {
  if (a.name < b.name) {
    return 1;
  }
  if (b.name < a.name) {
    return -1;
  }
  return 0;
};