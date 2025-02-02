import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminRoleForm from "./components/adminRoleForm/AdminRoleForm";
import CategoryForm from "./components/categoryForm/CategoryForm";
import DietTypeForm from "./components/dietTypeForm/DietTypeForm";
import RecipeIngredient from "./components/recipeIngredient/RecipeIngredient";
import UnitType from "./components/unitTypeForm/UnitType";
import AdminPage from "./pages/adminPage/AdminPage";
import DiscoveryLayout from "./pages/discoveryPage/DiscoveryLayout";
import RecipeNewPage from "./pages/recipePages/RecipeNewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscoveryLayout />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/creer-recette",
        element: <RecipeNewPage />,
      },
      {
        path: "/ajout-ing",
        element: <RecipeIngredient />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "/admin/creer-role",
        element: <AdminRoleForm />,
      },
      {
        path: "/admin/creer-categorie",
        element: <CategoryForm />,
      },
      {
        path: "/admin/creer-diet",
        element: <DietTypeForm />,
      },
      {
        path: "/admin/creer-unite",
        element: <UnitType />,
      },
    ],
  },
]);
