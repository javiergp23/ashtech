
import './cardTestimonios.css'

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
            <div className="carousel-container">
                
                <div className="carousel">
                    {testimonials.map((testimonial) => (
                    <div className="carousel-item" key={testimonial.id}>
                        <img
                        className="carousel-img"
                        src={testimonial.image}
                        alt={testimonial.name}
                        />
                        <p className="testimonial-description">{testimonial.description}</p>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                    </div>
                    ))}
                </div>
              
            </div>
        </>
    )
}