import React from 'react';
import '../../pages/CSS/Calendario.css';

const EventoCard = ({ data, mes, titulo, local }) => {
  return (
    <div className="evento-card">
      <div className="data">
        <h2>{data}</h2>
        <span>{mes}</span>
      </div>
      <div className="evento-card-info">
            <div className="proximo-evento">
                <h4>Próximo Evento</h4>
                <hr id='hr-calendario'/>
            </div>
            <div className="detalhes-evento">
                <h3>{titulo}</h3>
                <p className="local">{local}</p>
            </div>
        </div>
        <div className='passador'>
              
                <button className="seta-btn">
                <span className="seta">&gt; </span> 
            </button>
            
        </div>
    
    
    </div>
  );
};

const Calendario = ({ eventos }) => {
  return (
    <section className="calendario-section">
      
      <div className="card-calendario">
        {eventos.map((evento, index) => (
          <EventoCard key={index} {...evento} />
        ))}
      </div>
    </section>
  );
};

export default Calendario;
