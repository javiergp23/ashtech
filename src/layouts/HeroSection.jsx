import './heroSection.css'
import NavBar from '../components/NavBar.jsx'

export default function HeroSection() {
    return(
        <div className="hero-section">
            <NavBar/>
            <div className="hero-section-content">
                <div className='elements-hero-section'>
                    <h1 className="hero-section_title">Codificamos el <br /> futuro de tu éxito.</h1>
                    <p className="hero-section_subtitle">La tecnología que necesitas, <br /> a alcace de tu mano.</p>
                    <button className="button-hero-section">Ver servicios</button>
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
            <div className='carousel'>
                <div className='frame-container-img'>
                    <img className='frame-1' src="/src/assets/Frame-1.png" alt="frame-1" />
                </div>
                <p className='text-frame'>Te ofrecemos una atención personalizada para la resolución de problemas, garantizando que tus proyectos se cumplan con éxito.</p>
            </div>
        </div>
    )
}