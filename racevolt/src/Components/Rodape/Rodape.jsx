import { Link } from "react-router-dom";
import logo from '../../assets/Logo-Ficaps.png';
// Adicionar LOGO + Arrumar formulário


const Rodape = () => {
    const handleSubmit = () => {
        alert('E-mail enviado com sucesso!')
        document.querySelector('.form-input').value = '';
    }       

    return (
            <div className="container-footer">  
                <img src={logo} alt="Logo" className="logo" />
                    <div className="content-footer">
                        <nav>
                            <ul className="conteudo">
                                <h4>PROJETO</h4>
                                    <li> <Link to="/sobre" className="url text-gray-100">Sobre Nós</Link> </li> 
                        <li> <Link to="/" className="url text-gray-100">RaceVolt</Link> </li> 
                        <li> <Link to="/contato" className="url text-gray-100">Contato</Link> </li> 
                            </ul>
                        </nav>

                        <nav>
                            <ul className="conteudo">
                                <h4>CONECTE</h4>
                        <li> <Link to="https://github.comhttps://github.com/NeugeMa/RaceVolt" className="url text-gray-100">GitHub</Link> </li> 
                                <li> <Link to="https://linkedin.com" className="url text-gray-100">LinkedIn</Link> </li> 
                            </ul>
                        </nav>

                        <nav>
                            <ul className="conteudo">
                                <h4>MAIS+</h4>
                                    <li> <Link to="/" className="url text-gray-100">Premiações</Link> </li> 
                                    <li> <Link to="/" className="url text-gray-100">Doações</Link> </li> 
                            </ul>
                        </nav>
                    
                        <div className="forms-footer">
                    <h2 className="text-gray-100">Inscreva-se para receber nossas novidades!</h2>
                            <div className="form-container">
                                <input type="text" className="form-input text-gray-100" /> 
                                <button className="form-button text-gray-100" onClick={handleSubmit}>EMAIL:</button>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Rodape 