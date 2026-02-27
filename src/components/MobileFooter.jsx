import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgDog from "/src/assets/img/ganamosDogIcon.webp";
import ImgBackground from "/src/assets/img/background.webp";
import ImgActive from "/src/assets/img/active.webp";
import IconSport from "/src/assets/svg/sport.svg";
import IconLiveBetting from "/src/assets/svg/live-betting.svg";
import IconFooterCasino from "/src/assets/svg/footer-casino.svg";
import IconLiveCasino from "/src/assets/svg/live-casino.svg";

const MobileFooter = ({ isSlotsOnly }) => {
    const navigate = useNavigate();

    return (
        <div className="main-mobile-menu">
            <a className="main-mobile-menu__ganamos-dog" onClick={() => navigate("/")}>
                <img className="main-mobile-menu__ganamos-dog-img" src={ImgDog} alt="" />
            </a>
            <img className="main-mobile-menu__background" src={ImgBackground} alt="background" />
            <nav className="main-mobile-menu__main">
                <a className="main-mobile-menu__menu-item" onClick={() => navigate("/")}>
                    <img className="main-mobile-menu__menu-active" src={ImgActive} alt="" />
                    <div className="main-mobile-menu__menu-icon-container"></div>
                    <span className="main-mobile-menu__menu-text">Inicio</span>
                </a>
            </nav>
        </div>
    )
};

export default MobileFooter;