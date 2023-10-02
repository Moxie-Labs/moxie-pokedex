import { usePokemon } from "../context/PokemonContext";
import { TYPE_SYMBOLS } from "../util/constants";

export const TypeFilter = () => {
  const { typeFilter, updateTypeFilter } = usePokemon();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-400" htmlFor="pokemonType">
        Type
      </label>
      <select
        id="pokemonType"
        className="w-full h-12 p-2 text-xs bg-slate-100 rounded-xl "
        defaultValue={typeFilter}
        value={typeFilter}
        onChange={(e) => updateTypeFilter(e.target.value)}>
        <option value="All">All</option>
        {Object.keys(TYPE_SYMBOLS).map((type) => {
          return (
            <option key={type} value={type}>
              <span className="p-2">{type.toUpperCase()}</span>
            </option>
          );
        })}
      </select>
    </div>
  );
};
