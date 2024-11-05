import { Outlet } from "react-router-dom";
import "./App.css"; // CSS Global

import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Rodape from "./Components/Rodape/Rodape";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="min-h-screen">
          <Cabecalho />
          <Outlet />
        </div>
        <Rodape className="absolute sticky-bottom" />
      </div>
    </>
  );
}
