import './services.css';
import Carousel from '../components/Carousel';

export default function Services() {
    return(
        <>
            <div className="services-container" id="services">
                <h1>
                    Estamos para vos
                </h1>
                <p>
                     Estos son nuestros servicios
                </p>
            </div>
            <div className="services-cards">
                <Carousel/>
                
                {/* <Card 
                    id="1"
                    title="Gestión de proyectos" 
                    img="/src/assets/gestion.png" 
                    paragraph="Proyectos de principio a fin, con total transparencia y resultados garantizados."   
                    imgModal="/src/assets/first.gif"
                    titleModal="Gestión de Proyectos"
                    paragraphModal="Converti tus ideas en realidad, desde la planificación, hasta la entrega final, nuestro equipo se asegura de que cada fase esté alineada con sus objetivos, maximizando recursos y minimizando riesgos. Nos especializamos en liderar proyectos tecnológicos con precisión, asegurando cumplimiento de plazos, presupuestos y la calidad que su negocio necesita para crecer."
                />
                <Card 
                    id="2"
                    title="Servicios de Staffing" 
                    img="/src/assets/candidato.png" 
                    paragraph="El éxito de tu equipo asegurado."
                    imgModal="/src/assets/second.gif"
                    titleModal="Servicio de Staffing"
                    paragraphModal="Encuentre el talento tecnológico perfecto para su equipo. Con nuestro servicio de staffing especializado, conectamos su empresa con profesionales altamente calificados en el ñarea de IT, adaptados a sus necesidades. Ya sea que necesite personal temporal, a largo plazo o para proyectos específicos, nosotros le proveemos de los mejores expertos, listos para impulsar sus metas empresariales."
                /> 
                <Card
                    id="3"
                    title="Desarrollos a la Medida " 
                    img="/src/assets/codificacion.png" 
                    paragraph="Transforma tu visión en una solución tecnológica." 
                    imgModal="/src/assets/thrid.gif"
                    titleModal="Desarrollo a la Medida"
                    paragraphModal="Cada negocio es único, y sus soluciones tecnológicas también deberían serlo. Creamos desarrollos de software a la medida que responden directamente a sus desafíos específicos, integrando perfectamente nuestros sistemas a sus operaciones. Desde plataformas personalizadas hasta aplicaciones móviles y web, desarrollamos con innovación y precisión para garantizar el máximo rendimiento y escalabilidad."
                />
                <Card
                    id="4"
                    title="Servicio Tecnico " 
                    img="/src/assets/codificacion.png" 
                    paragraph="Transforma tu visión en una solución tecnológica." 
                    imgModal="/src/assets/thrid.gif"
                    titleModal="Servicio Tecnico"
                    paragraphModal="texto descriptivo"
                /> */}
            </div>
        </>
    )
}