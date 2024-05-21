import { STAT_COLORS } from "../util/constants";

export const HighLevelStats = ({ stats }) => {
  const getHighestStat = (stats) => {
    const highestStat = stats.reduce((acc, stat) => {
      return acc.base_stat > stat.base_stat ? acc : stat;
    });
    return highestStat;
  };

  const highestStat = getHighestStat(stats);
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <div className="flex flex-col gap-y-4">
        {stats?.map(({ stat, base_stat }) => {
          const percentageToHighestStat =
            (base_stat / highestStat.base_stat) * 100;
          return (
            <div className="flex gap-2">
              <span className="w-1/2 text-xs text-right uppercase text-slate-600">
                {stat.name}
              </span>
              <div className="w-full h-4 overflow-hidden transition-all rounded-full bg-slate-200">
                <div className="h-full load">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentageToHighestStat}%`,
                      background: STAT_COLORS[stat.name],
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
