import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Installation from './pages/Installation';
import Composition from './pages/Composition';
import About from "./pages/About";
import Target from "./pages/Target";
import Api from "./pages/Api";
import SimpleExample from './pages/SimpleExample';
import ResponsiveExample from './pages/ResponsiveExample';
import CatExample from './pages/CatExample';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/installation",
      element: <Installation />,
    },
    {
      path: "/composition",
      element: <Composition />,
    },
    {
      path: "/target",
      element: <Target />,
    },
    {
      path: "/api",
      element: <Api />,
    },
    {
      path: "/examples/simple",
      element: <SimpleExample />,
    },
    {
      path: "/examples/responsive",
      element: <ResponsiveExample />,
    },
    {
      path: "/examples/cat",
      element: <CatExample />,
    },
  ]);

return (
    <RouterProvider router={router} />
  );
}
