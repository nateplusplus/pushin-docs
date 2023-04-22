import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { routes } from './routes';
import { routes as v5Routes } from "./versions/v5/routes";

export default function App() {

  const router = createBrowserRouter([
    ...routes,
    ...v5Routes,
  ]);

return (
    <RouterProvider router={router} />
  );
}
