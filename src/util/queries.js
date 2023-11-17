import axios from "axios";
import { API_BASE } from "./constants";

export const fetchPokemons = async (pokemonNames) => {
  const requests = pokemonNames.map((name) =>
    axios.get(`${API_BASE}/pokemon/${name.toLowerCase()}`)
  );
  return Promise.all(requests);
};

export const fetchPokemonById = async (id) => {
  return await axios.get(`${API_BASE}/pokemon/${id}`);
};

export const fetchEvolutionChart = async (pokemonName) => {
  try {
    const getSpeciesData = async () => {
      const response = await axios.get(
        `${API_BASE}/pokemon-species/${pokemonName}`
      );
      return response.data;
    };

    const traverseEvolution = async (evolution) => {
      const response = await axios.get(
        `${API_BASE}/pokemon/${evolution.species.name}`
      );
      const pokemonDetails = response.data;

      const evoData = {
        id: pokemonDetails.id,
        name: evolution.species.name,
        sprite: pokemonDetails.sprites.front_default,
        types: pokemonDetails.types.map((t) => t.type.name), // Extract types
      };

      let evolutions = [evoData];

      // Only take the first evolution to avoid most variants
      if (evolution.evolves_to && evolution.evolves_to.length > 0) {
        evolutions = evolutions.concat(
          await traverseEvolution(evolution.evolves_to[0])
        );
      }

      return evolutions;
    };

    const speciesData = await getSpeciesData();
    const evolutionChainResponse = await axios.get(
      speciesData.evolution_chain.url
    );
    const evolutionData = evolutionChainResponse.data;

    return await traverseEvolution(evolutionData.chain);
  } catch (error) {
    console.error("Failed to fetch evolution chart:", error);
  }
};
