import ImgLogo from "/src/assets/img/logo-net-new.png";
import ImgBet from "/src/assets/img/bet-responsibility.png";
import IconChat from "/src/assets/svg/chat.svg";

const Footer = () => {
    return (
        <div className="app__footer-container">
            <footer className="footer">
                <nav className="footer__nav-links">
                    <div className="footer__menu-container">
                        <a className="footer__menu-item" href="/">
                            <span className="footer__menu-description">Inicio</span>
                        </a>
                        <a className="footer__menu-item" href="/sports">
                            <span className="footer__menu-description">Deporte</span>
                        </a>
                    </div>
                    <div className="footer__menu-container">
                        <a className="footer__menu-item" href="/casino">
                            <span className="footer__menu-description">Casino</span>
                        </a>
                        <a className="footer__menu-item" href="/casinolive">
                            <span className="footer__menu-description">Casino en vivo</span>
                        </a>
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
                <div className="chat-with-us app-mode-chat">
                    <div className="tawk-min-container">
                        <span className="tawk-badge tawk-flex tawk-flex-center tawk-flex-middle tawk-min-badge">0</span>
                        <button type="button" aria-label="Widget de Chat" title="Widget de Chat" className="tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large">
                            <img className="tawk-min-chat-icon" src={IconChat} />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;