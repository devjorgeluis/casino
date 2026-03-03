import React from "react";
import { useNavigate } from "react-router-dom";
import ImgDog from "/src/assets/img/favicon.webp";
import ImgBackground from "/src/assets/img/background.webp";
import ImgActive from "/src/assets/img/active.webp";
import IconMegaway from "/src/assets/svg/megaway.svg";
import IconJoker from "/src/assets/svg/joker.svg";

const MobileFooter = ({ isSlotsOnly }) => {
    const navigate = useNavigate();

    return (
        <div className="main-mobile-menu">
            <a className="main-mobile-menu__ganamos-dog" onClick={() => navigate("/")}>
                <img className="main-mobile-menu__ganamos-dog-img" src={ImgDog} alt="" />
            </a>
            <img className="main-mobile-menu__background" src={ImgBackground} alt="background" />
            <nav className="main-mobile-menu__main">
                <a className="main-mobile-menu__menu-item" onClick={() => navigate("/casino#megaways")}>
                    <img className="main-mobile-menu__menu-active" src={ImgActive} alt="" />
                    <div className="main-mobile-menu__menu-icon-container">
                        <span className="SVGInline main-mobile-menu__menu-icon">
                            <img className="SVGInline-svg main-mobile-menu__menu-icon-svg" src={IconMegaway} alt="casino" />
                        </span>
                    </div>
                    <span className="main-mobile-menu__menu-text">Megaways</span>
                </a>
                <a className="main-mobile-menu__menu-item" onClick={() => navigate("/")}>
                    <img className="main-mobile-menu__menu-active" src={ImgActive} alt="" />
                    <div className="main-mobile-menu__menu-icon-container"></div>
                    <span className="main-mobile-menu__menu-text">Inicio</span>
                </a>
                <a className="main-mobile-menu__menu-item" onClick={() => navigate("/casino#joker")}>
                    <img className="main-mobile-menu__menu-active" src={ImgActive} alt="" />
                    <div className="main-mobile-menu__menu-icon-container">
                        <span className="SVGInline main-mobile-menu__menu-icon">
                            <img className="SVGInline-svg main-mobile-menu__menu-icon-svg" src={IconJoker} alt="casino" />
                        </span>
                    </div>
                    <span className="main-mobile-menu__menu-text">Jokers</span>
                </a>
            </nav>
        </div>
    );
};

export default MobileFooter;