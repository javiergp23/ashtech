import "./carouselTestimonial.css";

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
  {
    id: 4,
    image: "/src/assets/testimonio2.png",
    name: "María González",
    description:
      "La mejor experiencia que he tenido en mucho tiempo. Excelente calidad.",
  },
];

export default function CarouselTestimonial() {
  return (
    <>
      <div className="carousel-container-test">
        
          <div className="carousel-test">
          {testimonials.map((testimonial) => (
            
              <div className="carousel-item-test" key={testimonial.id}>
                <div className="container-carousel-test__responsive">
                  <img
                    className="carousel-img-test"
                    src={testimonial.image}
                    alt={`Imagen de ${testimonial.name}`}
                  />
                  <p className="testimonial-description">{testimonial.description}</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
            </div>
          ))}
          </div>
      </div>
    </>
  );
}
