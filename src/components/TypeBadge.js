import { TYPE_COLORS } from "../util/constants";

export const TypeBadge = ({ type }) => {
  return (
    <div
      className="flex items-center p-1 px-3 rounded-lg select-none w-max h-max"
      style={{
        background: TYPE_COLORS[type],
      }}>
      <span className="text-sm text-white capitalize">{type}</span>
    </div>
  );
};
