import './about.css'

export default function About(){
    return(
        <>
            <div className="about-container" id="about">
                <h1 className="title-about">
                Queremos que nos conoscas
                </h1>
                <p className="subtitle-about">
                Te contamos nuestros valores y asi, sepas quienes somos. 
                </p>
            </div>
            <div className="about-container-card">
                <div className="about-div-containar">
                    <img className="img-about-card" src="/src/assets/06927984644db88d9f37d7edb1f243c4.gif" alt="img-about" />
                    <p className="text-about-card">Compromiso</p>
                </div>
                <div>
                    <img className="img-about-card" src="/src/assets/2ef9f2486d1996d9289dd17c6ecf1efd.gif" alt="img-about" />
                    <p className="text-about-card">Excelencia</p>
                </div>
                <div>
                    <img className="img-about-card" src="/src/assets/ed11b4256b8f3d6d87b72e9e0fecac9b.gif" alt="img-about" />
                    <p className="text-about-card">Innovación</p>
                </div>
            </div>
            <div className="about-section">
                <div>
                    <img className="about-section_img" src="/src/assets/img-section-about.png" alt="img-section-about" />
                    <img className="about-section_img-responsive" src="/src/assets/img-about-rspv.png" alt="img-section-about-responsive" />
                </div>
                <div className="about-section-text-container">
                    <p className="about-section-text">
                        Somos una empresa que tiene como <span className="text-span">objetivo el crecimiento de nuestros clientes</span> mediante el desarrollo de software a la medida, la provisión de recursos calificados y la gestión integral de proyectos. <br className="space-text"/> <br />

                        Nos comprometemos a entregar resultados excepcionales, ya que trabajamos de la mano de la innovación y el compromiso hacia nuestros clientes. <br className="space-text"/> <br />

                        Tenemos una meta, ser tu socio lider en soluciones tecnologias innovadoras transformando el futuro de tu empresa en su mejor version. <br className="space-text"/> <br />

                        <span className="text-span">Estamos para ayudarte a crear el exito de tus sueños. </span>
                    </p>
                    <p className='about-section-text-responsive'>
                    Somos una empresa que tiene como <span className="text-span">objetivo el crecimiento de nuestros clientes</span> mediante el desarrollo de software a la medida, la provisión de recursos calificados y la gestión integral de proyectos.
                    </p>
                    <p className="about-section-text-tablet">
                        Somos una empresa que tiene como <span className="text-span">objetivo el crecimiento de nuestros clientes</span> mediante el desarrollo de software a la medida, la provisión de recursos calificados y la gestión integral de proyectos. <br className="space-text"/> <br />

                        Nos comprometemos a entregar resultados excepcionales, ya que trabajamos de la mano de la innovación y el compromiso hacia nuestros clientes. <br className="space-text"/> <br />
                    </p>    
                    
                </div>
            </div>
            <div className='responsive-section'>
                <p className='about-section-text-responsive-two'> 
                    Nos comprometemos a entregar resultados excepcionales, ya que trabajamos de la mano de la innovación y el compromiso hacia nuestros clientes. <br className="space-text"/> <br />

                    Tenemos una meta, ser tu socio lider en soluciones tecnologias innovadoras transformando el futuro de tu empresa en su mejor version. <br className="space-text"/> <br />

                    <span className="text-span">Estamos para ayudarte a crear el exito de tus sueños. </span>
                </p>
                <p className='about-section-text-two-tablet'>
                    Tenemos una meta, ser tu socio lider en soluciones tecnologias innovadoras transformando el futuro de tu empresa en su mejor version. <br className="space-text"/> <br />

                    <span className="text-span">Estamos para ayudarte a crear el exito de tus sueños. </span>
                </p>
            </div>
        </>
    )
}