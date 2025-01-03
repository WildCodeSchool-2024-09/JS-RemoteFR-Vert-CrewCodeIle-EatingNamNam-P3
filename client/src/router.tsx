import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DiscoveryPage from "./pages/DiscoveryPage";

export const router = createBrowserRouter([
  {
    // The root path
    element: <App />,
    children: [
      {
        path: "/",
        element: <DiscoveryPage />,
      },
    ], // Renders the App component for the home page
  },
  // Try adding a new route! For example, "/about" with an About component
]);
