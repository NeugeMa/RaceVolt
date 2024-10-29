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
          <h4 className="subtitulo"><span className="linha-subtitulo"></span>FUTURO VELOCISTAS</h4>
              <h1 className="titulo">Experiência Inovadora para Crianças e Jovens</h1>
              <p> Estamos em um momento crucial de transformação e precisamos ajustar nosso projeto para torná-lo mais escalável e relevante. A ideia central gira em torno da criação de uma plataforma que combina entretenimento e educação, permitindo que crianças e jovens explorem o fascinante mundo da engenharia, programação e design por meio de competições interativas com carros elétricos customizáveis. </p>
          </div>
          <img src={criancas} alt="Logo" className="intro-fundo" />
        </div>
      </section>

      <main className="arduino">
        <div className="arduino-fundo">
          <div className="conteudo-arduino">
          <h4 className="subtitulo02"><span className="linha-subtitulo02"></span>POR QUE, ARDUINO?</h4>

              <h1 className="titulo">Carrinhos Arduino, o simples o melhor!</h1>
              <p>Por meio da ludicidade e criatividade, elas serão imersas no desafiador mundo dos esportitas e das equipe de corrida. <br />

              As competições RaceVolt são divididas em diferentes categorias, com base em nível de habilidade e objetivos dos participantes. Os participantes têm a liberdade de projetar, construir e programar seus veículos, ajustando variáveis como velocidade, eficiência energética, e estabilidade</p>

              </div>
              <img src={arduino} alt="Logo" className="intro-fundo" />
          </div>
      </main>




    </div>
  );
};

export default Home;