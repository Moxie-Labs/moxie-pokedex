import { useData } from "../../../contexts/Data";
import { getPokemonIdFromURL } from "../../../utils";

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
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        {results.map(({ name, url }) => (
          <tr key={name}>
            <td>{getPokemonIdFromURL(url)}</td>
            <td>{name}</td>
            <td>
              <a href={"/pokemons/" + name}>Detail</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokemonList;
