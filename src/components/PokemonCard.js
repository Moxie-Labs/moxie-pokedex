import { Link } from "react-router-dom";
import { TYPE_COLORS, TYPE_SYMBOLS } from "../util/constants";
import { cn, getAnimatedImageSrc, getPokemonTypes } from "../util/functions";
import { Card } from "./Card";
import { TypeBadge } from "./TypeBadge";

export const PokemonCard = ({ pokemon }) => {
  const pokemonImg = getAnimatedImageSrc(pokemon);
  const types = getPokemonTypes(pokemon);
  const Icon1 = TYPE_SYMBOLS[types[0]];
  const Icon2 = TYPE_SYMBOLS[types[1] ?? types[0]];
  const typesGradient = `linear-gradient(90deg, ${TYPE_COLORS[types[0]]} , ${
    TYPE_COLORS[types[1] ?? types[0]]
  } 100%)`;
  return (
    <button
      className={cn(
        "hover:scale-105 focus:scale-105 transition-all cursor-pointer group outline-none"
      )}>
      <Link to={`/pokemon/${pokemon.id}`} tabIndex={-1}>
        <Card>
          <div className="relative flex flex-col p-4 pt-20 gap-y-4">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full overflow-hidden transition-all opacity-0 group-focus:opacity-30 group-hover:opacity-30 rounded-2xl ">
              <div className="flex w-full h-full">
                <div
                  className="relative w-full h-full"
                  style={{
                    background: typesGradient,
                  }}></div>
                <Icon1 className="absolute top-0 left-0 w-20 h-20 text-sm transition-all group-hover:top-4 group-hover:left-4 group-focus:top-4 group-focus:left-4 fill-white" />
                <Icon2 className="absolute top-0 right-0 w-20 h-20 text-sm transition-all group-hover:top-4 group-hover:right-4 group-focus:top-4 group-focus:right-4 fill-white" />
              </div>
            </div>
            <div className="absolute z-20 flex items-center justify-center -translate-x-1/2 rounded-full -top-10 left-1/2">
              <img className="w-20" src={pokemonImg} alt={pokemon.name} />
            </div>
            <div className="relative z-20 text-center">
              <p className="text-sm text-slate-400">#{pokemon.id}</p>
              <p className="text-2xl font-bold capitalize">{pokemon.name}</p>
            </div>
            <div className="relative z-20 flex flex-wrap items-center justify-center gap-2">
              {types?.map((type) => {
                return <TypeBadge key={type} type={type} />;
              })}
            </div>
          </div>
        </Card>
      </Link>
    </button>
  );
};
