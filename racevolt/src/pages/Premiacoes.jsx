import './CSS/Premiacoes.css'
import premio from '../assets/image/premios/premio-carro.png';

function Premiacoes() {
    return (
        <div className="container">
            <h4 className="sub01">EVENTOS - PREMIAÇÕES - FUTURO</h4>
            <h1 className="tit01">PREMIAÇÕES</h1>
            <h3 className="sub-tit01">VEJA QUAIS OS PRÊMIOS DISPONIVÉIS ATUALMENTE</h3>

            <section className="introducao">
            <div className="card-introducao">
                <h1>O que eu posso encontrar aqui?</h1>
                <p>No site das competições RaceVolt, os participantes podem ganhar diversas premiações que podem refletir suas habilidades e inovações.</p>
                <span>Fique por dentro das nossas campanhas e novidades. Assine: </span>
            </div>
            <div className="card-introducao">
                <h4 className="sub02"><span className="linha-sub02"></span>Overview</h4>
                <p>As premiações incluem reconhecimentos para os veículos mais rápidos, os mais eficientes em termos de energia e os que apresentam melhor estabilidade. Além disso, há prêmios especiais para as inovações tecnológicas e o design mais criativo. E prêmios que possuem pontos para pegar.</p>
                <p>Essa diversidade de categorias estimula a criatividade e o aprendizado, tornando cada competição uma oportunidade única de evolução e reconhecimento no mundo da engenharia automotiva.</p>
            </div>
            </section>

            <main className="premio">
                <div className="card-premio">
                    
                    <div className="premio-conteudo">
                        <h4>Premiação Anual</h4>
                        <h1>Molde Carro FE</h1>

                        <p>Essa competição, conhecida como "Corrida dos Inovadores", acontece em um circuito desafiador, projetado para testar não apenas a velocidade, mas também a eficiência e a habilidade de manobra dos veículos.
                        Este ano a RaceVolt, estará presenteado um molde do Gen 2 EVO nosso carro com a aparência mais “agressiva” </p>
                        <button>Leia Mais Sobre</button>

                        <div className="card-info">
                        <h3>INFORMAÇÕES</h3>
                            <h5>DATA CORRIDA</h5>
                            <p>10/10/2024</p>
                        </div>

                        <div className="card-info">
                            <h5>DATA CORRIDA</h5>
                            <p>10/10/2024</p>
                        </div>
                    </div>
                    <img src={premio} alt="Molde Carro FE" className="premio-imagem" />

                </div> 
            </main>
            
            <h2> Premiações Arduino</h2>



        </div>
    )
}

export default Premiacoes; 