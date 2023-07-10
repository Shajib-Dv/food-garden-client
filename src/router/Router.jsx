/** @format */

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Foods from "../pages/Foods/Foods";
import Orders from "../pages/Orders/Orders";
import AllCategory from "../pages/Foods/AllCategory/AllCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/foods/:category", element: <Foods /> },
      { path: "/foods", element: <AllCategory /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);
export default router;
