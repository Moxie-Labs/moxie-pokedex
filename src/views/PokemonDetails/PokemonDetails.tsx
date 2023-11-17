import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemon } from "services/pokemonServices";
import styles from './PokemonDetails.module.scss'
import { useSetMetaData } from "utils/hooks/useMetaData";
import { useEffect } from "react";

function prettifyString(str: string) {
	const strs = str.replace('-', ' ').split(' ')
	return strs.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
}

export default function PokemonDetails() {
	const { name } = useParams();

	const setTitle = useSetMetaData('title')

	const navigate = useNavigate();

	const { isLoading, data, error } = useQuery(["pokemon", name], ({queryKey}) => getPokemon(queryKey[1]!));

	useEffect(() => {
		if (data?.name) setTitle(prettifyString(data.name))
		else setTitle("Who's That Pokémon?")
	}, [data, setTitle])

	if (isLoading) return `Who's That Pokémon?`;

	if (error) {
		// Log error
		return 'Something went wrong, please try again later'
	}

	if (!data) return null;

  return (
	<>
		<button className={styles.goBackBtn} onClick={() => navigate(-1)}>Go Back</button>
    <div className={styles.pokemonContainer}>
      <h2>Pokemon ID: {data.id}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <div>
        <h1 className={styles.pokemonName}>{data.name}</h1>
          <p>Type: {data.types.map((type: any) => prettifyString(type.type.name)).join(", ")}</p>
          <p>Height: {data.height / 10}m</p>
          <p>Weight:  {data.weight / 10}kg</p>
          <p>Base Experience: {data.base_experience}</p>
      </div>
			<div>Stats:
				{data.stats.map((stat: any) => (
						<p className={styles.pokemonStat} key={stat.stat.name}>{prettifyString(stat.stat.name)}: {stat.base_stat}</p>
				))}
			</div>
      <div>Abilities:{" "}
				{data.abilities.map((ability: any) => prettifyString(ability.ability.name)).join(", ")}
      </div>
    </div>
		</>
  );
}
