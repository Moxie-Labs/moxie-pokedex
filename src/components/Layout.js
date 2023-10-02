import { Pokeball } from "../util/svgs";

export const Layout = ({ children }) => {
  return (
    <div className="lexend">
      <div className="w-full min-h-[100dvh] bg-slate-100 px-4">
        <div className="fixed top-0 left-0 text-green-500 -translate-x-1/3 -translate-y-1/4">
          <Pokeball className="rotate-[15deg] h-[800px] w-[800px] opacity-10 partialRotation" />
        </div>
        {children}
      </div>
    </div>
  );
};
