import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import reportWebVitals from "./reportWebVitals";
import Car from "./pages/Carro";
import PageNotFound from './pages/PageNotFound'
// import Premios from "./pages/Premios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contato", element: <Contato /> },
      { path: "sobre", element: <Sobre /> },
      { path: "car", element: <Car /> },
      { path: '*', element: <PageNotFound /> },
      // {path: "premios", element: <Premios />},

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
