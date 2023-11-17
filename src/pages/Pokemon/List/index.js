import { Link } from "react-router-dom";
import { useData } from "../../../contexts/Data";
import { getPokemonIdFromURL } from "../../../utils";

import style from "./list.module.css"

function PokemonList() {
  const {
    pokemons: { results },
    loading,
  } = useData();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!results || !results.length) {
    return <div>No data</div>;
  }

  return (
    <main>
      <h1 className="text-center">Pokemons</h1>
      <table className={style.pokemonsList}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {results.map(({ name, url }) => (
            <tr key={name}>
              <td>{getPokemonIdFromURL(url)}</td>
              <td>{name}</td>
              <td>
                <Link to={"/pokemons/" + name}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default PokemonList;
