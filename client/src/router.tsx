import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminRoleForm from "./components/adminRoleForm/AdminRoleForm";
import CategoryForm from "./components/categoryForm/CategoryForm";
import DeleteRecipeForm from "./components/deleteRecipeForm/DeleteRecipeForm";
import DietTypeForm from "./components/dietTypeForm/DietTypeForm";
import UnitType from "./components/unitTypeForm/UnitType";
import AdminPage from "./pages/adminPage/AdminPage";
import DiscoveryLayout from "./pages/discoveryPage/DiscoveryLayout";
import Error404Page from "./pages/error404Page/Error404Page";
import RecipeListPage from "./pages/recipeListPage/RecipeListPage";
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
        path: "/liste-recette",
        element: <RecipeListPage />,
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
      {
        path: "/admin/supprimer-recette",
        element: <DeleteRecipeForm />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);
