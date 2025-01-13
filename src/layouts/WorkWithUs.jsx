import './workWithUs.css'

export default function WorkWithUs(){
    return(
        <>  
            <div className='work-section-responsive'>
                <h1 className='work-section-text_responsive-title'>
                    ¿Te gustaria trabajar con nosotros?
                </h1>
                <p className='work-section-text_responsive-subtitle'>
                    Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad.
                </p>
            </div>
            <div className="work-section">
                <div className="work-section-text-container" id="work">
                    <h1 className="work-title">¿Te gustaria trabajar con nosotros?</h1>
                    <p className="work-section-text">
                        <span className='work-section-text_responsive-none'>Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad.</span> <br /><br />

                        Valoramos tu creatividad, talento y tus ganas de aprender, aqui tendras la oportunidad de marcar la diferencia. <br /><br />

                        <span className='work-section-text_responsive-none'>Te invitamos a ser parte y que crees la carrera que deseas. </span>
                    </p>
                    <h2 className="sumate">
                        ¡Sumate a nuestro equipo!
                    </h2>
                    <button className="button-work-with-us">
                            Adjuntar CV
                    </button>
                </div>
                <div className="work-img">
                    <img className="work-section_img" src="/src/assets/img-work-with-us.png" alt="img-section-about" />
                    <img className="work-section_img-responsive" src="/src/assets/img-work-section-responsive.png" alt="img-section-about-responsive" />
                </div>
            </div>
        </>
    )
}