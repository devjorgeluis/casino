import { useNavigate } from "react-router-dom";
import ImgLogo from "/src/assets/svg/footer-logo.svg";
import ImgBet from "/src/assets/img/bet-responsibility.png";

const Footer = ({ isSlotsOnly }) => {
    const navigate = useNavigate();

    return (
        <div className="app__footer-container">
            <footer className="footer">
                <nav className="footer__nav-links">
                    <div className="footer__menu-container">
                        <a className="footer__menu-item" onClick={() => navigate("/")}>
                            <span className="footer__menu-description">Inicio</span>
                        </a>
                        {
                            isSlotsOnly === "false" && 
                            <a className="footer__menu-item" onClick={() => navigate("/sports")}>
                                <span className="footer__menu-description">Deporte</span>
                            </a>
                        }
                    </div>
                    <div className="footer__menu-container">
                        <a className="footer__menu-item" onClick={() => navigate("/casino")}>
                            <span className="footer__menu-description">Casino</span>
                        </a>
                        {
                            isSlotsOnly === "false" && 
                            <a className="footer__menu-item" onClick={() => navigate("/casinolive")}>
                                <span className="footer__menu-description">Casino en vivo</span>
                            </a>
                        }
                    </div>
                    <div className="footer__menu-container">
                        <a className="footer__menu-item" href="/sport-rules">
                            <span className="footer__menu-description"> Reglas deportivas</span>
                        </a>
                        <a className="footer__menu-item" href="/ultim8-sport-rules">
                            <span className="footer__menu-description">Reglas deportivas ULTIM8</span>
                        </a>
                        <a className="footer__menu-item" href="/market-description">
                            <span className="footer__menu-description">Descripción de los mercados</span>
                        </a>
                        <a className="footer__menu-item" href="/tipos-de-apuestas">
                            <span className="footer__menu-description">Tipos de apuestas</span>
                        </a>
                    </div>
                </nav>
                <div className="footer__center">
                    <div className="footer__logo">
                        <img
                            title="Casino"
                            alt="Casino"
                            src={ImgLogo}
                            className="logo-domain"
                        />
                    </div>
                    <p className="footer__center-desc"></p>
                </div>
                <div className="footer__right">
                    <div className="footer__button">
                        <div className="scroll-top-button-desktop">
                            <button
                                type="button"
                                className="button-desktop button-desktop_color_transparent"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span className="scroll-top-button-desktop__text">Volver arriba</span>
                            </button>
                        </div>
                    </div>
                    <div className="footer__right-container">
                        <img className="footer__icon" src={ImgBet} alt="18+" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;