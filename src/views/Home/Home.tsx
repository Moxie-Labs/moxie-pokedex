import { useQuery } from "react-query";
import { getPokemons} from "../../services/pokemonServices"
import { Link } from "react-router-dom";
import styles from './Home.module.scss'
import { useSetMetaData } from "utils/hooks/useMetaData";
import { useEffect } from "react";

function getPokemonIdFromUrl(url: string) {
	return parseInt(url.split('/')[url.split('/').length - 2]!)
}

function getPokemonImageFromUrl(url: string) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(url)}.png`
}

export default function Home() {

	const setTitle = useSetMetaData('title')

	useEffect(() => {
		setTitle('Home')
	}, [setTitle])

	const { isLoading, data, error } = useQuery(["pokemons"], () => getPokemons({page: 1, pageSize: 12}));

	if (isLoading) return 'Loading...'

	if (error) {
		// Log error
		return 'Something went wrong, please try again later'
	}

	return (
		<div className={styles.pokemons}>
			{data.results.map((pokemon: any) => (
				<Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
					<div className={styles.pokemonCard}>
						<img src={getPokemonImageFromUrl(pokemon.url)} alt={pokemon.name} />
						<span className={styles.pokemonName}>{pokemon.name}</span>
					</div>
				</Link>
			))}
		</div>
	)
}
