import React from 'react';
import './CSS/Sobre.css'
import time from '../assets/time.png'
import Abner from '../assets/Abner.jpeg'
import Beatriz from '../assets/Beatriz.jpeg'
import Mariana from '../assets/Mariana.jpeg'
import Fernando from '../assets/Fernando.jpeg'
import Thomas from '../assets/Thomas.jpeg'
import linkedin from '../assets/linkedin.jpeg'
import github from '../assets/github.jpeg'

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
          <div className="primeira-linha">
            <div className="card-item position-top">
              <img src={Abner} alt="" />
              <p>Abner de Paiva Barbosa</p>
              <div className="rede-social">
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
            </div> 
            <div className="card-item">
              <img src={Beatriz} alt="" />
              <p>Beatriz Vieira de Novais</p>
              <div className="rede-social">
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
            <div className="card-item">
              <img src={Mariana} alt="" />
              <p>Mariana Neugebauer Dourado</p>
              <div className="rede-social">
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
          </div>
          <div className="segunda-linha">
            <div className="card-item">
              <img src={Fernando} alt="" />
              <p>Fernando Luiz Silva Antonio</p>
              <div className="rede-social">
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
            <div className="card-item position-top">
              <img src={Thomas} alt="" />
              <p>Thomas de Almeida Reichmann</p>
              <div className="rede-social">
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;