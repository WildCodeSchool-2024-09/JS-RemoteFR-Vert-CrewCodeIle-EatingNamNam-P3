import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminRoleForm from "./components/adminRoleForm/AdminRoleForm";
import CategoryForm from "./components/categoryForm/CategoryForm";
import AdminPage from "./pages/adminPage/AdminPage";
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
    children: [
      {
        path: "/admin/creer-role",
        element: <AdminRoleForm />,
      },
      {
        path: "/admin/creer-categorie",
        element: <CategoryForm />,
      },
    ],
  },
]);
