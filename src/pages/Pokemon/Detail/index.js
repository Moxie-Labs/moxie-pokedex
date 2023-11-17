import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../../contexts/Data";

function PokemonDetail() {
  const { name } = useParams();
  const { pokemonDetails, loading, fetchPokemon } = useData();

  const details = pokemonDetails[name];

  useEffect(() => {
    if (name) {
      fetchPokemon(name);
    }
  }, [name]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!details) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{name}</div>
      <div>{JSON.stringify(details, null, 2)}</div>
    </div>
  );
}

export default PokemonDetail;
