import { Suspense } from 'react';
import './App.css';
import Router from './routes';
import { Icon } from '@iconify/react';

function App() {
  return (
    <Suspense
      fallback={
        <Icon
          icon="line-md:loading-twotone-loop"
          className="mt-[40px] text-rose-500"
        />
      }
    >
      <Router />
    </Suspense>
  );
}

export default App;
