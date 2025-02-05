import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'
import { useForm } from 'react-hook-form';
import './workWithUs.css'

export default function WorkWithUs(){
    const { language } = useLanguage();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [allowCloseModal, setAllowCloseModal] = useState(false);
    const {register, handleSubmit, formState: {errors}, setError, clearErrors, reset } = useForm();

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

    const onSubmit = (handleSubmit((data) => {
        console.log(data)
        if (!file) {
            setError("file", { type: "manual", message: "El archivo es obligatorio." });
            return;
        }
    
        console.log("Datos enviados:", { ...data, file });
        setUploadSuccess(false);

        // Habilitar cierre del modal solo si el formulario es válido
        setAllowCloseModal(true);

        reset();
       
      }))
    

    const handleFileChange = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
            setError("file", { type: "manual", message: "El archivo es obligatorio." });
            return;
        }
    
        if (!selectedFile.name.toLowerCase().endsWith(".pdf")) {
            setError("file", { type: "manual", message: "Solo se permiten archivos .pdf." });
            return;
        }
    
        clearErrors("file");
        setUploading(true);
        setUploadSuccess(false);
    
        setTimeout(() => {
            setFile(selectedFile);
            setUploading(false);
            setUploadSuccess(true);
        }, 1500);
    };

    return(
        <>  
            <div className='work-section-responsive' id="work" >
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
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form  className="form" onSubmit={onSubmit}  >
                                <h1 className="modal-title fs-5 modal-title-cv" id="exampleModalLabel">{texts[language].formTitle}</h1>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="name">{texts[language].name}</label>
                                        <input type="text" name='name' placeholder="    Juan Perez" className="input input-modal_cv"
                                            {...register("name", { 
                                                required: {
                                                  value: true,
                                                  message: "El nombre es requerido"
                                                },
                                                minLength: {
                                                  value: 4,
                                                  message: "El nombre debe tener al menos 4 caracteres"
                                                },
                                                maxLength: {
                                                  value: 40,
                                                  message: "El nombre no puede tener mas de 10 caracteres"
                                                }
                                              })}

                                        />
                                        {
                                            errors.name && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.name.message}</p>
                                        }
                                    </div>
                                    <div className="item-form-container">
                                        <label className='label-modal_cv' htmlFor="email">{texts[language].email}</label>
                                        <input type="text" name='email' placeholder="    ejemplo@gmail.com" className="input input-modal_cv"
                                        
                                        {...register("email", { 
                                            required: {
                                              value: true,
                                              message: "El email es requerido"
                                            },
                                          
                                            pattern: {  
                                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                              message: "El email no es valido"
                                            }
                                          })}
                                        
                                        />
                                        {
                                            errors.email && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.email.message}</p>
                                        }
                                    </div>
                                    <div className="item-form-container">
                                        <label  className='label-modal_cv' htmlFor="phone">{texts[language].phone}</label>
                                        <input type="number" name='phone' placeholder="    011 56749288" className="input input-modal_cv"
                                            {...register("phone", {
                                                required: "El número de teléfono es requerido",
                                                pattern: {
                                                  value: /^(\54\s?9?\s?)?(\d{2,4})\s?\d{3,5}-?\d{4}$/,
                                                  message: "Formato inválido. Ej: +54 9 11 1234-5678",
                                                },
                                                minLength: {
                                                  value: 10,
                                                  message: "El número debe tener al menos 10 dígitos",
                                                },
                                                maxLength: {
                                                  value: 15,
                                                  message: "El número no debe superar los 15 dígitos",
                                                },
                                              })}
                                        
                                        />
                                        {
                                            errors.phone && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.phone.message}</p>
                                        }
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
                                        </div>
                                        {errors.file && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "20px"}}>{errors.file.message}</p>}
                                            
                                        {uploading && <p className='upload-message'>Subiendo archivo...</p>}
                                        {uploadSuccess && <p className='upload-confirm' style={{ color: "green"}}> {file?.name}  ✅</p>}
                                    </div>
                                    <div className='container-button-modal'>    
                                        <button  type='submit' className="button-work-with-us_modal" {...(allowCloseModal && { "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" })} >
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