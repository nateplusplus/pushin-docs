import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from './pages/ErrorPage';
import Installation from './pages/Installation';
import Composition from './pages/Composition';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
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
  ]);

return (
    <RouterProvider router={router} />
  );
}
