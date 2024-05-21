import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from "./svgs";

export const TYPE_COLORS = Object.freeze({
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
});

export const TYPE_SYMBOLS = Object.freeze({
  normal: Normal,
  fire: Fire,
  water: Water,
  electric: Electric,
  grass: Grass,
  dark: Dark,
  flying: Flying,
  fairy: Fairy,
  fighting: Fighting,
  rock: Rock,
  ground: Ground,
  psychic: Psychic,
  ghost: Ghost,
  dragon: Dragon,
  ice: Ice,
  steel: Steel,
  bug: Bug,
  poison: Poison,
});

export const POKEMON_LIST = Object.freeze([
  "Swampert",
  "Electivire",
  "Hydreigon",
  "Garchomp",
  "Noivern",
  "Charizard",
  "Rayquaza",
  "Kyogre",
  "Lucario",
  "Gardevoir",
  "Flygon",
  "Manectric",
]);

export const STAT_COLORS = Object.freeze({
  hp: "#FF5959",
  attack: "#F5AC78",
  defense: "#FAE078",
  "special-attack": "#9DB7F5",
  "special-defense": "#A7DB8D",
  speed: "#FA92B2",
});

export const API_BASE = "https://pokeapi.co/api/v2";

export const SORT_OPTIONS = Object.freeze([
  "None",
  "A-Z",
  "Z-A",
  "Ascending ID",
  "Descending ID",
]);
