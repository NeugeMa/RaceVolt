function Cabecalho () {
    return (
        <div className="container-header">
            <h1>RaceVolt</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre Nós</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
            <button className="btn-login">Login</button>
        </div>
    )
}

export default Cabecalho