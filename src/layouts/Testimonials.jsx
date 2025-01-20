import { useLanguage } from '../context/LanguageContext'
import CarouselTestimonial from '../components/CaruselTestimonial.jsx'
import './testimonials.css'

export default function Testimonials(){
    const { language } = useLanguage();
    const texts = {
        es: {
            title: "TESTIMONIOS",
            subtitle: "Nuestros clientes",
            textOne: "Te compartimos sus experiencias",
            
        },
        en: {
            title: "TESTIMONIALS",
            subtitle: "Our clients",
            textOne: "We share your experiences",
            
        },
    };

    return(
        <> 
            <div className="testimonios-container" id="testimonios">
                <div>
                    <p className="test-title">{texts[language].title}</p>
                    <h1 className="test-title-two">{texts[language].subtitle}</h1>
                    <h2 className="test-title-three">{texts[language].textOne}</h2>
                </div>
                <div className='carousel-testimonial-container'>
                    <CarouselTestimonial/>
                </div>
                <img className='img-background img-background_1' src="/src/assets/engranaje1.png" alt="engranaje-1" />
                <img className='img-background img-background_2' src="/src/assets/engranaje2.png" alt="engranaje-2" />
                <img className='img-background img-background_3' src="/src/assets/img-testimonial-4-.png" alt="engranaje-4" />
                <img className='img-background img-background_4' src="/src/assets/img-testimonial-5.png" alt="engranaje-5" />
                <img className='img-background img-background_5' src="/src/assets/img-testimonios-3.png" alt="engranaje-5" />
                 {/* Desktop IMG */}
                 <img className='img-testimonial-desktop img-testimonial-desktop_1' src="/src/assets/img-t-1.png" alt="img-t-1" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_2' src="/src/assets/img-t-2.png" alt="img-t-2" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_3' src="/src/assets/imgt-3.png" alt="img-t-3" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_4' src="/src/assets/img-t-4.png" alt="img-t-4" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_5' src="/src/assets/img-t-5.png" alt="img-t-5" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_6' src="/src/assets/img-t-6.png" alt="img-t-6" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_7' src="/src/assets/img-t-7.png" alt="img-t-7" />
                 <img className='img-testimonial-desktop img-testimonial-desktop_8' src="/src/assets/img-t-8.png" alt="img-t-8" />
            </div>
        </>
    )
}