import './navbar.css'
import { useLanguage } from '../context/LanguageContext'

export default function NavBar() {
    const { changeLanguage } = useLanguage();
    const { language } = useLanguage();
    const texts = {
        es: {
            service: "Servicios",
            contact: "Contacto",
            about: "Sobre nosotros",
            testimonial: "Testimonios",
            work: "Trabaja con nosotros",
            language: "Idioma"
        },
        en: {
            service: "Services",
            contact: "Contact",
            about: "About us",
            testimonial: "Testimonials",
            work: "Work with us",
            language: "Language"
        },
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand logo-nav" href="#"><img  className="img-logo" src="/logo1.png" alt="Logo" /></a>
                    <button className="navbar-toggler menu-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav links-nav links-nav-responsive mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-link-color nav-item-responsive" aria-current="page" href="#services">{texts[language].service}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#about">{texts[language].about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#testimonios">{texts[language].testimonial}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#work">{texts[language].work}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#contact">{texts[language].contact}</a>
                            </li>
                            <div className="nav-item dropdown dropdow-idioma">
                                <a className="nav-link dropdown-toggle text-link-color nav-item-responsive" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {texts[language].language}
                            </a>
                                <ul className="dropdown-menu dropdow-idioma ">
                                    <li className='text-idioma-color_li'><a className="dropdown-item text-idioma-color nav-item-responsive" href="#" onClick={() => changeLanguage("es")}>Español</a></li>
                                    <li className='text-idioma-color_li'><hr className="dropdown-divider"/></li>
                                    <li className='text-idioma-color_li'><a className="dropdown-item text-idioma-color nav-item-responsive" href="#" onClick={() => changeLanguage("en")}>Ingles</a></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                            </li>
                            <li className='img-navbar-collapse_pesponsive'>
                                <div className='container-icon-collapse-navbar-collapse'>
                                    <img className='icon-navbar-collapse' src="/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                    <img className='icon-navbar-collapse_2' src="/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                    <img className='icon-navbar-collapse_3' src="/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}