import { Link, useLocation } from "react-router-dom";

function Cabecalho() {
    const location = useLocation();

    const headerStyles = {
        color: location.pathname === "/contato" ? "white" : "inherit",
    };

    return (
            <div className="container-header">
                <h1 style={headerStyles}>RACEVOLT</h1>
                <div className="navbar">
                    <nav>
                        <ul className="navlinks">
                            <li>
                                <Link to="/" style={headerStyles}>Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre" style={headerStyles}>Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="/contato" style={headerStyles}>Contato</Link>
                            </li>
                            <li>
                                <Link to="/premiacoes" style={headerStyles}>Premiações</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default Cabecalho;