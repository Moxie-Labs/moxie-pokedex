import { createBrowserRouter } from "react-router-dom";
import Home from 'views/Home/Home';
import PokemonDetails from 'views/PokemonDetails/PokemonDetails';

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
  },
	{
    path: "/pokemon/:name",
    element: <PokemonDetails />,
  }
]);

export default router
