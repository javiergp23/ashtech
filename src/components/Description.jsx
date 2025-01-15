import { useEffect, useState } from "react";
import './description.css';

export default function Description(){
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ["Texto 1", "Texto 2", "Texto 3", "Texto 4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // Cambia cada 4 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [texts.length]);

    return(
        <>
        <div className="container">
            <div className="content">
                <div className="image-container">
                <img
                    src="/src/assets/Frame-1.png"
                    alt="Rotating"
                    className="rotating-image"
                />
                </div>
                <div className="text-container">
                <p className="animated-text">{texts[currentTextIndex]}</p>
                </div>
            </div>
            </div>
        </>
    );
}