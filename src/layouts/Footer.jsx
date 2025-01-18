import './footer.css'

export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="container-item-footer logo-div">
                    <img  className="logo-footer" src="/src/assets/logo1.png" alt="Logo-footer" />
                    <nav className="nav-footer container-res-hidden">
                        <a href="#"><img className="logo-social" src="/src/assets/instagram-logo-24.png" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/linkedin-logo-24.png" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/facebook-logo-24.png" alt="" /></a>
                        <a href="#"><img className="logo-social" src="/src/assets/youtube-logo-24.png" alt="" /></a>
                    </nav>
                </div>
                <div className="container-item-footer container-item-footer_soporte container-res-hidden">
                    <p className="title-footer">Soporte</p>
                    <a className="text-footer-links" href="#services">Servicios</a>
                    <a className="text-footer-links" href="#about">Sobre nosotros</a>
                    <a className="text-footer-links" href="#testimonios">Testimonios</a>
                    <a className="text-footer-links" href="#work">Trabaja con nosotros</a>
                </div>
                <div className="container-item-footer container-item-footer_contacto container-res-hidden">
                    <p className="title-footer">Contacto</p>
                    <p className="text-footer-links">011 34893455</p>
                    <p className="text-footer-links">ejemplo@gmail.com</p>
                </div>
                <div className='container-item-res-mobile'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Soporte
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="link-nav-footer" href="#services">Servicios</a></li>
                            <li><a className="link-nav-footer" href="#about">Sobre nosotros</a></li>
                            <li><a className="link-nav-footer" href="#about">Testimonios</a></li>
                            <li><a className="link-nav-footer" href="#work">Trabaja con nosotros</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Redes Sociales
                        </button>
                        <ul className="dropdown-menu">
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/src/assets/instagram-logo-24.png" alt="" />Instagram</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/src/assets/linkedin-logo-24.png" alt="" />Linkedin</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/src/assets/facebook-logo-24.png" alt="" />Facebook</a></li>
                            <li className='list-nav-footer'><a href="#" className='link-nav-footer'><img className="logo-social-footer" src="/src/assets/youtube-logo-24.png" alt="" />Youtube</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-link custom-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contacto
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">011 34893455</a></li>
                            <li><a className="dropdown-item" href="#">ejemplo@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}