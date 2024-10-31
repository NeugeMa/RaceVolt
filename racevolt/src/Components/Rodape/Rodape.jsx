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
                                    <li> <Link to="/sobre" className="url">Sobre Nós</Link> </li> 
                                    <li> <Link to="/" className="url">RaceVolt</Link> </li> 
                                    <li> <Link to="/contato" className="url">Contato</Link> </li> 
                            </ul>
                        </nav>

                        <nav>
                            <ul className="conteudo">
                                <h4>CONECTE</h4>
                                <li> <Link to="https://github.comhttps://github.com/NeugeMa/RaceVolt" className="url">GitHub</Link> </li> 
                                <li> <Link to="https://linkedin.com" className="url">LinkedIn</Link> </li> 
                            </ul>
                        </nav>

                        <nav>
                            <ul className="conteudo">
                                <h4>MAIS+</h4>
                                    <li> <Link to="/" className="url">Premiações</Link> </li> 
                                    <li> <Link to="/" className="url">Doações</Link> </li> 
                            </ul>
                        </nav>
                    
                        <div className="forms-footer">
                            <h2>Inscreva-se para receber nossas novidades!</h2>
                            <div className="form-container">
                                <input type="text" className="form-input" /> 
                                <button className="form-button" onClick={handleSubmit}>EMAIL:</button>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Rodape 