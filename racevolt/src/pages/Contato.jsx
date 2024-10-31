import React from "react";
import "./CSS/Contato.css";

const Contato = () => {
    return (
        <>
            <div className="container-contato">
                <div className="linha-contato"></div>
                <div className="container-heads">
                    <div>
                        <p>ENTRE EM CONTATO</p>
                        <h1>Vamos amar conversar com você!</h1>
                    </div>
                    <p>
                        Tem alguma dúvida ou deseja fazer uma consulta? Sinta-se à vontade
                        para entrar em contato conosco pelo formulário ou pelos detalhes a
                        seguir.
                    </p>
                </div>
                <div className="container-heads container-heads-info">
                    <h2>Vamos Conversar!</h2>
                    <div className="contact-info">
                        <p>+1 23 456 789</p>
                        <p>racevolt@gmail.com.br</p>
                    </div>
                </div>
            </div>
            <div className="contato-form">
                <form>
                    <div className="inputs-container">
                        <div className="input-group">
                            <label>
                                Nome:
                                <input name="nome" type="text" />
                            </label>
                            <label>
                                Sobrenome:
                                <input name="sobrenome" type="text" />
                            </label>
                        </div>
                        <div className="input-group">
                            <label>
                                Email:
                                <input name="email" type="email" />
                            </label>
                            <label>
                                Telefone:
                                <input name="telefone" type="tel" />
                            </label>
                        </div>
                    </div>
                    <label>
                        Mensagem:
                        <textarea name="mensagem" rows="5"></textarea>
                    </label>
                    <button>Enviar</button>
                </form>
            </div>
        </>
    );
};

export default Contato;
