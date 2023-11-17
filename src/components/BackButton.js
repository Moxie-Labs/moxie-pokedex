import { Link } from "react-router-dom";

export const BackButton = ({ to = "/" }) => {
  return (
    <Link
      className="flex items-center px-3 py-1 transition-all bg-red-600 rounded-2xl glow-red hover:scale-105 focus:scale-105 active:scale-95"
      to={to}>
      <button>
        <p className="flex items-center justify-center gap-2 text-white">
          <span className="text-2xl">←</span>
          <span>Go back</span>
        </p>
      </button>
    </Link>
  );
};
