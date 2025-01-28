import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext'
import "./carouselTestimonial.css";

export default function CarouselTestimonial() {
      const { language } = useLanguage();
      const texts = {
          es: {
              descriptionOne: "Este servicio ha cambiado mi vida por completo. ¡Muy recomendado!",
              descriptionTwo: "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
              descriptionThree: "No puedo estar más feliz con los resultados. Volveré a usar este servicio.",
              descriptionFour: "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
              
          },
          en: {
              descriptionOne: "This service has changed my life completely. Very recommended!",
              descriptionTwo: "The best experience I have had for a long time. Excellent quality.",
              descriptionThree: "I can't be more happy with the results. I will use this service again.",
              descriptionFour: "The best experience I have had for a long time. Excellent quality.",
              
          },
      };

      const testimonials = [
        {
          id: 1,
          image: "/testimonio1.png",
          name: "Juan Pérez",
          description: texts[language].descriptionOne,
        },
        {
          id: 2,
          image: "/testimonio2.png",
          name: "María González",
          description:
          texts[language].descriptionTwo,
        },
        {
          id: 3,
          image: "/testimonio1.png",
          name: "Carlos Martínez",
          description:
          texts[language].descriptionThree,
        },
        {
          id: 4,
          image: "/testimonio2.png",
          name: "María González",
          description:
          texts[language].descriptionFour,
        },
      ];

      const [currentSlide, setCurrentSlide] = useState(0);
      const carouselRef = useRef(null);

      useEffect(() => {
        const interval = setInterval(() => {
          const newIndex = (currentSlide + 1) % testimonials.length;
          setCurrentSlide(newIndex);
          scrollToSlide(newIndex);
        }, 10000); // Cambiar slide cada 10 segundos
    
        return () => clearInterval(interval);
      }, [currentSlide, testimonials.length]);

      const scrollToSlide = (index) => {
        const carousel = carouselRef.current;
        const slide = carousel?.children[index]; // Selecciona el slide correspondiente
        if (carousel && slide) {
          const slideOffset = slide.offsetLeft; // Posición del slide
          const carouselWidth = carousel.offsetWidth; // Ancho del contenedor del carousel
          const slideWidth = slide.offsetWidth; // Ancho del slide
          const offset = slideOffset - (carouselWidth - slideWidth) / 2; // Calcula el desplazamiento para centrar
          carousel.scrollTo({ left: offset, behavior: 'smooth' });
        }
      };
  return (
    <>
      <div className="carousel-container-test">
          <div className="carousel-test">
          {testimonials.map((testimonial) => (
              <div className="carousel-item-test" key={testimonial.id}>
                <div className="container-carousel-test__responsive">
                  <img
                    className="carousel-img-test"
                    src={testimonial.image}
                    alt={`Imagen de ${testimonial.name}`}
                  />
                  <p className="testimonial-description">{testimonial.description}</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
            </div>
          ))}
          </div>
      </div>
    </>
  );
}
