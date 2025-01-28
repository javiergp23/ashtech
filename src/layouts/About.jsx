import { useLanguage } from '../context/LanguageContext'
import './about.css'

export default function About(){
    const { language } = useLanguage();
    const texts = {
        es: {
            title: "Queremos que nos conozcas",
            subtitle: "Te contamos nuestros valores y asi, sepas quienes somos.",
            textOne: "Compromiso",
            textTwo: "Excelencia",
            textThree: "Innovación",
            firstText: "Somos una empresa que tiene como",
            firstTextSpan: "objetivo el crecimiento de nuestros clientes",
            firstTextSpanTwo: " mediante el desarrollo de software a la medida, la provisión de recursos calificados y la gestión integral de proyectos.",
            secondText: "Nos comprometemos a entregar resultados excepcionales, ya que trabajamos de la mano de la innovación y el compromiso hacia nuestros clientes.",
            thirdText: "Tenemos una meta, ser tu socio lider en soluciones tecnologias innovadoras transformando el futuro de tu empresa en su mejor version.",
            fourthText: "Estamos para ayudarte a crear el exito de tus sueños.",
        },
        en: {
            title: "We want to know you",
            subtitle: "We tell you our values and we know who you are.",
            textOne: "Commitment",
            textTwo: "Excellence",
            textThree: "Innovation",
            firstText: "We are a company that has as",
            firstTextSpan: "objective the growth of our clients",
            firstTextSpanTwo: " through software development at a measured pace, provision of qualified resources and integrated project management.",
            secondText: "We commit ourselves to delivering exceptional results, as we work in the innovation and commitment towards our clients.",
            thirdText: "We have a goal, to be your leader in innovative technology-driven solutions transforming the future of your company into its best version.",
            fourthText: "We are here to help you create the success of your dreams.",
        },
    };
    
    return(
        <>
            <div className="about-container" id="about">
                <h1 className="title-about">
                {texts[language].title}
                </h1>
                <p className="subtitle-about">
                {texts[language].subtitle} 
                </p>
            </div>
            <div className="about-container-card">
                <div className="about-div-containar">
                    <img className="img-about-card" src="/06927984644db88d9f37d7edb1f243c4.gif" alt="img-about" />
                    <p className="text-about-card">{texts[language].textOne}</p>
                </div>
                <div>
                    <img className="img-about-card" src="/2ef9f2486d1996d9289dd17c6ecf1efd.gif" alt="img-about" />
                    <p className="text-about-card">{texts[language].textTwo}</p>
                </div>
                <div>
                    <img className="img-about-card" src="/ed11b4256b8f3d6d87b72e9e0fecac9b.gif" alt="img-about" />
                    <p className="text-about-card">{texts[language].textThree}</p>
                </div>
            </div>
            <div className="about-section">
                <div>
                    <img className="about-section_img" src="/img-section-about.png" alt="img-section-about" />
                    <img className="about-section_img-responsive" src="/img-about-rspv.png" alt="img-section-about-responsive" />
                </div>
                <div className="about-section-text-container">
                    <p className="about-section-text">
                        {texts[language].firstText} <span className="text-span">{texts[language].firstTextSpan}</span>{texts[language].firstTextSpanTwo} <br className="space-text"/> <br />

                        {texts[language].secondText} <br className="space-text"/> <br />

                        {texts[language].thirdText} <br className="space-text"/> <br />

                        <span className="text-span">{texts[language].fourthText} </span>
                    </p>
                    <p className='about-section-text-responsive'>
                    {texts[language].firstText} <span className="text-span">{texts[language].firstTextSpan}</span>{texts[language].firstTextSpanTwo} <br className="space-text"/> <br />
                    </p>
                    <p className="about-section-text-tablet">
                        {texts[language].firstText} <span className="text-span">{texts[language].firstTextSpan}</span>{texts[language].firstTextSpanTwo} <br className="space-text"/> <br />

                        {texts[language].secondText} <br className="space-text"/> <br />
                    </p>    
                    
                </div>
            </div>
            <div className='responsive-section'>
                <p className='about-section-text-responsive-two'> 
                    {texts[language].secondText} <br className="space-text"/> <br />

                    {texts[language].thirdText} <br className="space-text"/> <br />

                    <span className="text-span">{texts[language].fourthText} </span>
                </p>
                <p className='about-section-text-two-tablet'>
                {texts[language].thirdText} <br className="space-text"/> <br />

                    <span className="text-span">{texts[language].fourthText} </span>
                </p>
            </div>
        </>
    )
}