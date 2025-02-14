import { useState, useRef} from 'react';
import { useLanguage } from '../context/LanguageContext'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { createClient } from '@supabase/supabase-js';
import './workWithUs.css'

// Configuración de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function WorkWithUs(){
    const { language } = useLanguage();
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [allowCloseModal, setAllowCloseModal] = useState(false);
    const {register, handleSubmit, formState: {errors}, setError, clearErrors, reset, setValue } = useForm();
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

    const onSubmit = async(data) => {
        console.log(data)
        if (!file) {
            setError("file", { type: "manual", message: "El archivo es obligatorio." });
            return;
        }
        
            setUploading(true);
            const fileURL = await uploadFileToSupabase(file);

            if (!fileURL) {
                alert("Error al subir el archivo.");
                setUploading(false);
                return;
            }
            setUploading(false);
            setUploadSuccess(true);
            // Habilitar cierre del modal solo si el formulario es válido
            setAllowCloseModal(true);
          
            sendEmail(data, fileURL);
            reset();
            setFile(null);
            setFileURL(null);
            setUploadSuccess(false);
            setAllowCloseModal(false);
    
        console.log("Datos enviados:", { ...data, file });
       
      };

      const uploadFileToSupabase = async (file) => {
        setUploading(true);
        setUploadSuccess(false);
        const fileName = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
            .from('files')  // Nombre del bucket en Supabase
            .upload(fileName, file);

        if (error) {
            console.error("Error al subir el archivo:", error);
            return null;
        }

        setUploading(false);
        setUploadSuccess(true);
        // Obtener URL pública del archivo
        const { data: publicUrl } = supabase.storage.from('files').getPublicUrl(fileName);
        return publicUrl.publicUrl;
    };


    const sendEmail = async (data, fileURL) => {
        const emailParams = {
            user_name: data.user_name,
            user_email: data.user_email,
            user_phone: data.user_phone,
            user_file: fileURL,
        };

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID_CV,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CV,
                emailParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CV
            );
            console.log('Email enviado:', result.text);
            alert('¡Mensaje enviado con éxito!');
        } catch (error) {
            console.error('Error al enviar el email:', error);
            alert('Ocurrió un error al enviar el mensaje.');
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (!selectedFile || !selectedFile.name.toLowerCase().endsWith(".pdf")) {
            setError("file", { type: "manual", message: "El archivo debe ser un PDF." });
            return;
        }

        clearErrors("file");
        setFile(selectedFile);
        setValue("file", selectedFile);
    };

    const handleFileValidation = async (data) => {
        if (!file) {
            setError("file", { type: "manual", message: "El archivo es obligatorio." });
            return;
        }
    
        clearErrors("file"); // Limpiar errores previos
        await onSubmit(data); // Ejecutar la lógica de envío solo si todo está correcto

        clearErrors();
    };

    return(
        <>  
            <div id="work">
                <div className='work-section-responsive'  >
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
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form  className="form" encType="multipart/form-data" method="post" ref={form} onSubmit={handleSubmit(handleFileValidation)}  >
                                    <h1 className="modal-title fs-5 modal-title-cv" id="exampleModalLabel">{texts[language].formTitle}</h1>
                                        <div className="item-form-container">
                                            <label className='label-modal_cv' htmlFor="user_name">{texts[language].name}</label>
                                            <input type="text" name='user_name' placeholder="    Juan Perez" className="input input-modal_cv"
                                                {...register("user_name", { 
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
                                                    message: "El nombre no puede tener mas de 40 caracteres"
                                                    }
                                                })}

                                            />
                                            {
                                                errors.user_name && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.user_name.message}</p>
                                            }
                                        </div>
                                        <div className="item-form-container">
                                            <label className='label-modal_cv' htmlFor="user_email">{texts[language].email}</label>
                                            <input type="text" name='user_email' placeholder="    ejemplo@gmail.com" className="input input-modal_cv"
                                            
                                            {...register("user_email", { 
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
                                                errors.user_email && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.user_email.message}</p>
                                            }
                                        </div>
                                        <div className="item-form-container">
                                            <label  className='label-modal_cv' htmlFor="user_phone">{texts[language].phone}</label>
                                            <input type="number" name='user_phone' placeholder="    011 56749288" className="input input-modal_cv"
                                                {...register("user_phone", {
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
                                                errors.user_phone && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px"}}>{errors.user_phone.message}</p>
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
                                                <input className='transparent-file-input' name='user_file' type="file" id="file" accept=".pdf"  onChange={handleFileChange}
                                                />
                                            </div>
                                            {errors.user_file && <p style={{color: "red", fontSize: "15px", textAlign: "left", marginLeft: "20px"}}>{errors.user_file.message}</p>}
                                                
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
            </div>
        </>
    )
}