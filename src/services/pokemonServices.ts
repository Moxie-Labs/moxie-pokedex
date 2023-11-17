import axios from "axios"
import { GET_POKEMON, GET_POKEMONS } from "endpoints"
import waitAtLeast from "utils/waitAtLeast"

export const getPokemons  = async ({
		page,
		pageSize
	}: {
		page: number
		pageSize: number
	}) => {

	const [limit, offset] = [pageSize, (page-1) * pageSize]

	const endpointData = GET_POKEMONS(limit, offset)

	const {data} = await waitAtLeast(axios.request({
		url: endpointData.url,
		method: endpointData.method,
		params: endpointData.params
	}), 1000)

	return data
}

export const getPokemon  = async (name: string) => {
	const endpointData = GET_POKEMON(name)

	const {data} = await waitAtLeast(axios.request({
		url: endpointData.url,
		method: endpointData.method,
		params: endpointData.params
	}), 1000)

	return data
}

