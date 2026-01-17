import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { Country } from "./pages/Country";
import { AppLayout } from "./components/AppLayout";
import { CountryInfo } from "./pages/CountryInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryInfo />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
