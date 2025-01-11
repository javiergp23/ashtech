import './workWithUs.css'

export default function WorkWithUs(){
    return(
        <>
            <div className="work-section">
                <div className="work-section-text-container" id="work">
                    <h1 className="work-title">¿Te gustaria trabajar con nosotros?</h1>
                    <p className="work-section-text">
                        Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad. <br /><br />

                        Valoramos tu creatividad, talento y tus ganas de aprender, aqui tendras la oportunidad de marcar la diferencia. <br /><br />

                        Te invitamos a ser parte y que crees la carrera que deseas. 
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
                </div>
            </div>
        </>
    )
}