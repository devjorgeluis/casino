import React, { useState } from "react";
import IconEarth from "/src/assets/svg/earth.svg";
import IconArrowDown from "/src/assets/svg/arrow-down.svg";
import ImgEn from "/src/assets/img/en.png";
import ImgEs from "/src/assets/img/es.png";

const LanguageSelector = () => {
    const [showLanguage, setShowLanguage] = useState(false);

    const toggleLanguageMenu = () => {
        setShowLanguage((prevShowLanguage) => !prevShowLanguage);
    };

    return (
        <div className="header-desktop__set-language">
            <div className="set-language-desktop set-language-desktop_open" role="menu" aria-label="Language selection">
                <button
                    className="set-language-desktop__current"
                    onClick={toggleLanguageMenu}
                    aria-expanded={showLanguage}
                    aria-controls="language-menu"
                    type="button"
                >
                    <div className="set-language-desktop__img-wrapper">
                        <span className="set-language-desktop__current-img">
                            <span className="SVGInline SVG-component__content">
                                <img src={IconEarth} alt="Globe icon for language selection" />
                            </span>
                        </span>
                    </div>
                    <span className="set-language-desktop__arrow set-language-desktop__arrow_open">
                        <span className="SVGInline SVG-component__content">
                            <img src={IconArrowDown} alt="Toggle language menu" />
                        </span>
                    </span>
                </button>
                {showLanguage && (
                    <div className="set-language-desktop__items set-language-desktop__items_open" id="language-menu">
                        <div
                            className="set-language-desktop__item set-language-desktop__item_selected"
                            role="menuitem"
                            aria-selected="true"
                        >
                            <img
                                className="set-language-desktop__item-img set-language-desktop__item-img_selected"
                                src={ImgEs}
                                alt="Spanish language flag"
                            />
                            <span className="set-language-desktop__item-text set-language-desktop__item-text_selected">
                                Español
                            </span>
                        </div>
                        <div className="set-language-desktop__item" role="menuitem">
                            <img
                                className="set-language-desktop__item-img"
                                src={ImgEn}
                                alt="English language flag"
                            />
                            <span className="set-language-desktop__item-text">English</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;