import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminRoleForm from "./components/adminRoleForm/AdminRoleForm";
import CategoryForm from "./components/categoryForm/CategoryForm";
import Commentary from "./components/commentary/Commentary";
import DeleteRecipeForm from "./components/deleteRecipeForm/DeleteRecipeForm";
import DietTypeForm from "./components/dietTypeForm/DietTypeForm";
import UnitType from "./components/unitTypeForm/UnitType";
import AdminPage from "./pages/adminPage/AdminPage";
import DiscoveryLayout from "./pages/discoveryPage/DiscoveryLayout";
import RecipeDetailsPage from "./pages/recipeDetailsPage/RecipeDetailsPage";
import RecipeListPage from "./pages/recipeListPage/RecipeListPage";
import RecipeNewPage from "./pages/recipePages/RecipeNewPage";
import UserDetailPage from "./pages/userDetailPage/UserDetailPage";
import UserListPage from "./pages/userListPage/UserListPage";

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
        path: "/com",
        element: <Commentary />,
      },
      {
        path: "/liste-recette",
        element: <RecipeListPage />,
      },
      {
        path: "/recette-details/:id",
        element: <RecipeDetailsPage />,
      },
      {
        path: "/liste-utilisateur",
        element: <UserListPage />,
      },
      {
        path: "/liste-utilisateur/:id",
        element: <UserDetailPage />,
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
]);
