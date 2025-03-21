import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser';
import './contact.css'

export default function Contact(){
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
    });
    const { language } = useLanguage();
    const form = useRef();
    
    const texts = {
        es: {
            titleContact: "Contáctate con nosotros",
            subtitleContact: "Te invitamos a llenar el siguiente formulario.",
            name: "Nombre y apellido",
            email: "Correo Electrónico",
            telefono: "Teléfono",
            mensaje: "Mensaje",
            buttonContact: "Enviar",
            placeholderMessage: "Escribe un mensaje...",
            errorName: "El nombre debe tener al menos 3 caracteres.",
            errorEmail: "Ingrese un correo válido.",
            errorPhone: "El teléfono debe contener al menos 8 dígitos numéricos.",
            errorMessage: "El mensaje no puede estar vacío.",
        },
        en: {
            titleContact: "Contact us",
            subtitleContact: "Please fill out the following form, so we can contact you.",
            name: "Name and surname",
            email: "Email",
            telefono: "Phone",
            mensaje: "Message",
            buttonContact: "Send",
            placeholderMessage: "Write a message...",
            errorName: "The name must be at least 3 characters long.",
            errorEmail: "Enter a valid email address.",
            errorPhone: "The phone number must contain at least 8 numeric digits.",
            errorMessage: "The message cannot be empty.",
        },
    };

    const validateField = (name, value) => {
        let error = '';

        if (name === 'user_name') {
            if (value.trim().length < 3) {
                error = texts[language].errorName;
            } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
                error = texts[language].errorName;
             }
        }

        if (name === 'user_email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = texts[language].errorEmail;
        }

        if (name === 'user_phone') {
            if (value && !/^\d{8,}$/.test(value)) {
                error = texts[language].errorPhone;
             }
        }

        if (name === 'message' && value.trim() === '') {
             error = texts[language].errorMessage;
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };
    const handleInputChange = (e) => {
        validateField(e.target.name, e.target.value);
    };
    
    const sendEmail = (e) => {
        e.preventDefault();
        const formElements = form.current.elements;
        let isValid = true;
        let newErrors = {};

        Object.keys(errors).forEach((field) => {
            const value = formElements[field]?.value || '';
                validateField(field, value);  // Valida cada campo
                newErrors[field] = value.trim() === '' ? texts[language][`error${field.charAt(0).toUpperCase() + field.slice(1)}`] : '';
                if (newErrors[field]) isValid = false;
        });

        setErrors(newErrors);

        if (!isValid) {
            alert('Por favor corrige los errores antes de enviar.');
            return;
        }

        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                alert('¡Mensaje enviado con éxito!');
                form.current.reset();
                setErrors({ user_name: '', user_email: '', user_phone: '', message: '' });
            })
            .catch(() => {
                alert('Ocurrió un error al enviar el mensaje.');
            });
    };
    return(
        <>
            <div className="container-form-component" id="contact">
                <h1 className="title-form">{texts[language].titleContact}</h1>
                <h2 className="subtitle-form">{texts[language].subtitleContact}</h2>
                <form  className="form" ref={form} onSubmit={sendEmail} noValidate>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="name">{texts[language].name}</label>
                         <input type="text" name='user_name' placeholder="    Juan Perez" className={`input ${errors.user_name ? 'input-error' : ''}`}
                        onBlur={handleInputChange}
                        onInput={handleInputChange}
                        required/>
                        {errors.user_name && <p style={{color: "red", textAlign: "center", fontSize: "15px",}} className="error-text">{errors.user_name}</p>}
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="email">{texts[language].email}</label>
                         <input  type="email" name='user_email' placeholder="    ejemplo@gmail.com" className={`input ${errors.user_email ? 'input-error' : ''}`}
                        onBlur={handleInputChange}
                        onInput={handleInputChange}
                        required/>
                        {errors.user_email && <p style={{color: "red", textAlign: "center", fontSize: "15px",}} className="error-text">{errors.user_email}</p>}
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="phone">{texts[language].telefono}</label>
                        <input type="number" name='user_phone' placeholder="    011 56749288" className={`input ${errors.user_phone ? 'input-error' : ''}`}
                        onBlur={handleInputChange}
                        onInput={handleInputChange}/>
                        {errors.user_phone && <p style={{color: "red", textAlign: "center", fontSize: "15px",}} className="error-text">{errors.user_phone}</p>}
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="message">{texts[language].mensaje}</label>
                         <textarea className="label-menssage " name='message' type="textarea" placeholder={texts[language].placeholderMessage} onBlur={handleInputChange}
                        onInput={handleInputChange}
                        required />
                        {errors.message && <p style={{color: "red", textAlign: "center", fontSize: "15px",}} className="error-text">{errors.message}</p>}
                    </div>
                    <div className="boton-container">
                        <button type='submit' className="button-form">{texts[language].buttonContact}</button>
                    </div>
                </form>
            </div>
        </>
    )
}