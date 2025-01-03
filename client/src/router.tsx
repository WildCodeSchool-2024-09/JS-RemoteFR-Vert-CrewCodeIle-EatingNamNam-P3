import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DiscoveryPage from "./pages/DiscoveryPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <DiscoveryPage />,
      },
    ],
  },
]);
