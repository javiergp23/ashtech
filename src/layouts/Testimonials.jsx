import './testimonials.css'
import CarouselTestimonial from '../components/CaruselTestimonial.jsx'

export default function Testimonials(){
    return(
        <> 
            <div className="testimonios-container" id="testimonios">
                <div>
                    <p className="test-title">TESTIMONIOS</p>
                    <h1 className="test-title-two">Nuestros clientes</h1>
                    <h2 className="test-title-three">Te compartimos sus experiencias</h2>
                </div>
                <div className='carousel-testimonial-container'>
                    <CarouselTestimonial/>
                </div>
                <img className='img-background img-background_1' src="/src/assets/engranaje1.png" alt="engranaje-1" />
                <img className='img-background img-background_2' src="/src/assets/engranaje2.png" alt="engranaje-2" />
                <img className='img-background img-background_3' src="/src/assets/img-testimonial-4-.png" alt="engranaje-4" />
                <img className='img-background img-background_4' src="/src/assets/img-testimonial-5.png" alt="engranaje-5" />
                <img className='img-background img-background_5' src="/src/assets/img-testimonios-3.png" alt="engranaje-5" />
            </div>
        </>
    )
}