import { cn } from "../util/functions";
import { usePokemon } from "../context/PokemonContext";
import { SORT_OPTIONS } from "../util/constants";

export const Sort = () => {
  const { updateSort, sort } = usePokemon();

  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-slate-400">Sort</label>
      <div className="p-2 bg-slate-100 rounded-xl">
        <div className="flex flex-col gap-2 overflow-hidden sm:items-center sm:flex-row">
          {SORT_OPTIONS.map((value) => {
            const isActive = sort === value;
            return (
              <button
                key={value}
                className={cn(
                  "sm:p-2 sm:px-4 p-4 rounded-xl hover:bg-slate-300 hover:text-slate-800 text-xs",
                  isActive &&
                    "bg-slate-400 text-white hover:bg-slate-400 hover:text-white"
                )}
                onClick={() => updateSort(value)}>
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
