import React from 'react';
import fundo  from '../assets/RaceVolt-Banner.png';
import './CSS/Home.css'; // Certifique-se de criar este arquivo CSS

const Home = () => {
  return (
    <div className="container-home">
      <img src={fundo} alt="Logo" className="fundo" />
        <div className="conteudo-fundo">
          <h1>RACEVOLT</h1>
          <h4>A combinação entre inovação elétrica, competições, e a<br /> diversão de trabalhar com motores e Arduino.</h4>
          <button className="btn01">VEJA MAIS</button>
        </div>
  
      <div className="futuro-velocistas">
        <h4 className='subtitulo'>⎯⎯⎯⎯⎯⎯  FUTUROS VELOCISTAS</h4>

        <h1 className='titulo'>Experiência Inovadora para Crianças e Jovens</h1>
        <p> Estamos em um momento crucial de transformação e precisamos ajustar nosso projeto para torná-lo mais escalável e relevante. A ideia central gira em torno da criação de uma plataforma que combina entretenimento e educação, permitindo que crianças e jovens explorem o fascinante mundo da engenharia, programação e design por meio de competições interativas com carros elétricos customizáveis. </p>
      </div>

      <div className="arduino">
        <h4 className='subtitulo'>⎯⎯⎯⎯⎯⎯  POR QUE, ARDUINO?</h4>
        <h1>Carrinhos Arduino, o simples o melhor!</h1>
        <p>Por meio da ludicidade e criatividade, elas serão imersas no desafiador mundo dos esportitas e das equipe de corrida. <br />

        As competições RaceVolt são divididas em diferentes categorias, com base em nível de habilidade e objetivos dos participantes. Os participantes têm a liberdade de projetar, construir e programar seus veículos, ajustando variáveis como velocidade, eficiência energética, e estabilidade</p>


        <div className="cards-arduino">
          <h2>Modo Orgânico</h2>
          <p>Os participantes são desafiados a projetar e construir veículos que utilizem materiais sustentáveis ou recicláveis. Durante a corrida, eles devem enfrentar obstáculos que imitam condições ambientais reais, como terrenos irregulares ou zonas de vento.</p>

          <h2>Estrátegia</h2>
          <p>Cada equipe deve escolher uma inovação tecnológica a ser implementada em seu veículo (ex: melhor aerodinâmica, sistema de recuperação de energia). Eles precisam justificar sua escolha e como isso se encaixa em sua estratégia de corrida.</p>
        </div>
      </div>




    </div>
  );
};

export default Home;