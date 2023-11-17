import { Link, useParams } from "react-router-dom";

function PokemonDetail() {
  const { name } = useParams();
  return (
    <div>
      {name}

      <Link to="/">Home</Link>
    </div>
  );
}

export default PokemonDetail;
