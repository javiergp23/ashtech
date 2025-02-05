import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser';
import './workWithUs.css'

export default function WorkWithUs(){
    const { language } = useLanguage();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [errors, setErrors] = useState({});
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
            paragraphOne: "We value your creativity , talent, and your desire to learn. Here, you will have the opportunity to make a difference.",
            paragraphTwo: "The invitation is for you to join us and decide the career path you want.",
            sum:  "Be part of our team!",
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

    const validateForm = () => {
        const newErrors = {};
        const name = form.current["name"].value.trim();
        const email = form.current["email"].value.trim();
        const phone = form.current["phone"].value.trim();
        
        if (!name) newErrors.name = "El nombre es obligatorio.";
        if (!email) newErrors.email = "El correo electrónico es obligatorio.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Correo electrónico no válido.";
        
        if (!phone) newErrors.phone = "El teléfono es obligatorio.";
        else if (!/^\d{10,15}$/.test(phone)) newErrors.phone = "Teléfono no válido.";
        
        if (!file) newErrors.file = "Adjunta tu CV antes de enviar.";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setUploading(true);
            setUploadSuccess(false); 
            
            setTimeout(() => {
                setFile(selectedFile);
                setUploading(false);
                setUploadSuccess(true);
            }, 1500); 
        }
    };


    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try{
            setUploading(true);
            const response = await fetch('https://file.io', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            return data.link;
        }catch(error){
            setUploading(false);
            console.error("Error al subir el archivo: ", error);
            return null;
        }
    }
    const sendEmail = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!file) {
            alert("Por favor, adjunta tu CV antes de enviar.");
            return;
        }

        const fileUrl = await uploadFile(file);
        if (!fileUrl) {
            setUploadSuccess(false);
            alert("Error al subir el archivo. Inténtalo de nuevo.");
            return;
        }

        const  publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CV;
        const  serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_CV;
        const  templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CV;

        emailjs
            .sendForm(
                serviceId, 
                templateId, 
                {
                    user_name: form.current["name"].value,
                    user_email: form.current["email"].value,
                    user_phone: form.current["phone"].value,
                    cv_link: fileUrl,
                },
                publicKey 
            )
            .then(
                (result) => {
                    console.log('Email enviado:', result.text);
                    alert('¡Mensaje enviado con éxito!');
                    form.current.reset();
                    setFile(null);
                },
                (error) => {
                    console.error('Error al enviar el email:', error.text);
                    alert('Ocurrió un error al enviar el mensaje.');
                }
            );
            
    };
    
    return(
        <>  
            <div className='work-section-responsive' >
                <h1 className='work-section-text_responsive-title'>
                    {texts[language].title}
                </h1>
                <p className='work-section-text_responsive-subtitle'>
                    {texts[language].subtitle}
                </p>
            </div>
            <div className="work-section"id="work" >
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
                                <form  className="form" ref={form} onSubmit={sendEmail} >
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
                                            <img className='modal-img' src="/adjuntar-archivo.png" alt="adj-png" />
                                            <label className='modal-text-adj custom-file-label' htmlFor="file">{texts[language].adj}
                                            </label>
                                            <input className='transparent-file-input' name='file' type="file" id="file" accept=".pdf" onChange={handleFileChange}  />
                                            
                                            {uploading && <p className='upload-message'>Subiendo archivo...</p>}
                                            {uploadSuccess && <p className='upload-confirm' style={{ color: "green" }}> {file?.name}  ✅</p>}
                                        </div>
                                    </div>
                                    <div className='container-button-modal'>    
                                        <button  type='submit' className="button-work-with-us_modal" data-bs-toggle="modal" data-bs-target="#exampleModal" >
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