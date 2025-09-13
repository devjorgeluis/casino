import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { callApi } from "../utils/Utils";
import CustomAlert from "../components/CustomAlert";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconEye from "/src/assets/svg/eye.svg";
import IconEyeSlash from "/src/assets/svg/eye-slash.svg";

const Login = () => {
    const { contextData } = useContext(AppContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [messageCustomAlert, setMessageCustomAlert] = useState("");
    const isButtonEnabled = username.length > 3 && password.length > 3;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            let body = {
                username: username,
                password: password,
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

    return (
        <>
            <form method="POST" className="sign-in-mobile" onSubmit={handleSubmit}>
                <div className="sign-in-mobile__back">
                    <span className="SVGInline sign-in-mobile__arrow" onClick={() => navigate("/home")}>
                        <img className="SVGInline-svg sign-in-mobile__arrow-svg" src={IconChevronLeft} alt="Back arrow" />
                    </span>
                    <span className="sign-in-mobile__back-text">Acceder</span>
                </div>
                <div className="sign-in-mobile__form">
                    <div className="sign-in-mobile__fields">
                        <div className="sign-in-mobile__field">
                            <span className="sign-in-mobile__label">Nombre de usuario<span className="sign-in-mobile__star">*</span></span>
                            <div className="sign-in-mobile__input">
                                <div className="input-mobile">
                                    <input
                                        className="input-mobile__native input-mobile__native_color_default input-mobile__native_type_text"
                                        type="text"
                                        name="username"
                                        placeholder="Nombre de usuario"
                                        autoComplete="false"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sign-in-mobile__field">
                            <span className="sign-in-mobile__label">Contraseña<span className="sign-in-mobile__star">*</span></span>
                            <div className="sign-in-mobile__input">
                                <div className="input-mobile">
                                    <input
                                        className="input-mobile__native input-mobile__native_color_default input-mobile__native_type_password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Contraseña"
                                        autoComplete="false"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {showPassword === false ? (
                                        <span
                                            className={`SVGInline input-mobile__password ${showPassword === false ? "input-mobile__password_active" : ""}`}
                                            onClick={() => setShowPassword(true)}
                                        >
                                            <img
                                                src={IconEye}
                                                className="SVGInline-svg input-mobile__password-svg input-mobile__password_active-svg"
                                            />
                                        </span>
                                    ) : (
                                        <span
                                            className="SVGInline input-mobile__password input-mobile__password_active"
                                            onClick={() => setShowPassword(false)}
                                        >
                                            <img
                                                src={IconEyeSlash}
                                                className="SVGInline-svg input-mobile__password-svg"
                                            />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sign-in-mobile__button">
                        <button
                            type="submit"
                            className={`button-mobile button-mobile_color_default button-mobile_borderRadius_500 ${isButtonEnabled ? "" : "button-mobile_disabled"}`}
                            disabled={!isButtonEnabled}
                        >
                            <span className="sign-in-mobile__button-text">Acceder</span>
                        </button>
                    </div>
                </div>
            </form>
            <CustomAlert message={messageCustomAlert} />
        </>
    );
};

export default Login;