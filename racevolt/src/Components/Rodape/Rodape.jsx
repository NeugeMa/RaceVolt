// Adicionar LOGO + Arrumar formulário

function Rodape() {
    return (
        <div className="container-footer">  
        
            <div className="content-footer">
                <nav>
                    <ul className="conteudo">
                        <h4>PROJETO</h4>
                        <li>Sobre Nós</li>
                        <li>RaceVolt</li>
                        <li>Contato</li>
                    </ul>
                </nav>

                <nav>
                    <ul className="conteudo">
                        <h4>CONECTE</h4>
                        <li>Github</li>
                        <li>Linkdien</li>
                    </ul>
                </nav>
            
                <div className="forms-footer">
                    <h2>Inscreva-se para receber nossas novidades!</h2>
                    <input type="text" /> <button>EMAIL:</button>
                </div>
            </div>
        </div>
    )
}

export default Rodape 