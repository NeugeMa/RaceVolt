import './App.css'; // CSS Global
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Rodape from './Components/Rodape/Rodape';

import Contato from './pages/Contato/Contato';


function App() {
  return (
    <div className="App">
      <Cabecalho />

          <Contato />
          
      <Rodape />
    </div>
  );
}

export default App;
