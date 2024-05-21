import { usePokemon } from "../context/PokemonContext";
import { Card } from "./Card";
import { Sort } from "./Sort";
import { TypeFilter } from "./TypeFilter";
import { ReactComponent as FilterIcon } from "../images/filter.svg";
import { useLayout } from "../context/LayoutContext";

export const Filters = () => {
  const { typeFilter, sort, updateTypeFilter, updateSort } = usePokemon();
  const { toggleDrawer } = useLayout();
  const isFilterModified = typeFilter !== "All" || sort !== "None";

  const resetFilter = () => {
    updateTypeFilter("All");
    updateSort("None");
  };

  return (
    <Card className="relative flex flex-col w-full gap-4 px-6 py-4 overflow-x-scroll sm:flex-row sm:items-end hide-scroll">
      <div className="flex flex-col gap-4 md:flex-row min-w-max">
        <div className="flex flex-wrap justify-between gap-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <label className="text-slate-400">
              Sort <span className="text-black sm:hidden">: {sort}</span>
            </label>
            <label className="text-slate-400">
              Type{" "}
              <span className="text-black capitalize sm:hidden">
                : {typeFilter}
              </span>
            </label>
          </div>
          <div>
            <button
              className="p-2 text-2xl rounded-xl hover:bg-slate-100"
              onClick={toggleDrawer}>
              <FilterIcon />
            </button>
          </div>
        </div>

        <div className="hidden gap-4 sm:flex">
          <Sort />
          <TypeFilter />
        </div>
      </div>
      {isFilterModified && (
        <button
          className="h-12 p-2 px-4 text-xs text-red-500 bg-red-100 rounded-xl min-w-max"
          onClick={resetFilter}>
          Reset filters
        </button>
      )}
    </Card>
  );
};
