import './cardTestimonios.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

const testimonials = [
    {
      id: 1,
      image: "/src/assets/testimonio1.png",
      name: "Juan Pérez",
      description:
        "Este servicio ha cambiado mi vida por completo. ¡Muy recomendado!",
    },
    {
      id: 2,
      image: "/src/assets/testimonio2.png",
      name: "María González",
      description:
        "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
    },
    {
      id: 3,
      image: "/src/assets/testimonio1.png",
      name: "Carlos Martínez",
      description:
        "No puedo estar más feliz con los resultados. Volveré a usar este servicio.",
    },
  ];

export default function CardTestimonios(){
    return(
        <>
            <div className="container-carousel" >
                <Carousel className="carouselContainer" showArrows={false} infiniteLoop={true} showThumbs={false} showIndicators={false} 
                showStatus={false}>
                {testimonials.map((testimonial) => (
                    <div className="card-content"
                    key={testimonial.id}
                    style={{ padding: "20px", textAlign: "center", position: "relative", overflow: "visible",}}
                    >
                    <img className="carousel-img"
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        position: "absolute",
                        top: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)", 
                        border: "4px solid white",
                        }}
                    />
                    <p style={{ margin: "10px 0", fontStyle: "italic", color: "white" }}>
                        {testimonial.description}
                    </p>
                    <h3 style={{ margin: "0", fontWeight: "bold", color: "#FF9240"}}>
                        {testimonial.name}
                    </h3>
                    </div>
                ))}
                </Carousel>
            </div>
        </>
    )
}