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
                <div className="container-item-footer container-res-hidden">
                    <p className="title-footer">Soporte</p>
                    <a className="text-footer-links" href="#services">Servicios</a>
                    <a className="text-footer-links" href="#about">Sobre nosotros</a>
                    <a className="text-footer-links" href="#testimonios">Testimonios</a>
                    <a className="text-footer-links" href="#work">Trabaja con nosotros</a>
                </div>
                <div className="container-item-footer container-res-hidden">
                    <p className="title-footer">Contacto</p>
                    <p className="text-footer-links">011 34893455</p>
                    <p className="text-footer-links">ejemplo@gmail.com</p>
                </div>
                <div className='container-item-res-mobile'>
                    <select className="bg-link custom-select" aria-label="Default select example">
                        <option className='container-item-res-mobile_item' selected>Soporte</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="bg-link custom-select" aria-label="Default select example">
                        <option className='container-item-res-mobile_item' selected>Redes sociales</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="bg-link custom-select" aria-label="Default select example">
                        <option className='container-item-res-mobile_item' selected>Contacto</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </>
    )
}