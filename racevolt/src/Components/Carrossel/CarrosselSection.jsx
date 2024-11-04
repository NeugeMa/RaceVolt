import React from 'react';
import '../../pages/CSS/Carrossel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules'; // Importa os módulos necessários




const CarrosselSection = ({slides }) => {
 
  return (
    <section className="carrossel_cotainer">
    <Swiper style={{  padding: '2.5rem' }}
        spaceBetween={40}
        slidesPerView={4} 
        navigation={true}
        
        modules={[Navigation, Pagination]}
    >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              
              <img src={slide.content} alt={slide.title} class="carrossel-img"/>
              <h3 className='premio_title'>{slide.title}</h3>
              <span className='resgate'>RESGATAR</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarrosselSection;
