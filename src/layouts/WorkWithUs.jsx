import './workWithUs.css'

export default function WorkWithUs(){
    return(
        <>  
            <div className='work-section-responsive' id='work'>
                <h1 className='work-section-text_responsive-title'>
                    ¿Te gustaria trabajar con nosotros?
                </h1>
                <p className='work-section-text_responsive-subtitle'>
                    Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad.
                </p>
            </div>
            <div className="work-section">
                <div className="work-section-text-container" >
                    <h1 className="work-title">¿Te gustaria trabajar con nosotros?</h1>
                    <p className="work-section-text">
                        <span className='work-section-text_responsive-none'>Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad.</span> <br /><br />

                        Valoramos tu creatividad, talento y tus ganas de aprender, aqui tendras la oportunidad de marcar la diferencia. <br /><br />

                        <span className='work-section-text_responsive-none'>Te invitamos a ser parte y que crees la carrera que deseas. </span>
                    </p>
                    <h2 className="sumate">
                        ¡Sumate a nuestro equipo!
                    </h2>
                    <button  type="button" className="button-work-with-us" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Adjuntar CV
                    </button>
                                        {/* MODAL */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="" className="form">
                                <h1 className="modal-title fs-5 modal-title-cv" id="exampleModalLabel">Crea la carrera de tus sueños</h1>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="">Nombre y apellido*</label>
                                        <input type="text" placeholder="    Juan Perez" className="input input-modal_cv"/>
                                    </div>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="">Correo Electrónico*</label>
                                        <input type="text" placeholder="    ejemplo@gmail.com" className="input input-modal_cv"/>
                                    </div>
                                    <div className="item-form-container">
                                        <label  className='label-modal_cv'htmlFor="">Teléfono*</label>
                                        <input type="text" placeholder="    011 56749288" className="input input-modal_cv"/>
                                    </div>
                                    <div>
                                        <div className='container-modal-text'>
                                            <p className='modal-text'> 
                                                *Campos obligatorios
                                            </p>
                                        </div>
                                        <div className='container-modal-img'>
                                            <img className='modal-img' src="/src/assets/adjuntar-archivo.png" alt="" />
                                            <p className='modal-text-adj'>Adjuntar archivos</p>
                                        </div>
                                    </div>
                                    <div className='container-button-modal'>    
                                        <button  type="button" className="button-work-with-us_modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-img">
                    <img className="work-section_img" src="/src/assets/img-work-with-us.png" alt="img-section-about" />
                    <img className="work-section_img-responsive" src="/src/assets/img-work-section-responsive.png" alt="img-section-about-responsive" />
                </div>
            </div>
        </>
    )
}