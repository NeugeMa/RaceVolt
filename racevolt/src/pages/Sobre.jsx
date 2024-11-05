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
      <div className="text-center py-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Conheça a RaceVolt</h2>
        <p className="mb-6 text-gray-600">Nossa equipe dedicada à inovação e tecnologia</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Integrante 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="w-full h-64 overflow-hidden rounded-t-md mb-3">
              <img src={Abner} alt="Abner de Paiva Barbosa" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium mb-2">Abner de Paiva Barbosa</p>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Integrante 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="w-full h-64 overflow-hidden rounded-t-md mb-3">
              <img src={Beatriz} alt="Beatriz Vieira de Novais" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium mb-2">Beatriz Vieira de Novais</p>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Integrante 3 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="w-full h-64 overflow-hidden rounded-t-md mb-3">
              <img src={Mariana} alt="Mariana Neugebauer Dourado" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium mb-2">Mariana Neugebauer Dourado</p>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Integrante 4 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-96 h-96">
            <div className="w-full h-64 overflow-hidden rounded-t-md mb-3">
              <img src={Fernando} alt="Fernando Luiz Silva Antonio" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium mb-2">Fernando Luiz Silva Antonio</p>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Integrante 5 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="w-full h-64 overflow-hidden rounded-t-md mb-3">
              <img src={Thomas} alt="Thomas de Almeida Reichmann" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-medium mb-2">Thomas de Almeida Reichmann</p>
            <div className="flex justify-center gap-4">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sobre;