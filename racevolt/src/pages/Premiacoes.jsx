import './CSS/Premiacoes.css'
import CarrosselSection from '../Components/Carrossel/CarrosselSection';
import premio from '../assets/image/premios/premio-carro.png';
import kits from '../assets/image/premios/kits-arduino.png';
import motores from '../assets/image/premios/motores-arduino.png';
import sensores from '../assets/image/premios/sensores-arduino.png';
import carrinho from '../assets/image/premios/premio-carroarduino.png';
import Calendario from '../Components/Calendario/Calendario';
import tecnologico from '../assets/image/premios/premio-tecnologico.png'; 
import tickets from '../assets/image/premios/premio-ticket.png'; 


function Premiacoes() {


        const eventos = [
        { data: '10', mes: 'Outubro', titulo: 'Corrida dos Inovadores', local: 'Expo Center Norte, SP' },
        { data: '15', mes: 'Novembro', titulo: 'Workshop de Engenharia', local: 'Centro de Convenções, SP' },
        ];    
        const slides = [
          { title: 'KITS Arduino', content:  kits},
          { title: 'Motores Arduino', content: motores },
          { title: 'Sensores Arduino', content: sensores},
          { title: 'KITS Carrinho Segue Linha', content: carrinho},
          { title: 'Ingressos', content:  tickets},
          { title: 'Produtos Tecnologicos', content: tecnologico}
        ];
      
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
                        <button className="premio-conteudo-button">Leia Mais Sobre
                        <span className="material-symbols-outlined">arrow_downward</span>
                        </button>

                        <h2 className="card-info-container-title">INFORMAÇÕES</h2>

                        <div className="card-info-container"> 
                            <div className="card-info">
                                <h3>DATA CORRIDA</h3>
                                <p className="card-info-data">10/10/2024</p>
                            </div>

                            <div className="card-info">
                                <h3>LOCAL</h3>
                                <p className="card-info-data">Expo Center Norte,SP</p>
                            </div>
                        </div>
                    </div>

                       
                    <img src={premio} alt="Molde Carro FE" className="premio-imagem" />

                </div> 
            </main>
            
                    {/* Section 4 */}
                    <section className='section'>
                        <div class="title-with-line"><h2>Premiações RaceVolt</h2> <hr/></div>
                    
                         <CarrosselSection slides={slides} />
                    </section> 
        
                {/* Section 5 */}
                <section className="section section-5">
                <div class="title-with-line"><h2>Título dos Calendários</h2> <hr/></div>
                <Calendario eventos={eventos}/>
                </section>
           
        </div>
    )
}

export default Premiacoes; 
