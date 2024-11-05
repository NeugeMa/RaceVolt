import { Outlet } from "react-router-dom";
import "./App.css"; // CSS Global

import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Rodape from "./Components/Rodape/Rodape";

export default function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Outlet />
      </div>
      <Rodape />
    </>
  );
}
