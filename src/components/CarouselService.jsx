import { useRef } from "react";
import { useLanguage } from '../context/LanguageContext'
import "./carouselService.css";
import Card from "./Card";

export default function Carousel() {
  const carouselRef = useRef(null);
  const { language } = useLanguage();
    const texts = {
        es: {
            titleOne: "Gestión de proyectos",
            titleTwo: "Servicios de Staffing",
            titleThree: "Desarrollos a la Medida",
            titleFour: "Servicio Tecnico",
            aboutOne: "Proyectos de principio a fin, con total transparencia y resultados garantizados.",
            aboutTwo: "El éxito de tu equipo asegurado.",
            aboutThree: "Transforma tu visión en una solución tecnológica.",
            paragraphModalOne: "Converti tus ideas en realidad, desde la planificación, hasta la entrega final, nuestro equipo se asegura de que cada fase esté alineada con sus objetivos, maximizando recursos y minimizando riesgos. Nos especializamos en liderar proyectos tecnológicos con precisión, asegurando cumplimiento de plazos, presupuestos y la calidad que su negocio necesita para crecer.",
            paragraphModalTwo: "Encuentre el talento tecnológico perfecto para su equipo. Con nuestro servicio de staffing especializado, conectamos su empresa con profesionales altamente calificados en el ñarea de IT, adaptados a sus necesidades. Ya sea que necesite personal temporal, a largo plazo o para proyectos específicos, nosotros le proveemos de los mejores expertos, listos para impulsar sus metas empresariales.",
            paragraphModalThree: "Cada negocio es único, y sus soluciones tecnológicas también deberían serlo. Creamos desarrollos de software a la medida que responden directamente a sus desafíos específicos, integrando perfectamente nuestros sistemas a sus operaciones. Desde plataformas personalizadas hasta aplicaciones móviles y web, desarrollamos con innovación y precisión para garantizar el máximo rendimiento y escalabilidad.",
            paragraphModalFour: "texto descriptivo",

        },
        en: {
            titleOne: "Project Management",
            titleTwo: "Staffing Services",
            titleThree: "Measure Development",  
            titleFour: "Technical Service",
            aboutOne: "Projects from beginning to end, with total transparency and guaranteed results.",
            aboutTwo: "The success of your team is guaranteed.",
            aboutThree: "Transform your vision into a technical solution.",
            paragraphModalOne: "Convert your ideas into reality, from planning to delivery, our team ensures that each phase is aligned with your goals, maximizing resources and minimizing risks. We specialize in leading technical projects with precision, ensuring compliance with deadlines, budgets, and the quality that your business needs to grow.",
            paragraphModalTwo: "Find the perfect technical talent for your team. With our specialized staffing service, we connect your company with highly qualified IT professionals in the IT area, adapted to your needs. Whether you need temporary, long-term, or specific projects, we provide you with the best experts ready to take your business goals forward.",
            paragraphModalThree: "Each business is unique, and its technical solutions should be. We develop software on a measured basis, responding directly to your specific challenges, integrating perfectly our systems to your operations. From custom platforms to mobile and web applications, we develop with innovation and precision to ensure maximum performance and scalability.",
            paragraphModalFour: "Text descriptive",
        },
    };
  
  return (
    <>
      <div className="carousel-container-serv">
        <div className="carousel-serv" ref={carouselRef}>
          <div className="carousel-item-serv">
            <Card
               id="1"
               title={texts[language].titleOne} 
               img="/src/assets/gestion.png" 
               paragraph={texts[language].aboutOne}   
               imgModal="/src/assets/first.gif"
               titleModal={texts[language].titleOne}
               paragraphModal={texts[language].paragraphModalOne}
            />
            </div>
          <div className="carousel-item-serv">
            <Card 
              id="2"
              title={texts[language].titleTwo} 
              img="/src/assets/candidato.png" 
              paragraph={texts[language].aboutTwo} 
              imgModal="/src/assets/second.gif"
              titleModal={texts[language].titleTwo}
              paragraphModal={texts[language].paragraphModalTwo}
              /> 
          </div>
          <div className="carousel-item-serv">
            <Card
              id="3"
              title={texts[language].titleThree} 
              img="/src/assets/codificacion.png" 
              paragraph={texts[language].aboutThree}  
              imgModal="/src/assets/thrid.gif"
              titleModal={texts[language].titleThree}
              paragraphModal={texts[language].paragraphModalThree}
            />
          </div>
          <div className="carousel-item-serv">
            <Card
              id="4"
              title={texts[language].titleFour} 
              img="/src/assets/codificacion.png" 
              paragraph={texts[language].aboutThree} 
              imgModal="/src/assets/thrid.gif"
              titleModal={texts[language].titleFour}
              paragraphModal={texts[language].paragraphModalFour}
            />
          </div>
        </div>
      </div>
    </>
  );
}
