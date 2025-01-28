import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext'
import emailjs from 'emailjs-com';
import './contact.css'

export default function Contact(){
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
        },
        en: {
            titleContact: "Contact us",
            subtitleContact: "We would like to fill in the following form.",
            name: "Name and surname",
            email: "Email",
            telefono: "Phone",
            mensaje: "Message",
            buttonContact: "Send",
            placeholderMessage: "Write a message...",
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_vb4y59v', // Reemplaza con tu Service ID
                'template_3tp7det', // Reemplaza con tu Template ID
                form.current,
                'M-nG62mrFKNARsnGl' // Reemplaza con tu Public Key de EmailJS
            )
            .then(
                (result) => {
                    console.log('Email enviado:', result.text);
                    alert('¡Mensaje enviado con éxito!');
                },
                (error) => {
                    console.error('Error al enviar el email:', error.text);
                    alert('Ocurrió un error al enviar el mensaje.');
                }
            );
    };
    return(
        <>
            <div className="container-form-component" id="contact">
                <h1 className="title-form">{texts[language].titleContact}</h1>
                <h2 className="subtitle-form">{texts[language].subtitleContact}</h2>
                <form  className="form" ref={form} onSubmit={sendEmail}>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="name">{texts[language].name}</label>
                         <input type="text" name='user_name' placeholder="    Juan Perez" className="input" required/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="email">{texts[language].email}</label>
                         <input  type="email" name='user_email' placeholder="    ejemplo@gmail.com" className="input" required/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="phone">{texts[language].telefono}</label>
                         <input type="text" name='user_phone' placeholder="    011 56749288" className="input"/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="message">{texts[language].mensaje}</label>
                         <input className="label-menssage input" name='message' type="textarea" placeholder={texts[language].placeholderMessage} required/>
                    </div>
                    <div className="boton-container">
                        <button type='submit' className="button-form">{texts[language].buttonContact}</button>
                    </div>
                </form>
            </div>
        </>
    )
}