import { useData } from "../../../contexts/Data";

function PokemonList() {
  const {
    pokemons: { results },
    loading,
  } = useData();

  if (loading) {
    return <div>Loading ...</div>;
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
        {results.map(({ name, url }, id) => (
          <tr key={name}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
              <a href="#">Detail</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokemonList;
