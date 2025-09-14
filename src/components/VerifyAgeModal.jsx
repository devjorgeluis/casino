import ImgMascot from "/src/assets/img/mascot.webp";

const VerifyAgeModal = ({ isOpen, onConfirm }) => {

    if (!isOpen) return null;

    return (
        <>
            <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
                <div className="modal__content-container">
                    <div className="age-verification-desktop">
                        <img className="age-verification-desktop__mascot" src={ImgMascot} alt="mascot" />

                        <h2 className="age-verification-desktop__title">Verificación de Edad</h2>
                        <span className="age-verification-desktop__sub-title">Sos mayor de <span>18+</span> años?</span>
                        <div className="age-verification-desktop__button-group">
                            <div className="age-verification-desktop__button-container">
                                <button type="button" className="button-desktop button-desktop_color_default" onClick={() => onConfirm()}>Si</button>
                            </div>
                            <div className="age-verification-desktop__button-container">
                                <a type="button" className="button-desktop button-desktop_color_purple-bordered" href="https://google.com">No</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyAgeModal;