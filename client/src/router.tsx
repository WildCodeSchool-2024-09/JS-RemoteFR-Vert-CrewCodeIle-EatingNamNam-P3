import { createBrowserRouter } from "react-router-dom";
import App from "./App";
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
]);
