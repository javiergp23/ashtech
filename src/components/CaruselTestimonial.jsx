import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./carouselTestimonial.css";


export default function CarouselTestimonial() {
  const { language } = useLanguage();
  const carouselRef = useRef(null);
  const texts = {
    es: {
      descriptionOne:
        "Este servicio ha cambiado mi vida por completo. ¡Muy recomendado!",
      descriptionTwo:
        "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
      descriptionThree:
        "No puedo estar más feliz con los resultados. Volveré a usar este servicio.",
      descriptionFour:
        "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
    },
    en: {
      descriptionOne:
        "This service has changed my life completely. Very recommended!",
      descriptionTwo:
        "The best experience I have had for a long time. Excellent quality.",
      descriptionThree:
        "I can't be more happy with the results. I will use this service again.",
      descriptionFour:
        "The best experience I have had for a long time. Excellent quality.",
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
      description: texts[language].descriptionTwo,
    },
    {
      id: 3,
      image: "/testimonio1.png",
      name: "Carlos Martínez",
      description: texts[language].descriptionThree,
    },
    {
      id: 4,
      image: "/testimonio2.png",
      name: "María González",
      description: texts[language].descriptionFour,
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children);
    const contenido = carousel.parentElement;
    const cardWidth = cards[0].offsetWidth + 20;
    const paddingOffset = (contenido.offsetWidth - cards[0].offsetWidth) / 2;

    let currentIndex = 1;
    let interval;

    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);
    
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, carousel.firstChild);

    function scrollToCard(index, smooth = true) {
      carousel.scrollTo({
        left: index * cardWidth - paddingOffset,
        behavior: smooth ? "smooth" : "auto",
      });
    }

    function autoScroll() {
      currentIndex++;
      scrollToCard(currentIndex);
      if (currentIndex === cards.length + 1) {
        setTimeout(() => {
          currentIndex = 1;
          scrollToCard(currentIndex, false);
        }, 500);
      }
    }

    setTimeout(() => scrollToCard(currentIndex, false), 100);
    interval = setInterval(autoScroll, 4000);

    carousel.addEventListener("scroll", () => {
      if (carousel.scrollLeft <= 0) {
        setTimeout(() => {
          currentIndex = cards.length;
          scrollToCard(currentIndex, false);
        }, 500);
      }
    });

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="contenido-2">
        <div className="carousel-2" ref={carouselRef}>
          {testimonials.map((testimonial) => (
            <div className="card-2" key={testimonial.id}>
              <img src={testimonial.image} alt={testimonial.name} className="img-card-2" />
              <p className="testimonial-description">{testimonial.description}</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
