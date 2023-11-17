export const BasicStats = ({ height, weight, base_experience, abilities }) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase text-slate-400">Height</span>
        <span className="text-sm uppercase text-slate-600">{height / 10}m</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase text-slate-400">Weight</span>
        <span className="text-sm uppercase text-slate-600">
          {weight / 10}kg
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase text-slate-400">Base exp</span>
        <span className="text-sm uppercase text-slate-600">
          {base_experience}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm uppercase text-slate-400">Abilities</span>
        <span className="space-y-2 text-sm uppercase text-slate-600">
          {abilities.map((ability) => {
            return <p className="font-bold">{ability.ability.name}</p>;
          })}
        </span>
      </div>
    </div>
  );
};
