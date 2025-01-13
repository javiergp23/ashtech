import './testimonials.css'
import CardTestimonios from '../components/CardTestimonios.jsx'

export default function Testimonials(){
    return(
        <> 
            <div className="testimonios-container" id="testimonios">
                <div>
                    <p className="test-title">TESTIMONIOS</p>
                    <h1 className="test-title-two">Nuestros clientes</h1>
                    <h2 className="test-title-three">Te compartimos sus experiencias</h2>
                </div>
                <div>
                    <CardTestimonios/>
                </div>
                <img className='img-background img-background_1' src="/src/assets/engranaje1.png" alt="engranaje-1" />
                <img className='img-background img-background_2' src="/src/assets/engranaje2.png" alt="engranaje-2" />
            </div>
        </>
    )
}