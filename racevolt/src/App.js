import './App.css'; // CSS Global
import AppRoutes from './routes.js';	

import Cabecalho from './Components/Cabecalho/Cabecalho';
import Rodape from './Components/Rodape/Rodape';

export default function App() {
  return (
    <>
      <Cabecalho />
        <AppRoutes />
      <Rodape />
    </>
  );
}