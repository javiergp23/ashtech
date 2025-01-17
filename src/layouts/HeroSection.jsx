import './heroSection.css'
import NavBar from '../components/NavBar.jsx'
import Description from '../components/Description.jsx'

export default function HeroSection() {
    return(
        <div className="hero-section">
            <NavBar/>
            <div className="hero-section-content">
                <div className='elements-hero-section'>
                    <h1 className="hero-section_title">Codificamos el <br /> futuro de tu éxito.</h1>
                    <p className="hero-section_subtitle">La tecnología que necesitas, <br /> a alcace de tu mano.</p>
                    <a href='#services' className="button-hero-section">Ver servicios</a>
                </div>
                <div className="hero-section_img">
                    <img className="hero-section_img-1" src="/src/assets/img-hero-section.png" alt="img-hero-section" />
                    <img className="hero-section_img-responsive" src="/src/assets/heroSection-img-responsive.png" alt="img-hero-section-responsive" />
                </div>
            </div>
            <div className="hero-content-two">
                <h2 className="tiitle-two">Nuestro compromiso</h2>
                <p className="subtiitle-two">Es con vos</p> 
            </div>
            <div className='ofert-container'>
                <Description/>
            </div>
        </div>
    )
}