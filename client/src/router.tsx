import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import DiscoveryPage from "./pages/discoveryPage/DiscoveryPage";
import RecipeNewPage from "./pages/recipePages/RecipeNewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscoveryPage />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/creer-recette",
        element: <RecipeNewPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
