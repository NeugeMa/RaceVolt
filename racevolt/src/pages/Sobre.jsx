import React from 'react';
import './CSS/Sobre.css'
import time from '../assets/time.png'

const Sobre = () => {
  return (
    <div className='principal'>
      <div className='flex'>
        <div className="racevolt">
          <h4 className='subtitulo'><span className='linha-subtitulo'></span>SOBRE NÓS</h4>
          <p className='titulo'>
            <span className='titulo-race'>Racevolt :</span>
            Inovação e Sustentabilidade no Mundo das Corrida</p>
        </div>
        <div className='info-grupo'>
          <p>A <span>RaceVolt</span> representa a união perfeita entre potência e consciência ecológica, impulsionando o futuro da mobilidade.</p>
          <p>Um grupo de trabalho formado por entusiastas da mobilidade elétrica e da tecnologia, dedicado a desenvolver soluções inovadoras para o mundo das corridas.</p>
        </div>
      </div>
      <div className='imagem-time'>
        <img src={time} alt="imagem do nosso time desenvolvedor da racevolt"/>
      </div>
      <div className="proposta">
        <div className='missao'>
          <h2>Nossa Misão</h2>
          <h3>Carrinhos Arduino x FE</h3>
          <p>A principal missão do RaceVolt é na criação de carrinhos eletrícos que possam correr entre si e também promover a consciência ecológica. </p>
          <p>Se envolvendo também em eventos e competições que destacam a importância da mobilidade elétrica. </p>
        </div>
        <div className='visao'>
          <h2>Nossa Visão</h2>
          <h3>Toda mudança precisa de um ínicio</h3>
          <p>Com um olhar voltado para o futuro, o RaceVolt está na vanguarda da transformação das corridas, desafiando os limites da tecnologia e promovendo uma abordagem mais responsável e consciente para o esporte.</p>
        </div>
      </div>
      <div className="integrantes">
        <h2>Conheça a RaceVolt</h2>
        <p></p>
        <div className="cards">
          
        </div>
      </div>
    </div>
  );
};

export default Sobre;