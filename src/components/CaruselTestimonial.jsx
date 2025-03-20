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
        "Lo que más valoro de esta empresa es su capacidad para ofrecer soluciones a medida y su enfoque proactivo. Cada vez que surge un desafío tecnológico, ellos están allí para ofrecer las mejores recomendaciones y ejecutar de forma rápida. Definitivamente, los recomiendo a cualquier empresa que busque transformar su infraestructura IT.",
      descriptionThree:
        "Contar con los servicios de esta empresa para la selección de personal ha sido una de las mejores decisiones que hemos tomado. Su proceso de reclutamiento es exhaustivo y altamente personalizado, lo que nos permitió encontrar los perfiles ideales para cada puesto. El equipo no solo entiende nuestras necesidades técnicas, sino también la cultura de nuestra empresa, lo que garantiza que los candidatos seleccionados se integren perfectamente. Gracias a su apoyo, hemos fortalecido nuestro equipo con profesionales altamente capacitados y comprometidos.",
      descriptionFour:
        "Nos acercamos a esta empresa con la idea de desarrollar una aplicación móvil que mejorara la experiencia de nuestros usuarios. Desde el primer día, su equipo mostró un enfoque profesional y una gran comprensión de nuestras necesidades. El proceso de desarrollo fue ágil, con una comunicación constante que nos permitió estar al tanto de cada etapa. El resultado final superó nuestras expectativas: una app intuitiva, eficiente y muy bien diseñada. Gracias a ellos, ahora contamos con una herramienta que ha mejorado significativamente la interacción con nuestros clientes.",
    },
    en: {
      descriptionOne:
        "We hired this company's technical support service for our small business, and we are delighted with the results. They provide personalized attention and adapt to our specific needs. Thanks to their help, we have been able to optimize our systems and improve our team's productivity. They are an invaluable ally for our business!",
      descriptionTwo:
        "What I value most about this company is its ability to offer tailored solutions and its proactive approach. Whenever a technological challenge arises, they are there to offer the best recommendations and execute quickly. I definitely recommend them to any company looking to transform its IT infrastructure.",
      descriptionThree:
        "Using this company for our recruitment services has been one of the best decisions we've ever made. Their recruitment process is thorough and highly personalized, allowing us to find the ideal profiles for each position. The team understands not only our technical needs but also our company culture, ensuring that the selected candidates fit in perfectly. Thanks to their support, we've strengthened our team with highly trained and committed professionals.",
      descriptionFour:
        "We approached this company with the idea of developing a mobile app that would improve our users' experience. From day one, their team demonstrated a professional approach and a deep understanding of our needs. The development process was agile, with constant communication that allowed us to stay informed at every stage. The end result exceeded our expectations: an intuitive, efficient, and beautifully designed app. Thanks to them, we now have a tool that has significantly improved our interaction with our customers.",
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
      image: "/testimonio4.png",
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
      image: "/testimonio3.png",
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
