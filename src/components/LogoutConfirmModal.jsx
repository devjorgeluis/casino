import IconClose from "/src/assets/svg/close.svg";

const LogoutConfirmModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal" style={{display: "block"}}>
            <div className="modal__content-container">
                <div className="logout-modal-desktop">
                    <span className="logout-modal-desktop__cross" onClick={onCancel}>
                        <span className="SVGInline SVG-component__content">
                            <img src={IconClose} />
                        </span>
                    </span>
                    <h2 className="logout-modal-desktop__title">Cerrar sesión</h2>
                    <span className="logout-modal-desktop__sub-title">¿Ya te vas? ¿Tan rapido? Te extrañaremos</span>
                    <div className="logout-modal-desktop__button-group">
                        <div className="logout-modal-desktop__button-container">
                            <button type="button" className="button-desktop button-desktop_color_default" onClick={onCancel}>No</button>
                        </div>
                        <div className="logout-modal-desktop__button-container">
                            <button type="button" className="button-desktop button-desktop_color_purple-bordered" onClick={onConfirm}>Sí</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmModal;