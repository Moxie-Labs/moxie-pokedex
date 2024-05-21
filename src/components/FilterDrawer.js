import Drawer from "react-modern-drawer";
import { useLayout } from "../context/LayoutContext";
import { Sort } from "./Sort";
import { TypeFilter } from "./TypeFilter";

export const FilterDrawer = () => {
  const { drawer, toggleDrawer } = useLayout();
  return (
    <Drawer
      className="flex flex-col p-4 rounded-t-2xl gap-y-10"
      open={drawer}
      onClose={() => toggleDrawer((prev) => !prev)}
      direction="bottom"
      size={"90dvh"}
      animationTime={250}>
      <div className="overflow-x-scroll">
        <Sort />
      </div>
      <TypeFilter />
      <button
        className="p-4 mt-auto text-white bg-black rounded-2xl"
        onClick={() => toggleDrawer((prev) => !prev)}>
        Close filter
      </button>
    </Drawer>
  );
};
