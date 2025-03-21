import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext'
import "./carouselService.css";
import Card from "./Card";

export default function Carousel() {
  const { language } = useLanguage();
  const carouselRef = useRef(null);

    const texts = {
        es: {
            titleOne: "Gestión de proyectos",
            titleTwo: "Servicios de Staffing",
            titleThree: "Desarrollos a la Medida",
            titleFour: "Servicio Tecnico",
            aboutOne: "Proyectos de principio a fin, con total transparencia y resultados garantizados.",
            aboutTwo: "El éxito de tu equipo asegurado.",
            aboutThree: "Transforma tu visión en una solución tecnológica.",
            paragraphModalOne: "Convertí tus ideas en realidad, desde la planificación hasta la entrega final. Nuestro equipo se asegura de que cada fase esté alineada con sus objetivos, maximizando recursos y minimizando riesgos. Nos especializamos en liderar proyectos tecnológicos con precisión, asegurando el cumplimiento de plazos, presupuestos y la calidad que su negocio necesita para crecer.",
            paragraphModalTwo: "Encuentre el talento tecnológico perfecto para su equipo. Con nuestro servicio de staffing especializado, conectamos su empresa con profesionales altamente calificados en el área de TI, adaptados a sus necesidades. Ya sea que necesite personal temporal, a largo plazo o para proyectos específicos, nosotros le proveemos de los mejores expertos, listos para impulsar sus metas empresariales.",
            paragraphModalThree: "Cada negocio es único y sus soluciones tecnológicas también deberían serlo. Creamos desarrollos de software a la medida que responden directamente a sus desafíos específicos, integrando perfectamente nuestros sistemas a sus operaciones. Abarcando plataformas personalizadas incluyendo aplicaciones móviles y web, desarrollamos con innovación y precisión para garantizar el máximo rendimiento y escalabilidad.",
            paragraphModalFour: "Mantén tu infraestructura de TI funcionando a la perfección con nuestro servicio de soporte técnico especializado. Brindamos soluciones rápidas y eficientes para resolver cualquier problema que puedas enfrentar, desde inconvenientes con el software hasta fallas en el hardware. Nuestro equipo de expertos está disponible para ofrecerte asistencia personalizada, ya sea de forma remota o en sitio, garantizando que tus sistemas estén siempre operativos y tu negocio siga avanzando sin interrupciones.",
            button: "Consultar"

        },
        en: {
            titleOne: "Project Management",
            titleTwo: "Staffing Services",
            titleThree: "Measure Development",  
            titleFour: "Technical Service",
            aboutOne: "From beginning to end, with total transparency and guaranteed results.",
            aboutTwo: "The success of your team is guaranteed.",
            aboutThree: "Transform your vision into a technical solution.",
            paragraphModalOne: "Convert your ideas into reality, from planning to delivery. Our team ensures that each phase is aligned with your goals, maximizing resources and minimizing risks. We specialize in leading technical projects with precision in order to meet deadlines within the budget and achieve the quality that your business requires.",
            paragraphModalTwo: "Find the perfect technical talent for your team. With our specialized staffing service, we connect your company to highly qualified professionals in the IT area. Whether you need temporary, long-term or specific projects, we will provide you with the best experts to take your business to the next level.",
            paragraphModalThree: "Each business is unique and so are its technical solutions. We work on your specific requirements and customize our work considering your particular business profile. We plan and design innovative platforms and apps that  can adapt to your operations and grow with you.",
            paragraphModalFour: "Keep your IT infrastructure working perfectly with our specialized technical support service. We offer you quick and efficient solutions to solve issues you may have, including software and hardware. Our team of experts is available to offer you personalized attention both remotely or in-site so that we can guarantee that your systems work properly and your business runs smoothly.",
            button: "Consult"
        },
    };
    const services = [
      {
        id: "1",
        title: texts[language].titleOne,
        img: "/gestion.png",
        paragraph: texts[language].aboutOne,
        imgModal: "/first.gif",
        titleModal: texts[language].titleOne,
        paragraphModal: texts[language].paragraphModalOne,
        button: texts[language].button
      },
      {
        id: "2",
        title: texts[language].titleTwo,
        img: "/candidato.png",
        paragraph: texts[language].aboutTwo,
        imgModal: "/second.gif",
        titleModal: texts[language].titleTwo,
        paragraphModal: texts[language].paragraphModalTwo,
        button: texts[language].button
      },
      {
        id: "3",
        title: texts[language].titleThree,
        img: "/codificacion.png",
        paragraph: texts[language].aboutThree,
        imgModal: "/thrid.gif",
        titleModal: texts[language].titleThree,
        paragraphModal: texts[language].paragraphModalThree,
        button: texts[language].button
      },
      {
        id: "4",
        title: texts[language].titleFour,
        img: "/servicio-tecnico.png",
        paragraph: texts[language].aboutThree,
        imgModal: "/servicio-tecnico-gif.gif",
        titleModal: texts[language].titleFour,
        paragraphModal: texts[language].paragraphModalFour, 
        button: texts[language].button
      },
    ];

    useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
  
      const cards = Array.from(carousel.children);
      const firstClone = cards[0].cloneNode(true);
      const lastClone = cards[cards.length - 1].cloneNode(true);
  
      carousel.appendChild(firstClone);
      carousel.insertBefore(lastClone, carousel.firstChild);
  
      const cardWidth = cards[0].offsetWidth + 20;
      let currentIndex = 1;
  
      function scrollToCard(index, smooth = true) {
        carousel.scrollTo({
          left: index * cardWidth,
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
  
      let interval = setInterval(autoScroll, 3000);
  
      return () => clearInterval(interval);
    }, [language]);


    const handleNext = () => {
      if (!carouselRef.current) return;
    
      const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    };
    
    const handlePrev = () => {
      if (!carouselRef.current) return;
    
      const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    };

  return (
    <>
      <div className="carousel">
        <div className="carousel-container" ref={carouselRef} key={language}>
          {services.map((service, index) => (
            <div className={`card-container ${index === 0 ? "active" : ""}`} key={service.id}>
              <Card 
                id={service.id} 
                key={service.id} 
                title={service.title} 
                img={service.img} 
                paragraph={service.paragraph} 
                imgModal={service.imgModal}
                titleModal={service.titleModal}
                paragraphModal={service.paragraphModal}
                button={service.button}
                />   
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="prev-button" onClick={() => handlePrev()}>&#10094;</button>
          <button className="next-button" onClick={() => handleNext()}>&#10095;</button>
        </div>
      </div>
    </>
  );
}
