import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { callApi } from "../utils/Utils";
import CustomAlert from "../components/CustomAlert";
import ImgBackground from "/src/assets/img/auth-background.png";
import IconClose from "/src/assets/svg/close.svg";
import IconEye from "/src/assets/svg/eye.svg";
import IconEyeSlash from "/src/assets/svg/eye-slash.svg";

const LoginModal = ({ isOpen, onClose }) => {
    const { contextData } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [messageCustomAlert, setMessageCustomAlert] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            let body = {
                username: username,
                password: password,
                site_label: "main"
            };
            callApi(
                contextData,
                "POST",
                "/login/",
                callbackSubmitLogin,
                JSON.stringify(body)
            );
        }
    };

    const callbackSubmitLogin = (result) => {
        if (result.status === "success") {
            setMessageCustomAlert(["success", "¡Éxito! La sesión ha sido iniciada"]);
            localStorage.setItem("session", JSON.stringify(result));
            window.location.href = "/";
        } else if (result.status === "country") {
            setMessageCustomAlert(["error", result.message]);
        } else {
            setMessageCustomAlert(["error", "¡Error! Nombre de usuario o contraseña no válidos"]);
        }
    };

    useEffect(() => {
        const passwordInput = document.getElementById("password");
        if (passwordInput) {
            passwordInput.setAttribute("type", showPassword ? "text" : "password");
        }
    }, [showPassword]);

    if (!isOpen) return null;

    return (
        <>
            <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
                <div className="modal__content-container">
                    <div className="sign-in-desktop">
                        <div className="sign-in-desktop__background">
                            <img className="sign-in-desktop__background" src={ImgBackground} alt="background" />
                        </div>

                        <form method="POST" className="sign-in-desktop__form" onSubmit={handleSubmit}>
                            <span className="sign-in-desktop__cross" onClick={onClose}>
                                <span className="SVGInline SVG-component__content">
                                    <img src={IconClose} className="SVGInline-svg SVG-component__content-svg" />
                                </span>
                            </span>
                            <span className="sign-in-desktop__title">Autorización</span>
                            <div className="sign-in-desktop__fields">
                                <span className="sign-in-desktop__label">Nombre<span className="sign-in-desktop__star"> *</span></span>
                                <div className="sign-in-desktop__input">
                                    <div className="input-desktop">
                                        <input
                                            className="input-desktop__native input-desktop__native_color_default input-desktop__native_type_text"
                                            type="text"
                                            name="username"
                                            placeholder="Nombre"
                                            autoComplete="false"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <span className="sign-in-desktop__label">Contraseña<span className="sign-in-desktop__star"> *</span></span>
                                <div className="sign-in-desktop__input">
                                    <div className="input-desktop">
                                        <input
                                            id="password"
                                            className="input-desktop__native input-desktop__native_color_default input-desktop__native_type_password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Contraseña"
                                            autoComplete="false"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        {showPassword === false ? (
                                            <span
                                                className={`SVGInline input-desktop__password ${showPassword === false ? "input-desktop__password_active" : ""}`}
                                                onClick={() => setShowPassword(true)}
                                            >
                                                <img
                                                    src={IconEye}
                                                    className="SVGInline-svg input-desktop__password-svg input-desktop__password_active-svg"
                                                />
                                            </span>
                                        ) : (
                                            <span
                                                className="SVGInline input-desktop__password input-desktop__password_active"
                                                onClick={() => setShowPassword(false)}
                                            >
                                                <img
                                                    src={IconEyeSlash}
                                                    className="SVGInline-svg input-desktop__password-svg"
                                                />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="sign-in-desktop__button">
                                <button type="submit" className="button-desktop button-desktop_color_default">
                                    <span className="sign-in-desktop__button-text">Acceder</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <CustomAlert message={messageCustomAlert} />
        </>
    );
};

export default LoginModal;