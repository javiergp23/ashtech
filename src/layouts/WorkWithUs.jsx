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
    const {register, handleSubmit, formState: {errors}, setError, clearErrors, reset, setValue, trigger} = useForm();
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


    const onSubmit = async(data, event) => {
        event.preventDefault()
        console.log(data)
        if (!file) {
            setError("file", { type: "manual", message: "El archivo es obligatorio." });
            return;
        }
        
            setUploading(true);
            const fileURL = await uploadFileToSupabase(file);

            if (!fileURL) {
                setUploading(false);
                alert("Error al subir el archivo.");
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
    
        console.log("Datos enviados");
       
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

        setFile(selectedFile);
        setValue("file", selectedFile);
        clearErrors("file");
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
                                    <form  className="form" encType="multipart/form-data" method="post" ref={form} onSubmit={handleSubmit(onSubmit)}  >
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
                                                    },
                                                    pattern: {
                                                        value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/, 
                                                        message: "El nombre solo puede contener letras"
                                                    }
                                                })}
                                                onBlur={() => trigger("user_name")}
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
                                            onBlur={() => trigger("user_email")}
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
                                                onBlur={() => trigger("user_phone")}
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
                                                <input className='transparent-file-input' name='user_file' type="file" id="file" accept=".pdf" 
                                                
                                                {...register("file", { 
                                                    required: file ? false : "El archivo es obligatorio",
                                                    validate: (value) => {
                                                        if (file) return true;
                                                        if (value.length === 0) return "Debes subir un archivo.";
                                                        if (!value[0].name.toLowerCase().endsWith(".pdf")) return "Solo se permiten archivos PDF.";
                                                        return true;
                                                    }
                                                })}
                                                onChange={(e) => {handleFileChange(e); trigger("user_file")}}
                                                onBlur={() => trigger("user_file")}
                                                />
                                                {errors.file && <p style={{ color: "red", fontSize: "15px", textAlign: "left", marginLeft: "45px" }}>{errors.file.message}</p>}
                                            </div>
                                                {file && !uploading && !errors.file && (
                                                    <p style={{ color: "green", fontSize: "15px", textAlign: "left", marginLeft: "45px" }}>
                                                        Archivo cargado: {file.name} ✅
                                                    </p>
                                                )}

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