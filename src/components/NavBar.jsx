import './navbar.css'

export default function NavBar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand logo-nav" href="#"><img  className="img-logo" src="/src/assets/logo1.png" alt="Logo" /></a>
                    <button className="navbar-toggler menu-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav links-nav links-nav-responsive mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-link-color nav-item-responsive" aria-current="page" href="#services">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#about">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#testimonios">Testimonios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#work">Trabaja con Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#contact">Contacto</a>
                            </li>
                            <li className="nav-item dropdown dropdow-idioma">
                                <a className="nav-link dropdown-toggle text-link-color nav-item-responsive" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Idioma
                            </a>
                            <ul className="dropdown-menu dropdow-idioma">
                                <li><a className="dropdown-item text-idioma-color nav-item-responsive" href="#">Español</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item text-idioma-color nav-item-responsive" href="#">Ingles</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className='img-navbar-collapse_pesponsive'>
                                <div className='container-icon-collapse-navbar-collapse'>
                                    <img className='icon-navbar-collapse' src="/src/assets/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                    <img className='icon-navbar-collapse_2' src="/src/assets/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                    <img className='icon-navbar-collapse_3' src="/src/assets/icon-navbar-collapse.png" alt="icon-navbar-collapse" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}