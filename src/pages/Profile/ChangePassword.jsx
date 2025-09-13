import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconLock from "/src/assets/svg/lock.svg";
import IconEye from "/src/assets/svg/eye.svg";
import IconEyeSlash from "/src/assets/svg/eye-slash.svg";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            return window.innerWidth <= 767;
        };

        setIsMobile(checkIsMobile());

        const handleResize = () => {
            setIsMobile(checkIsMobile());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generatePassword = () => {
        // Stub for generating a secure password
        const generated = Math.random().toString(36).slice(2, 10) + "@1aA";
        setNewPassword(generated);
        setConfirmPassword(generated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <section className={isMobile ? "change-password-mobile" : "change-password-desktop"}>
            {
                isMobile ? 
                <button className="back-block" onClick={handleBack}>
                    <span className="SVGInline back-block__arrow">
                        <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="Back arrow" />
                    </span>
                    <div className="back-block__content">Cambiar la contraseña</div>
                </button> : 
                <div className="change-password-desktop__header">
                    <span className="change-password-desktop__header-icon">
                        <span className="SVGInline SVG-component__content">
                            <img className="SVGInline-svg SVG-component__content-svg" src={IconLock} />
                        </span>
                    </span>
                    <div className="change-password-desktop__header-title">Aquí puedes cambiar tu contraseña</div>
                </div>
            }

            <form className={isMobile ? "change-password-mobile__form" : "change-password-desktop__form"} onSubmit={handleSubmit}>
                <div className={isMobile ? "change-password-mobile__content" : "change-password-desktop__inputs"}>
                    <label className={isMobile ? "change-password-mobile__item" : "change-password-desktop__item"}>
                        <p className={isMobile ? "change-password-mobile__item-title" : "change-password-desktop__item-title"}>Contraseña actual</p>
                        <div className={isMobile ? "change-password-mobile__item-field" : "change-password-desktop__item-field"}>
                            <div className="input-desktop">
                                <span
                                    className={`SVGInline input-desktop__password ${showOldPassword ? "" : "input-desktop__password_active"}`}
                                    onClick={() => setShowOldPassword(true)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-svg input-desktop__password_active-svg" src={IconEye} />
                                </span>
                                <span
                                    className={`SVGInline input-desktop__password-off ${showOldPassword ? "input-desktop__password_active" : ""}`}
                                    onClick={() => setShowOldPassword(false)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-off-svg" src={IconEyeSlash} />
                                </span>
                                <input
                                    className={isMobile ? "input-mobile__native input-mobile__native_color_dark-blue input-mobile__native_type_password" : "input-desktop__native input-desktop__native_color_dark-blue input-desktop__native_type_password"}
                                    type={showOldPassword ? "text" : "password"}
                                    name="old-password"
                                    placeholder="Contraseña"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </label>
                    <label className={isMobile ? "change-password-mobile__item" : "change-password-desktop__item"}>
                        <p className={isMobile ? "change-password-mobile__item-title" : "change-password-desktop__item-title"}>Ingrese nueva contraseña</p>
                        <div className={isMobile ? "change-password-mobile__item-field" : "change-password-desktop__item-field"}>
                            <div className="input-desktop">
                                <span
                                    className={`SVGInline input-desktop__password ${showNewPassword ? "" : "input-desktop__password_active"}`}
                                    onClick={() => setShowNewPassword(true)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-svg input-desktop__password_active-svg" src={IconEye} />
                                </span>
                                <span
                                    className={`SVGInline input-desktop__password-off ${showNewPassword ? "input-desktop__password_active" : ""}`}
                                    onClick={() => setShowNewPassword(false)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-off-svg" src={IconEyeSlash} />
                                </span>
                                <input
                                    className={isMobile ? "input-mobile__native input-mobile__native_color_dark-blue input-mobile__native_type_password" : "input-desktop__native input-desktop__native_color_dark-blue input-desktop__native_type_password"}
                                    type={showNewPassword ? "text" : "password"}
                                    name="new-password"
                                    placeholder="Ingrese nueva contraseña"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </label>
                    <label className={isMobile ? "change-password-mobile__item" : "change-password-desktop__item"}>
                        <p className={isMobile ? "change-password-mobile__item-title" : "change-password-desktop__item-title"}>Confirmar nueva contraseña</p>
                        <div className={isMobile ? "change-password-mobile__item-field" : "change-password-desktop__item-field"}>
                            <div className="input-desktop">
                                <span
                                    className={`SVGInline input-desktop__password ${showConfirmPassword ? "" : "input-desktop__password_active"}`}
                                    onClick={() => setShowConfirmPassword(true)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-svg input-desktop__password_active-svg" src={IconEye} />
                                </span>
                                <span
                                    className={`SVGInline input-desktop__password-off ${showConfirmPassword ? "input-desktop__password_active" : ""}`}
                                    onClick={() => setShowConfirmPassword(false)}
                                >
                                    <img className="SVGInline-svg input-desktop__password-off-svg" src={IconEyeSlash} />
                                </span>
                                <input
                                    className={isMobile ? "input-mobile__native input-mobile__native_color_dark-blue input-mobile__native_type_password" : "input-desktop__native input-desktop__native_color_dark-blue input-desktop__native_type_password"}
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="repeat-new-password"
                                    placeholder="Repita la nueva contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </label>
                </div>
                <div className={isMobile ? "change-password-mobile__button-block" : "change-password-desktop__button-block"}>
                    <div className={isMobile ? "change-password-mobile__button" : "change-password-desktop__button"}>
                        <button type="button" className="button-desktop button-desktop_color_pink" onClick={generatePassword}>
                            <span className="change-password-desktop__button-text change-password-desktop__button-text_isYellow">
                                Genera una contraseña segura
                            </span>
                        </button>
                    </div>
                    <div className={isMobile ? "change-password-mobile__button" : "change-password-desktop__button"}>
                        <button type="submit" className={isMobile ? "button-mobile button-mobile_color_default" : "button-desktop button-desktop_color_default"} disabled={!oldPassword || !newPassword || !confirmPassword}>
                            <span className="change-password-desktop__button-text">Restablecer</span>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ChangePassword;