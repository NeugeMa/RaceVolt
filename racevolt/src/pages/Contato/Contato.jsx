import './Contato.css';

function Contato() {
    return (
        <div className="container-contato">
            <div className="fundo-contato">
                <div className="container-intro">
                <h4>ENTRE EM CONTATO</h4>
                <h2>Vamos amar conversar com você!</h2>

                <p>Tem alguma dúvida ou deseja fazer uma pergunta? Sinta-se à vontade para nos contatar através do formulário ou pelos seguintes detalhes</p>
                </div> 
                <div className="container-intro-contato">
                    <h3>Vamos Conversar!</h3>
                    <p> +1 23 456 789 | racevolt@gmail.com.br</p>
                    <div className="linha"> </div>
                </div>
            </div>


            <div className="forms-contato">
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <input type="text" id="sobrenome" name="sobrenome" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone/ Celular:</label>
                        <input type="tel" id="telefone" name="telefone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        
        
        </div>
    );
}

export default Contato;