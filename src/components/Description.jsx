import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext'
import './description.css';

export default function Description(){
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const { language } = useLanguage();
    const texts = {
        es: {
            textDescriptionOne: "Te ofrecemos una atención personalizada para la resolución de problemas, garantizando que tus proyectos se cumplan con éxito. ",
            textDescriptionTwo: "Contamos con un equipo de expertos comprometidos con la excelencia y la innovación, asegurando una implementación eficiente y un soporte continuo.",
            textDescriptionThree: "Te garantizamos soluciones tecnológicas de vanguardia adaptadas a tus necesidades.",
        },
        en: {
            textDescriptionOne: "We offer personalized attention for problem resolution, ensuring that your projects are successfully completed.",
            textDescriptionTwo: "We have a team of experts committed to excellence and innovation, ensuring efficient implementation and continuous support.",
            textDescriptionThree: "We guarantee cutting-edge technological solutions tailored to your needs.",
        },
    };

  const textos = [
      texts[language].textDescriptionOne,
      texts[language].textDescriptionTwo,
      texts[language].textDescriptionThree
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Esperar la duración de la animación antes de cambiar el texto
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textos.length);
        setIsAnimating(false); // Detener la animación después del cambio
      }, 1000); // Ajusta este tiempo al de tu animación de imagen
    }, 6000); // Cada 8 segundos se cambia el texto

    return () => clearInterval(interval); 
  }, [textos.length]);


    return(
        <>
          <div className="container">
            <div className="content">
                <div 
                  className={`image-container ${isAnimating ? "animate" : ""}`}
                >
                  <img
                      src="/Frame-1.png"
                      alt="Rotating"
                      className="rotating-image"
                  />
                </div>
                <div className="text-container">
                  <p className={`animated-text animated-text-style ${isAnimating ? "text-animate" : ""}`}>
                    {textos[currentTextIndex]}</p>
                </div>
            </div>
          </div>
        </>
    );
}