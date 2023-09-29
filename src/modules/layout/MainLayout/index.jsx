import React from 'react';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <main className="py-[100px] w-[95%] lg:w-[95%] mx-auto opverflow-clip">
      <>{children}</>
    </main>
  );
};

export default MainLayout;
