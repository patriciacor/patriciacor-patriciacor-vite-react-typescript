import ReactDOM from 'react-dom/client'
import './index.css'
import { Details, Home } from './pages';
import PokeProvider from './context/PokeContextApi';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/:pokeId",
        element: <Details/>,
      }
  ]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <PokeProvider>

    <RouterProvider router={router} />
 
</PokeProvider> 
)
