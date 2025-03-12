import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./carouselTestimonial.css";

export default function CarouselTestimonial() {
  const { language } = useLanguage();
  const carouselRef = useRef(null);
  const texts = {
    es: {
      descriptionOne:
        "Contratamos el servicio de soporte técnico de esta empresa para nuestra pequeña empresa y estamos encantados con los resultados. Nos brindan una atención personalizada y se adaptan a nuestras necesidades específicas. Gracias a su ayuda, hemos podido optimizar nuestros sistemas y mejorar la productividad de nuestro equipo. ¡Son un aliado invaluable para nuestro negocio!",
      descriptionTwo:
        "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
      descriptionThree:
        "Necesitábamos una página web moderna y funcional para nuestra empresa y el equipo de desarrollo hizo un trabajo excelente. Desde el primer momento, nos escucharon atentamente para entender nuestras necesidades y objetivos. Nos guiaron en todo el proceso de diseño y desarrollo, y nos entregaron una página web que supera nuestras expectativas. Estamos muy contentos con el resultado y hemos recibido comentarios muy positivos de nuestros clientes. ¡Recomendamos ampliamente sus servicios!.",
      descriptionFour:
        "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
    },
    en: {
      descriptionOne:
        "We hired this company's technical support service for our small business, and we are delighted with the results. They provide personalized attention and adapt to our specific needs. Thanks to their help, we have been able to optimize our systems and improve our team's productivity. They are an invaluable ally for our business!",
      descriptionTwo:
        "The best experience I have had for a long time. Excellent quality.",
      descriptionThree:
        "We needed a modern and functional website for our company, and the development team did an excellent job. From the very beginning, they listened carefully to understand our needs and goals. They guided us through the entire design and development process and delivered a website that exceeded our expectations. We are very happy with the result and have received highly positive feedback from our clients. We highly recommend their services",
      descriptionFour:
        "The best experience I have had for a long time. Excellent quality.",
    },
  };

  const testimonials = [
    {
      id: 1,
      image: "/testimonio-1.png",
      name: "Conscious body",
      description: texts[language].descriptionOne,
    },
    {
      id: 2,
      image: "/testimonio2.png",
      name: "Sofia Montiel",
      description: texts[language].descriptionTwo,
    },
    {
      id: 3,
      image: "/sky-tech.png",
      name: "Skytech",
      description: texts[language].descriptionThree,
    },
    {
      id: 4,
      image: "/testimonio2.png",
      name: "María González",
      description: texts[language].descriptionFour,
    },
    {
      id: 5,
      image: "/testimonio2.png",
      name: "Matias Hernandez",
      description: texts[language].descriptionFour,
    },
    {
      id: 6,
      image: "/testimonio2.png",
      name: "Julian Marcone",
      description: texts[language].descriptionFour,
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let interval;
    let currentIndex = 1; 

    const firstClone = { ...testimonials[0], id: "first-clone" };
    const lastClone = { ...testimonials[testimonials.length - 1], id: "last-clone" };

    const extendedTestimonials = [lastClone, ...testimonials, firstClone];

    function scrollToCard(index, smooth = true) {
      const cardWidth = carousel.children[0].offsetWidth + 20;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: smooth ? "smooth" : "auto",
      });
    }

    function autoScroll() {
      currentIndex++;
      scrollToCard(currentIndex);

      if (currentIndex === extendedTestimonials.length - 1) {
        setTimeout(() => {
          currentIndex = 1;
          scrollToCard(currentIndex, false);
        }, 500);
      }
    }

    setTimeout(() => scrollToCard(currentIndex, false), 100);
    interval = setInterval(autoScroll, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCard = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
    carouselRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className="contenido-2">
        <div className="carousel-2" ref={carouselRef}>
        {[
          { ...testimonials[testimonials.length - 1], id: "last-clone" },
          ...testimonials,
          { ...testimonials[0], id: "first-clone" },
        ].map((testimonial) => (
          <div className="card-2" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="img-card-2" />
            <p className="testimonial-description">{testimonial.description}</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
        </div>
        <button className="prev-button-test" onClick={() => scrollToCard(-1)}>&#10094;</button>
        <button className="next-button-test" onClick={() => scrollToCard(1)}>&#10095;</button>
      </div>
    </>
  );
}
