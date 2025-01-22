import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import DiscoveryPage from "./pages/DiscoveryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscoveryPage />,
  },
  {
    element: <App />,
    children: [{}],
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
