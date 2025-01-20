import { useLanguage } from '../context/LanguageContext'
import './contact.css'

export default function Contact(){
    const { language } = useLanguage();
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
    return(
        <>
            <div className="container-form-component" id="contact">
                <h1 className="title-form">{texts[language].titleContact}</h1>
                <h2 className="subtitle-form">{texts[language].subtitleContact}</h2>
                <form action="" className="form">
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="">{texts[language].name}</label>
                         <input type="text" placeholder="    Juan Perez" className="input"/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="">{texts[language].email}</label>
                         <input type="text" placeholder="    ejemplo@gmail.com" className="input"/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="">{texts[language].telefono}</label>
                         <input type="text" placeholder="    011 56749288" className="input"/>
                    </div>
                    <div className="item-form-container item-form-container_contact">
                        <label htmlFor="">{texts[language].mensaje}</label>
                         <input className="label-menssage input" type="textarea" placeholder={texts[language].placeholderMessage}/>
                    </div>
                    <div className="boton-container">
                        <button className="button-form">{texts[language].buttonContact}</button>
                    </div>
                </form>
            </div>
        </>
    )
}