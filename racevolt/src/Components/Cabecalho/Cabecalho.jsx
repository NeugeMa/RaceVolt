import { Link, useLocation } from "react-router-dom";

function Cabecalho() {
    const location = useLocation();

    const headerStyles = {
        color: location.pathname === "/contato" ? "white" : "inherit",
    };

    return (
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 sticky top-0 bg-white z-50 shadow-md">
            <div className="flex h-16 items-center justify-between">
            <h1 className="text-4xl font-bold text-center py-4">RACEVOLT</h1>
                {/* Mobile Menu Button 
                <div className="md:hidden flex items-center">
                    <button className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                        */}

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4 text-gray-700">
                        <li>
                            <Link to="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre" className="hover:text-blue-500 transition-colors duration-200">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link to="/contato" className="hover:text-blue-500 transition-colors duration-200">Contato</Link>
                        </li>
                        <li>
                            <Link to="/premiacoes" className="hover:text-blue-500 transition-colors duration-200">Premiações</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Cabecalho;