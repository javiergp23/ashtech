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
                                <a className="nav-link active text-link-color nav-item-responsive" aria-current="page" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#">Testimonios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#">Trabaja con Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-link-color nav-item-responsive" href="#">Contacto</a>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}