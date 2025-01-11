import './contact.css'

export default function Contact(){
    return(
        <>
            <div className="container-form-component" id="contact">
                <h1 className="title-form">Contáctate con nosotros</h1>
                <h2 className="subtitle-form">Te invitamos a llenar el siguiente formulario.</h2>
                <form action="" className="form">
                    <div className="item-form-container">
                        <label htmlFor="">Nombre y apellido</label>
                         <input type="text" placeholder="    Juan Perez" className="input"/>
                    </div>
                    <div className="item-form-container">
                        <label htmlFor="">Correo Electrónico</label>
                         <input type="text" placeholder="    ejemplo@gmail.com" className="input"/>
                    </div>
                    <div className="item-form-container">
                        <label htmlFor="">Teléfono</label>
                         <input type="text" placeholder="    011 56749288" className="input"/>
                    </div>
                    <div className="item-form-container">
                        <label htmlFor="">Mensaje</label>
                         <input className="label-menssage input" type="textarea" placeholder="    Escribe un mensaje..."/>
                    </div>
                    <div className="boton-container">
                        <button className="button-form">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}