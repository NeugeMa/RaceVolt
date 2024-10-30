import React from 'react';
import './CSS/Home.css'; 

import fundo  from '../assets/RaceVolt-Banner.png';
import criancas from '../assets/image/criancas.jpg';
import arduino from '../assets/image/Arduino.jpg';

const Home = () => {
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
          <h4 className="subtitulo01"><span className="linha-subtitulo01"></span>FUTURO VELOCISTAS</h4>
              <h1 className="titulo01">Experiência Inovadora para Crianças e Jovens</h1>
              <p> Estamos em um momento crucial de transformação e precisamos ajustar nosso projeto para torná-lo mais escalável e relevante. A ideia central gira em torno da criação de uma plataforma que combina entretenimento e educação, permitindo que crianças e jovens explorem o fascinante mundo da engenharia, programação e design por meio de competições interativas com carros elétricos customizáveis. </p>
          </div>
          <img src={criancas} alt="Logo" className="intro-fundo" />
        </div>
      </section>



      <section className="eventos">
            <h4 className="subtitulo"><span className="linha-subtitulo"></span><span className="destaque">EVENTOS</span> - PREMIAÇÕES - FUTURO </h4>
            <h1 className="titulo">EVENTOS DE GAMIFICAÇÃO</h1>
                <div className="card-circulo">
                      <div class="circulo"></div>
                      <div class="circulo"></div>
                      <div class="circulo"></div>
                </div>
      </section>

      

    </div>
  );
};

export default Home;