import { createContext, useCallback, useContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawer((prev) => !prev);
  }, [setDrawer]);

  return (
    <LayoutContext.Provider value={{ drawer, toggleDrawer }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  return useContext(LayoutContext);
};
