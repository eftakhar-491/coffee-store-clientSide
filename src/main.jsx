import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AddCoffee from "./components/Home/AddCoffee.jsx";
import PopularProducts from "./components/Home/PopularProducts.jsx";
import Hero from "./components/Home/Hero.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          // {
          //   path: "/",
          //   element: <Hero />,
          // },
          {
            path: "/",
            element: <PopularProducts />,
          },
          {
            path: "/add-coffee",
            element: <AddCoffee />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
