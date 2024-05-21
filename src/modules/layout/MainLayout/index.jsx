import React from 'react';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <main className="py-[50px] lg:py-[100px] relative w-[90%] lg:w-[95%] 2xl:w-[1300px] mx-auto opverflow-clip">
      <>{children}</>
    </main>
  );
};

export default MainLayout;
