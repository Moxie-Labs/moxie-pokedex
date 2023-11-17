import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../../contexts/Data";
import { Badge } from "../../../components";

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
    return <div className="text-center">Loading ...</div>;
  }

  if (!details) {
    return <div className="text-center">Not found</div>;
  }

  return (
    <main>
      <h1 className="text-center">{details.name}</h1>
      <p>ID: {details.id}</p>
      <p>Base Experience: {details.base_experience}</p>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <p>Order: {details.order}</p>
      <p>
        Abilities: 
        {details.abilities.length ? (
          details.abilities.map((ability) => (
            <Badge key={ability.ability.name}>{ability.ability.name}</Badge>
          ))
        ) : (
          <span>None</span>
        )}
      </p>
      <p>
        Held Items: 
        {details.held_items.length ? (
          details.held_items.map((item) => (
            <Badge key={item.item.name}>{item.item.name}</Badge>
          ))
        ) : (
          <span>None</span>
        )}
      </p>

      <div>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default PokemonDetail;
