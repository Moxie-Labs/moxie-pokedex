import config from 'config'
import { Method } from 'axios'
const { api } = config

type Endpoint = {
  url: string
  method: Method
	data?: Record<string, any>
	params?: Record<string, any>
}

export const GET_POKEMONS: (limit: number, offset: number) => Endpoint = (limit, offset) => ({
  url: api + 'v2/pokemon/',
  method: 'get',
	params: {
		limit,
		offset,
	}
})

export const GET_POKEMON: (name: string) => Endpoint = (name) => ({
	url: api + 'v2/pokemon/' + name,
  method: 'get',
})
