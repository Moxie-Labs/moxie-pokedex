/**
 * Extracts the ID from a Pokemon URL.
 * @param {string} url - The URL of the Pokemon.
 * @returns {string} - The ID of the Pokemon.
 * @example
 * getPokemonIdFromURL("https://pokeapi.co/api/v2/pokemon/1/");
 * // returns 1
 */
export const getPokemonIdFromURL = (url) => {
  return url.split("/").at(-2);
};
