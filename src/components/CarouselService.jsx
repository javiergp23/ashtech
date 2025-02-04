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
            paragraphModalOne: "Convertí tus ideas en realidad, desde la planificación, hasta la entrega final, nuestro equipo se asegura de que cada fase esté alineada con sus objetivos, maximizando recursos y minimizando riesgos. Nos especializamos en liderar proyectos tecnológicos con precisión, asegurando cumplimiento de plazos, presupuestos y la calidad que su negocio necesita para crecer.",
            paragraphModalTwo: "Encuentre el talento tecnológico perfecto para su equipo. Con nuestro servicio de staffing especializado, conectamos su empresa con profesionales altamente calificados en el área de TI, adaptados a sus necesidades. Ya sea que necesite personal temporal, a largo plazo o para proyectos específicos, nosotros le proveemos de los mejores expertos, listos para impulsar sus metas empresariales.",
            paragraphModalThree: "Cada negocio es único, y sus soluciones tecnológicas también deberían serlo. Creamos desarrollos de software a la medida que responden directamente a sus desafíos específicos, integrando perfectamente nuestros sistemas a sus operaciones. Desde plataformas personalizadas hasta aplicaciones móviles y web, desarrollamos con innovación y precisión para garantizar el máximo rendimiento y escalabilidad.",
            paragraphModalFour: "texto descriptivo",
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
            paragraphModalTwo: "Find the perfect technical talent for your team. With our specialized staffing service, we connect your company with highly qualified IT professionals in the IT area, adapted to your needs. Whether you need temporary, long-term, or specific projects, we provide you with the best experts ready to take your business goals forward.",
            paragraphModalThree: "Each business is unique, and its technical solutions should be. We develop software on a measured basis, responding directly to your specific challenges, integrating perfectly our systems to your operations. From custom platforms to mobile and web applications, we develop with innovation and precision to ensure maximum performance and scalability.",
            paragraphModalFour: "Text descriptive",
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
        imgModal: "/third.gif",
        titleModal: texts[language].titleThree,
        paragraphModal: texts[language].paragraphModalThree,
        button: texts[language].button
      },
      {
        id: "4",
        title: texts[language].titleFour,
        img: "/codificacion.png",
        paragraph: texts[language].aboutThree,
        imgModal: "/third.gif",
        titleModal: texts[language].titleFour,
        paragraphModal: texts[language].paragraphModalFour,
        button: texts[language].button
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
      <div className="carousel">
        <div className="carousel-container" ref={carouselRef}>
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
      </div>
    </>
  );
}
