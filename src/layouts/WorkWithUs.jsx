import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser';
import './workWithUs.css'

export default function WorkWithUs(){
    const { language } = useLanguage();
    const form = useRef();
    const texts = {
        es: {
            title: "¿Te gustaria trabajar con nosotros?",
            subtitle: "Unite a un equipo innovador y dinamico donde tu crecimiento profesional es una prioridad.",
            paragraphOne: "Valoramos tu creatividad, talento y tus ganas de aprender, aqui tendras la oportunidad de marcar la diferencia.",
            paragraphTwo: "Te invitamos a ser parte y que crees la carrera que deseas.",
            sum:  "¡Sumate a nuestro equipo!",
            button: "Adjuntar CV",
            formTitle: "Crea la carrera de tus sueños",
            name: "Nombre y apellido*",
            email: "Correo Electrónico*",
            phone: "Teléfono*",
            buttonForm: "Enviar",
            validation: "*Campos obligatorios",
            adj: "Adjuntar archivos",
            
        },
        en: {
            title: "Do you want to work with us?",
            subtitle: "Join a dynamic and innovative team where your professional growth is a priority.",
            paragraphOne: "We value your creativity, talent, and your desire to learn, here you will have the opportunity to mark the difference.",
            paragraphTwo: "We invite you to join and you decide the career you want to pursue.",
            sum:  "Sum up to our team!",
            button: "Attach CV",
            formTitle: "Create your dream career",
            name: "Name and surname*",
            email: "Email*",
            phone: "Phone*",
            buttonForm: "Send",
            validation: "Required fields",
            adj: "Attach files",
        },
    };
    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const  publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CV;
        const  serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_CV;
        const  templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CV;

        emailjs
            .sendForm(
                serviceId, 
                templateId, 
                formData,
                publicKey 
            )
            .then(
                (result) => {
                    console.log('Email enviado:', result.text);
                    alert('¡Mensaje enviado con éxito!');
                    form.current.reset();
                },
                (error) => {
                    console.error('Error al enviar el email:', error.text);
                    alert('Ocurrió un error al enviar el mensaje.');
                }
            );
    };

    return(
        <>  
            <div className='work-section-responsive' id='work'>
                <h1 className='work-section-text_responsive-title'>
                    {texts[language].title}
                </h1>
                <p className='work-section-text_responsive-subtitle'>
                    {texts[language].subtitle}
                </p>
            </div>
            <div className="work-section">
                <div className="work-section-text-container" >
                    <h1 className="work-title">{texts[language].title}</h1>
                    <p className="work-section-text">
                        <span className='work-section-text_responsive-none'>{texts[language].subtitle}</span> <br /><br />

                        {texts[language].paragraphOne} <br /><br />

                        <span className='work-section-text_responsive-none'>{texts[language].paragraphTwo}</span>
                    </p>
                    <h2 className="sumate">
                        {texts[language].sum}
                    </h2>
                    <button  type="button" className="button-work-with-us" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        {texts[language].button}
                    </button>
                                        {/* MODAL */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form  className="form" ref={form} onSubmit={sendEmail}>
                                <h1 className="modal-title fs-5 modal-title-cv" id="exampleModalLabel">{texts[language].formTitle}</h1>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="name">{texts[language].name}</label>
                                        <input type="text" name='name' placeholder="    Juan Perez" className="input input-modal_cv"/>
                                    </div>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="email">{texts[language].email}</label>
                                        <input type="text" name='email' placeholder="    ejemplo@gmail.com" className="input input-modal_cv"/>
                                    </div>
                                    <div className="item-form-container">
                                        <label  className='label-modal_cv' htmlFor="phone">{texts[language].phone}</label>
                                        <input type="text" name='phone' placeholder="    011 56749288" className="input input-modal_cv"/>
                                    </div>
                                    <div>
                                        <div className='container-modal-text'>
                                            <p className='modal-text'> 
                                            {texts[language].validation}
                                            </p>
                                        </div>
                                        <div className='container-modal-img'>
                                            <img className='modal-img' src="/adjuntar-archivo.png" alt="" />
                                            <label className='modal-text-adj custom-file-label' htmlFor="file">{texts[language].adj}</label>
                                            <input className='transparent-file-input' name='file' type="file" id="fileInput" accept=".pdf" />
                                        </div>
                                    </div>
                                    <div className='container-button-modal'>    
                                        <button  type='submit' className="button-work-with-us_modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {texts[language].buttonForm}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-img">
                    <img className="work-section_img" src="/img-work-with-us.png" alt="img-section-about" />
                    <img className="work-section_img-responsive" src="/img-work-section-responsive.png" alt="img-section-about-responsive" />
                </div>
            </div>
        </>
    )
}