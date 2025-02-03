import './services.css';
import { useLanguage } from '../context/LanguageContext'
import CarouselService from '../components/CarouselService';

export default function Services() {
    const { language } = useLanguage();
    const texts = {
        es: {
            titleService: "Estamos para vos",
            subtitleService: "Estos son nuestros servicios",
        },
        en: {
            titleService: "You can count on us",
            subtitleService: "These are our services",
        },
    };
    return(
        <>
            <div className="services-container" id="services">
                <h1>
                {texts[language].titleService}
                </h1>
                <p>
                {texts[language].subtitleService}
                </p>
            </div>
            <div className="services-cards">
                <CarouselService/>
            </div>
        </>
    )
}