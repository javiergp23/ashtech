import './card.css';

export default function Card({id, title, img, paragraph, imgModal, titleModal, paragraphModal}) {
    return(
        <>
            <div className="card" type="button" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                <img className="card_img" src={img} alt="img-card" />
                <h1 className="card_title">
                    {title}
                </h1>
                <p className="card_paragraph">
                   {paragraph}
                </p>
            </div>
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-container">
                <div className="modal-content">
                <div className="modal-header">
                    {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body modal-container-style">
                    <div className="modal-container-img">
                        <img className="img-modal" src={imgModal} alt="" />
                    </div>
                    <div className='details-responsive'>
                        <img className="img-modal" src={imgModal} alt="" />
                        <h1 className="title-model_reponsive">
                            {titleModal}
                        </h1>
                    </div>
                    <div>
                        <h1 className="title-modal">
                            {titleModal}
                        </h1>
                        <p className="paragraph-modal">
                            {paragraphModal}
                        </p>
                    </div>
                </div>
                <div className="container-button-modal">
                    <button className="button-modal">
                        Consultar
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}