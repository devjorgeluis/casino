import React, { useState } from "react";
import ImgLogo from "/src/assets/img/logo-net-new.png";
import ImgEn from "/src/assets/img/en.png";
import ImgEs from "/src/assets/img/es.png";
import ImgBet from "/src/assets/img/bet-responsibility.png";
import IconHamburger from "/src/assets/svg/hamburger.svg";
import IconProfile from "/src/assets/svg/profile.svg";
import IconCasino from "/src/assets/svg/casino.svg";
import IconSupport from "/src/assets/svg/support.svg";
import IconArrowRight from "/src/assets/svg/arrow-right.svg";

const MobileSidebar = ({ isOpen, onToggle, isLogin }) => {
    const [showLanguage, setShowLanguage] = useState(false);
    
    const toggleLanguageMenu = () => {
        setShowLanguage((prevShowLanguage) => !prevShowLanguage);
    };

    return (
        <>
            <header className="header-mobile">
                <div className="header-mobile__container">
                    <span className="SVGInline header-mobile__burger" onClick={onToggle}>
                        <img src={IconHamburger} className="SVGInline-svg header-mobile__burger-svg" />
                    </span>
                    <a className="header-mobile__home-link" href="/">
                        <div className="header-mobile__logo">
                            <img className="logo-domain" src={ImgLogo} alt="logo" loading="lazy" />
                        </div>
                    </a>
                </div>
                {
                    isLogin ? (
                        <a className="header-mobile__info" href="/profile">
                            <div className="header-card-mobile">
                                <div className="header-card-mobile__content">
                                    <div className="header-mobile__balance"><span className="header-mobile__amount">7.30</span><span className="header-mobile__currency">ARS</span></div>
                                </div>
                            </div>
                            <div className="header-card-mobile">
                                <div className="header-card-mobile__content">
                                    <span className="SVGInline header-mobile__user">
                                        <img src={IconProfile} className="SVGInline-svg header-mobile__user-svg" />
                                    </span>
                                    <div className="header-mobile__user-notifies-count header-mobile__user-notifies-count_zero">0</div>
                                </div>
                            </div>
                        </a>
                    ) : (
                        <a className="header-mobile__button" href="/login">
                            <div className="button-mobile button-mobile_color_default">
                                <span className="header-mobile__button-text">Acceder</span>
                            </div>
                        </a>
                    )
                }
                
            </header>
            <div className={`slide-out ${isOpen ? "slide-out_open" : ""}`}>
                <div className="slide-out__menu-wrapper">
                    <div className="slide-out__menu">
                        <section className="side-menu-mobile">
                            <nav className="side-menu-mobile__navigation">
                                <div className="links-menu-side-menu">
                                    <div className="links-menu-side-menu__header">
                                        <h2 className="links-menu-side-menu__title">Juegos</h2>
                                    </div>
                                    <div className="links-menu-side-menu__items">
                                        <a className="links-menu-side-menu__item" href="/home">
                                            <span className="SVGInline links-menu-side-menu__item-icon">
                                                <img src={IconCasino} className="SVGInline-svg links-menu-side-menu__item-icon-svg" />
                                            </span>
                                            <span className="links-menu-side-menu__item-label">Casino</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="side-menu-mobile__header">
                                    <h2 className="side-menu-mobile__title">Otro</h2>
                                </div>
                                <div className="side-menu-mobile__support">
                                    <button type="button" className="button-mobile button-mobile_color_default button-mobile_borderRadius_500">
                                        <div className="side-menu-mobile__support-content">
                                            <span className="SVGInline links-menu-side-menu__item-icon">
                                                <img src={IconSupport} className="SVGInline-svg links-menu-side-menu__item-icon-svg" />
                                            </span>
                                            <span className="side-menu-mobile__support-title">Soporte 24/7</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="side-menu-mobile__lang">
                                    <div className="set-language-mobile">
                                        <div className={`set-language-mobile__container ${showLanguage ? "set-language-mobile__container_isOpen" : ""}`}>
                                            <div className="set-language-mobile__current-item" onClick={toggleLanguageMenu}>
                                                <div className="set-language-mobile__current-lang">
                                                    <img className="set-language-mobile__current-flag" src={ImgEn} alt="English" />
                                                    <span className="set-language-mobile__current-lang-name">English</span>
                                                </div>
                                                <span className="SVGInline set-language-mobile__arrow">
                                                    <img src={IconArrowRight} className="SVGInline-svg set-language-mobile__arrow-svg" />
                                                </span>
                                            </div>
                                            <div className={`set-language-mobile__items ${showLanguage ? "set-language-mobile__items_isOpen" : ""}`}>
                                                <div className="set-language-mobile__item">
                                                    <div className="set-language-mobile__lang">
                                                        <img className="set-language-mobile__flag" src={ImgEs} alt="Español" />
                                                        <span className="set-language-mobile__lang-name">Español</span>
                                                    </div>
                                                    <div className="set-language-mobile__arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="side-menu-mobile__licence-wrapper">
                                <div className="side-menu-mobile__partners">
                                    <a className="side-menu-mobile__partner" href="">
                                        <span className="SVGInline side-menu-mobile__partner-icon">
                                            <img src={ImgBet} className="SVGInline-svg side-menu-mobile__partner-icon-svg" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="slide-out__content">
                    <div className="app__scroll-block">
                        <article className="digitain-sport-mobile">
                            <div id="application-container"></div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;