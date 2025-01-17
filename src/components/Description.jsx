import { useEffect, useState } from "react";
import './description.css';

export default function Description(){
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

  const texts = [
    "Te ofrecemos una atención personalizada para la resolución de problemas, garantizando que tus proyectos se cumplan con éxito. ", 
    "Contamos con un equipo de expertos comprometidos con la excelencia y la innovación, asegurando una implementación eficiente y un soporte continuo.", 
    "Te garantizamos soluciones tecnológicas de vanguardia adaptadas a tus necesidades.", 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Esperar la duración de la animación antes de cambiar el texto
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false); // Detener la animación después del cambio
      }, 1000); // Ajusta este tiempo al de tu animación de imagen
    }, 10000); // Cada 8 segundos se cambia el texto

    return () => clearInterval(interval); 
  }, [texts.length]);


    return(
        <>
          <div className="container">
            <div className="content">
                <div 
                  className={`image-container ${isAnimating ? "animate" : ""}`}
                >
                  <img
                      src="/src/assets/Frame-1.png"
                      alt="Rotating"
                      className="rotating-image"
                  />
                </div>
                <div className="text-container">
                  <p className={`animated-text animated-text-style ${isAnimating ? "text-animate" : ""}`}>
                    {texts[currentTextIndex]}</p>
                </div>
            </div>
          </div>
        </>
    );
}