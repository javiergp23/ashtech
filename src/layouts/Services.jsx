import './services.css';
import CarouselService from '../components/CarouselService';

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
                <CarouselService/>
            </div>
        </>
    )
}