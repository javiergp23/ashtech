import './heroSection.css'
import NavBar from '../components/NavBar.jsx'
import Description from '../components/Description.jsx'
import { useLanguage } from '../context/LanguageContext'

export default function HeroSection() {
    const { language } = useLanguage();
    const texts = {
        es: {
            title: "Codificamos el futuro de tu éxito.",
            subtitle: "La tecnología que necesitas, a alcace de tu mano.",
            button: "Ver servicios",
            titleTwo: "Nuestro compromiso",
            subtitleTwo: "Es con vos",
            
        },
        en: {
            title: "We encode the future of your success",
            subtitle: "The technology you need, at your fingertips.",
            button: "See services",
            titleTwo: "Our commitment",
            subtitleTwo: "Is with you",

        },
    };

    return(
        <div className="hero-section">
            <NavBar/>
            <div className="hero-section-content">
                <div className='elements-hero-section'>
                    <h1 className="hero-section_title">{texts[language].title}</h1>
                    <p className="hero-section_subtitle">{texts[language].subtitle }</p>
                    <a href='#services' className="button-hero-section">{texts[language].button}</a>
                </div>
                <div className="hero-section_img">
                    <img className="hero-section_img-1" src="/img-hero-section.png" alt="img-hero-section" />
                    <img className="hero-section_img-responsive" src="/heroSection-img-responsive.png" alt="img-hero-section-responsive" />
                </div>
            </div>
            <div className="hero-content-two">
                <h2 className="tiitle-two">{texts[language].titleTwo}</h2>
                <p className="subtiitle-two">{texts[language].subtitleTwo}</p> 
            </div>
            <div className='ofert-container'>
                <Description/>
            </div>
        </div>
    )
}