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

export default function Home() {
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

      <div className="flex flex-col gap-8 mt-8">
        <section className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 pl-2">FUTURO VELOCISTAS</h4>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Experiência Inovadora para Crianças e Jovens</h1>
              <p className="text-gray-700">
                Estamos em um momento crucial de transformação e precisamos ajustar nosso projeto para torná-lo mais escalável e relevante...
              </p>
            </div>
            <img src={criancas} alt="Logo" className="lg:w-1/2 mt-4 lg:mt-0 w-full rounded-lg" />
          </div>
        </section>
      </div>

      <main className="projeto-arduino">
        <h4 className="sub04"><span className="linha-sub04"></span>POR QUE, ARDUINO?</h4>
        <h1 className="tit04">Carrinhos Arduinos, o simples o melhor!</h1>
        <div className="container-arduino">
          <div className="texto-explicacao">
            <p>Por meio da ludicidade e criatividade, elas serão imersas no desafiador mundo dos esportitas e das equipe de corrida.</p>
            <p>As competições RaceVolt são divididas em diferentes categorias, com base em nível de habilidade e objetivos dos participantes. Os participantes têm a liberdade de projetar, construir e programar seus veículos, ajustando variáveis como velocidade, eficiência energética, e estabilidade</p>
            <div className="card">
              <div className="card-tit">
                <img src={organico} alt="Representação do Modo Orgânico" className="icon" />
                <h2 className="texto-tit">Modo Orgânico</h2>
              </div>
              <p className="card-p">Os participantes são desafiados a projetar e construir veículos que utilizem materiais sustentáveis ou recicláveis. Durante a corrida, eles devem enfrentar obstáculos que imitam condições ambientais reais, como terrenos irregulares ou zonas de vento.</p>
            </div>

            <div className="card">
              <div className="card-tit">
                <img src={estrategia} alt="Representação do Estratégia" className="icon" />
                <h2 className="texto-tit">Estratégia</h2>
              </div>
              <p className="card-p">Cada equipe deve escolher uma inovação tecnológica a ser implementada em seu veículo (ex: melhor aerodinâmica, sistema de recuperação de energia). Eles precisam justificar sua escolha e como isso se encaixa em sua estratégia de corrida.</p>
            </div>
          </div>
          <img src={arduino} alt="Projeto-Carrinho Segue Linha" className="projeto-img" />
        </div>
      </main>

      <section className="p-4 bg-white shadow-md rounded-lg">
        <h4 className="text-lg font-semibold mb-2 border-l-4 border-green-500 pl-2">EVENTOS - PREMIAÇÕES - FUTURO</h4>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">EVENTOS DE GAMIFICAÇÃO</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-db rounded-full flex items-center justify-center overflow-hidden">
              <img src={stand} alt="Stand" className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-center">Stand em polos comerciais populares</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-db rounded-full flex items-center justify-center overflow-hidden">
              <img src={pista} alt="Pista de Corrida" className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-center">Personalização de Carrinhos</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-db rounded-full flex items-center justify-center overflow-hidden">
              <img src={premio} alt="Premiação" className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-center">Competição concorrendo a prêmios</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 rounded-lg bg-cover bg-a bg-center">
        <div className="w-full md:w-1/2 rounded-lg" />
        <div className="max-w-full py-40  md:w-1/2 p-5">
          <h1 className="text-xl font-bold mb-2">Faça seu cadastro para receber as últimas NOVIDADES:</h1>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Seu email" />
          <button onClick={handleSubmit} className="w-full mt-2 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">EMAIL</button>
          <span className="block mt-2 text-sm text-gray-600">ESTE E-MAIL DEVE SER DE SEU RESPONSÁVEL LEGAL</span>
        </div>
      </section>

      <section className="p-4 shadow-md rounded-lg">
        <h4 className="text-lg font-semibold mb-2 border-l-4 border-red-500 pl-2">EVENTOS - PREMIAÇÕES - FUTURO</h4>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">PREMIAÇÕES</h1>
        <h3 className="text-lg font-semibold mb-4">VEJA QUAIS OS PRÊMIOS DISPONÍVEIS ATUALMENTE</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 rounded-lg p-6 bg-cover bg-i1">
            <div>
              <h2 className="text-xl font-bold mb-2 text-white">Kits Arduino</h2>
              <p className='text-white'>As premiações nas competições RaceVolt podem ser diversas e estimulantes...</p>
              <button className="mt-2 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">VEJA MAIS</button>
            </div>
          </div>

          <div className="bg-gray-200 bg-cover bg-i2 rounded-lg p-4">

            <div>
              <h2 className="text-xl font-bold mb-2 text-white">Vouchers/Ingressos</h2>
              <p className='text-white'>As premiações nas competições RaceVolt podem ser diversas e estimulantes...</p>
              <button className="mt-2 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">VEJA MAIS</button>
            </div>
          </div>

          <div className="bg-gray-200 bg-cover bg-i3 rounded-lg p-4">
            <div className='bg-a'>
              <h2 className="text-xl font-bold mb-2 text-white">Produtos Tecnológicos</h2>
              <p className='text-white'>As premiações nas competições RaceVolt podem ser diversas e estimulantes...</p>
              <button className="mt-2 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">VEJA MAIS</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};