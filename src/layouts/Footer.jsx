import { useLanguage } from '../context/LanguageContext'
import './footer.css'

export default function Footer(){
    const { language } = useLanguage();
    const texts = {
        es: {
            support: "Soporte",
            contact: "Contacto",
            service: "Servicios",
            about: "Sobre Nosotros",
            testimonials: "Testimonios",
            workwithUs: "Trabaja con nosotros",
            redes: "Redes Sociales",
            phone: "+54 9 11 54597565"
        },  
        en: {
            support: "Support",
            contact: "Contact",
            service: "Services",
            about: "About Us",
            testimonials: "Testimonials",
            workwithUs: "Work with Us",
            redes: "Social Networks",
            phone: "+54 9 11 54597565"
        },
    };

    return(
        <>
            <div className="footer">
                <div className="container-item-footer logo-div">
                    <img  className="logo-footer" src="/logo1.png" alt="Logo-footer" />
                    <nav className="nav-footer container-res-hidden">
                        <a href="https://www.instagram.com/ashsamtech/profilecard/?igsh=MW12Yngyc2trYnRz" target="_blank"><img className="logo-social" src="/instagram-logo-24.png" alt="" /></a>
                        <a href="https://www.linkedin.com/company/106369421/admin/dashboard/" target="_blank"><img className="logo-social" src="/linkedin-logo-24.png" alt="" /></a>
                        <a href="https://www.facebook.com/share/18zdUCQPAQ/" target="_blank"><img className="logo-social" src="/facebook-logo-24.png" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/youtube-logo-24.png" alt="" /></a>
                    </nav>
                </div>
                <div className="container-item-footer container-item-footer_soporte container-res-hidden">
                    {/* <p className="title-footer">{texts[language].support}</p> */}
                    <a className="text-footer-links" href="#services">{texts[language].service}</a>
                    <a className="text-footer-links" href="#about">{texts[language].about}</a>
                    <a className="text-footer-links" href="#testimonios">{texts[language].testimonials}</a>
                    <a className="text-footer-links" href="#work">{texts[language].workwithUs}</a>
                </div>
                <div className="container-item-footer container-item-footer_contacto container-res-hidden">
                    <p className="title-footer">{texts[language].contact}</p>
                    <p className="text-footer-links">{texts[language].phone}</p>
                    <p className="text-footer-links">contacto@astech.com.ar</p>
                </div>
                <div className='container-item-res-mobile'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {texts[language].support}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="link-nav-footer" href="#services">{texts[language].service}</a></li>
                            <li><a className="link-nav-footer" href="#about">{texts[language].about}</a></li>
                            <li><a className="link-nav-footer" href="#testimonios">{texts[language].testimonials}</a></li>
                            <li><a className="link-nav-footer" href="#work">{texts[language].workwithUs}</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {texts[language].redes}
                        </button>
                        <ul className="dropdown-menu">
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/instagram-logo-24.png" alt="" />Instagram</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/linkedin-logo-24.png" alt="" />Linkedin</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/facebook-logo-24.png" alt="" />Facebook</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/youtube-logo-24.png" alt="" />Youtube</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {texts[language].contact}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">{texts[language].phone}</a></li>
                            <li><a className="dropdown-item" href="#">contacto@astech.com.ar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}