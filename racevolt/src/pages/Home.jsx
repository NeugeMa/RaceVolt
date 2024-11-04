import React from 'react';
import './CSS/Home.css';

/* Icons */
import stand from '../assets/image/icons/icon-stand.png';
import pista from '../assets/image/icons/icon-carrinho.png';
import premio from '../assets/image/icons/icon-premio.png';

import organico from '../assets/image/icons/icon-organico.png';
import estrategia from '../assets/image/icons/icon-estrategia.png';

/* Imagens */
import anuncio from '../assets/Banner-Anuncio.png'
import kits from '../assets/image/premios/premio-arduino.png';
import ticket from '../assets/image/premios/premio-ingresso.png';
import tecno from '../assets/image/premios/premio-tecnologia.png';
import fundo from '../assets/RaceVolt-Banner.png';
import criancas from '../assets/image/criancas.jpg';
import arduino from '../assets/image/Arduino.jpg';

const Home = () => {
  const handleSubmit = () => {
    alert('E-mail enviado com sucesso!')
    document.querySelector('.form-input').value = '';
} 

  return (
    <div className="container-home">
      <img src={fundo} alt="Logo" className="fundo" />
        <div className="conteudo-fundo">
          <h1>RACEVOLT</h1>
          <h4>A combinação entre inovação elétrica, competições, e a<br /> diversão de trabalhar com motores e Arduino.</h4>
          <button className="btn01">VEJA MAIS</button>
        </div>
  
      <section className="introducao">
        <div className="introducao-fundo">
          <div className="intro-conteudo">
          <h4 className="sub01"><span className="linha-sub01"></span>FUTURO VELOCISTAS</h4>
              <h1 className="tit01">Experiência Inovadora para Crianças e Jovens</h1>
              <p> Estamos em um momento crucial de transformação e precisamos ajustar nosso projeto para torná-lo mais escalável e relevante. A ideia central gira em torno da criação de uma plataforma que combina entretenimento e educação, permitindo que crianças e jovens explorem o fascinante mundo da engenharia, programação e design por meio de competições interativas com carros elétricos customizáveis. </p>
          </div>
          <img src={criancas} alt="Logo" className="intro-fundo" />
        </div>
      </section>

      <main className="projeto-arduino">
        <h4 className="sub04"><span className="linha-sub04"></span>POR QUE, ARDUINO?</h4>
        <h1 className="tit04">Carrinhos Arduinos, o simples o melhor!</h1>
          <div className="container-arduino">
            <div className="texto-explicacao">
              <p>Por meio da ludicidade e criatividade, elas serão imersas no desafiador mundo dos esportitas e das equipe de corrida.</p>
              <p>As competições RaceVolt são divididas em diferentes categorias, com base em nível de habilidade e objetivos dos participantes. Os participantes têm a liberdade de projetar, construir e programar seus veículos, ajustando variáveis como velocidade, eficiência energética, e estabilidade</p>
              <div className="card">
                <div className="card-tit">
                  <img src={organico} alt="Representação do Modo Orgânico" className="icon"/>
                  <h2 className="texto-tit">Modo Orgânico</h2>
                </div>
                <p className="card-p">Os participantes são desafiados a projetar e construir veículos que utilizem materiais sustentáveis ou recicláveis. Durante a corrida, eles devem enfrentar obstáculos que imitam condições ambientais reais, como terrenos irregulares ou zonas de vento.</p>
              </div>

              <div className="card">
                <div className="card-tit">
                  <img src={estrategia} alt="Representação do Estratégia" className="icon"/>
                  <h2 className="texto-tit">Estratégia</h2>
                </div>
                <p className="card-p">Cada equipe deve escolher uma inovação tecnológica a ser implementada em seu veículo (ex: melhor aerodinâmica, sistema de recuperação de energia). Eles precisam justificar sua escolha e como isso se encaixa em sua estratégia de corrida.</p>
              </div>
            </div>
            <img src={arduino} alt="Projeto-Carrinho Segue Linha" className="projeto-img"/>
          </div>

      </main>

      <section className="eventos">
          <h4 className="sub01"><span className="linha-sub01"></span><span className="destaque">EVENTOS</span> - PREMIAÇÕES - FUTURO</h4>
          <h1 className="tit01">EVENTOS DE GAMIFICAÇÃO</h1>

          <div className="container-eventos">
            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={stand} alt="Stand" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Stand em polos comerciais populares</p>
            </div>

            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={pista} alt="Pista de Corrida" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Personalização de Carrinhos</p>
            </div>

            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={premio} alt="Stand" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Competição concorrendo a prêmios</p>
            </div>
          </div> 
      </section>

      <section className="anuncio">
        <img src={anuncio} alt="Banner Anúncio-RaceVolt" className="anuncio-img"/>
          <div className="conteudo-anuncio">
              <h1>Faça seu cadastro para receber as úlimas NOVIDADES:</h1>
              <input type="text" className="anuncio-input" /> 
              <button className="anuncio-button" onClick={handleSubmit}>EMAIL:</button>
                <span>ESTE E-MAIL DEVE SER DE SEU RESPONSÁVEL LEGAL</span>
          </div>
      </section>

      <section className="premiacoes">
        <h4 className="sub02"><span className="linha-sub02"></span>EVENTOS - <span className="destaque">PREMIAÇÕES</span> - FUTURO</h4>
        <h1 className="tit02">PREMIAÇÕES</h1>
            <h3 className="sub-tit01">VEJA QUAIS OS PRÊMIOS DISPONIVÉIS ATUALMENTE</h3>

            <div className="container-premiacoes">
              <div className="conteudo-premiacoes">
                <img src={kits} alt="Premiação Kits-Arduinos" className="premios-img"/>
                <div class="texto-premiacoes">
                    <h2>Kits Arduino</h2>
                    <p>As premiações nas competições RaceVolt podem ser diversas e estimulantes, incentivando a criatividade e o espírito de equipe entre os participantes. Além dos tradicionais troféus e medalhas, as equipes podem receber prêmios como:</p>
                    <button>VEJA MAIS</button>
                  </div>
              </div>

              <div className="conteudo-premiacoes">
                <div className="quadrado"></div>
              </div>

              <div className="conteudo-premiacoes">
                <div className="quadrado"></div>
              </div>








            </div>

      </section>


      <section className="eventos container">
          <h4 className="sub02"><span className="linha-sub02"></span><span className="destaque">EVENTOS</span> - PREMIAÇÕES - FUTURO</h4>
          <h1 className="tit02">EVENTOS DE GAMIFICAÇÃO</h1>

          <div className="container-eventos">
            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={stand} alt="Stand" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Stand em polos comerciais populares</p>
            </div>

            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={pista} alt="Pista de Corrida" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Personalização de Carrinhos</p>
            </div>

            <div className="conteudo-eventos">
              <div className="circulo">
                <img src={premio} alt="Stand" className='img-circulo'/>
              </div>
              <p className="msg-circulo">Competição concorrendo a prêmios</p>
            </div>
          </div> 
      </section>

      <section className="anuncio">
        <img src={anuncio} alt="Banner Anúncio-RaceVolt" className="anuncio-img img-fluid"/>
          <div className="conteudo-anuncio">
              <h1>Faça seu cadastro para receber as úlimas NOVIDADES:</h1>
              <input type="text" className="anuncio-input" /> 
              <button className="anuncio-button" onClick={handleSubmit}>EMAIL:</button>
                <span>ESTE E-MAIL DEVE SER DE SEU RESPONSÁVEL LEGAL</span>
          </div>
      </section>

      <section className="premiacoes">
        <h4 className="sub03"><span className="linha-sub03"></span>EVENTOS - <span className="destaque">PREMIAÇÕES</span> - FUTURO</h4>
        <h1 className="tit03">PREMIAÇÕES</h1>
            <h3 className="sub-tit03">VEJA QUAIS OS PRÊMIOS DISPONIVÉIS ATUALMENTE</h3>

            <div className="container-premiacoes">
              <div className="conteudo-premiacoes">
                <img src={kits} alt="Premiação Kits-Arduinos" className="premios-img"/>
                <div class="texto-premiacoes">
                    <h2>Kits Arduino</h2>
                    <p>As premiações nas competições RaceVolt podem ser diversas e estimulantes, incentivando a criatividade e o espírito de equipe entre os participantes. Além dos tradicionais troféus e medalhas, as equipes podem receber prêmios como:</p>
                    <button >VEJA MAIS</button>
                  </div>
              </div>

              <div className="conteudo-premiacoes">
                <img src={ticket} alt="Vouchers/ Ingressos" className="premios-img"/>
                <div class="texto-premiacoes">
                    <h2>Vouchers/ Ingressos</h2>
                    <p>As premiações nas competições RaceVolt podem ser diversas e estimulantes, incentivando a criatividade e o espírito de equipe entre os participantes. Além dos tradicionais troféus e medalhas, as equipes podem receber prêmios como:</p>
                    <button >VEJA MAIS</button>
                  </div>
              </div>

              <div className="conteudo-premiacoes">
                <img src={tecno} alt="Produtos Tecnológicos" className="premios-img"/>
                <div class="texto-premiacoes">
                    <h2>Produtos Tecnológicos</h2>
                    <p>As premiações nas competições RaceVolt podem ser diversas e estimulantes, incentivando a criatividade e o espírito de equipe entre os participantes. Além dos tradicionais troféus e medalhas, as equipes podem receber prêmios como:</p>
                    <button >VEJA MAIS</button>
                  </div>
              </div>
            </div>
      </section>
      
    </div>
  );
};

export default Home;