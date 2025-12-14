import { useState } from "react";
import UserMenu from "../components/UserMenu";
import LanguageSelector from "../components/LanguageSelector";
import NavLinkHeader from "../components/NavLinkHeader";
import ImgLogo from "/src/assets/img/logo-net-new.png";
import IconCurrency from "/src/assets/svg/currency.svg";
import IconProfile from "/src/assets/svg/profile.svg";
import IconLogout from "/src/assets/svg/logout.svg";
import ImgSupport from "/src/assets/svg/support-black.svg";

const Header = ({ isLogin, userBalance, handleLoginClick, handleLogoutClick, fragmentNavLinksTop, isSlotsOnly, supportParent, openSupportModal }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const openMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    return (
        <header className="header-desktop">
            <div className="header-desktop__content">
                <div className="header-desktop__header-menu">
                    <a className="header-desktop__logo-container" href="/">
                        <div className="header-desktop__logo">
                            <img
                                title="Casino"
                                alt="Casino"
                                src={ImgLogo}
                                className="logo-domain"
                            />
                        </div>
                    </a>
                    <nav className="header-main-menu-desktop">
                        {
                            isLogin
                                ? fragmentNavLinksTop
                                : <>
                                    {
                                        isSlotsOnly === "" ? 
                                        <>
                                            <NavLinkHeader
                                                title="Inicio"
                                                pageCode="home"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Deporte"
                                                pageCode="sports"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Casino"
                                                pageCode="casino"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Casino en vivo"
                                                pageCode="casinolive"
                                                icon=""
                                            />
                                        </> : isSlotsOnly === "false" ? 
                                        <>
                                            <NavLinkHeader
                                                title="Inicio"
                                                pageCode="home"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Deporte"
                                                pageCode="sports"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Casino"
                                                pageCode="casino"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Casino en vivo"
                                                pageCode="casinolive"
                                                icon=""
                                            />
                                        </> :
                                        <>
                                            <NavLinkHeader
                                                title="Inicio"
                                                pageCode="home"
                                                icon=""
                                            />
                                            <NavLinkHeader
                                                title="Casino"
                                                pageCode="casino"
                                                icon=""
                                            />
                                        </>
                                        }
                                    </>
                        }
                    </nav>
                </div>
                <div className="header-desktop__right">
                    <div className="user-block">
                        {isLogin ? (
                            <div className="user-block__top">
                                <button className="button-support" onClick={() => { openSupportModal(false); }}>
                                    <img src={ImgSupport} />
                                </button>
                                <div className="user-block__border">
                                    <div className="user-block__info">
                                        <span className="user-block__info-icon">
                                            <span className="SVGInline SVG-component__content">
                                                <img src={IconCurrency} />
                                            </span>
                                        </span>
                                        <span className="user-block__text">{userBalance}</span>
                                        <span className="user-block__currency">ARS</span>
                                    </div>
                                </div>
                                <div className="user-block__border">
                                    <div className="user-block__user-wrapper">
                                        <span className="user-block__user-icon" onClick={openMenu}>
                                            <span className="SVGInline SVG-component__content">
                                                <img src={IconProfile} />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="user-block__border">
                                    <div className="user-block__user-wrapper">
                                        <span
                                            className="user-block__user-icon"
                                            onClick={handleLogoutClick}
                                        >
                                            <span className="SVGInline SVG-component__content">
                                                <img src={IconLogout} alt="Logout icon" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="header-login-block-desktop">
                                <div className="header-login-block-desktop__button">
                                    <button className="button-support" onClick={() => { openSupportModal(false); }}>
                                        <img src={ImgSupport} />
                                    </button>
                                    <button
                                        type="button"
                                        className="button-desktop button-desktop_color_default"
                                        onClick={handleLoginClick}
                                    >
                                        <span className="header-login-block-desktop__button-text">Acceder</span>
                                    </button>
                                </div>
                            </div>
                        )}
                        {showUserMenu && <UserMenu handleLogoutClick={handleLogoutClick} supportParent={supportParent} openSupportModal={openSupportModal} />}
                    </div>
                    <div className="header-desktop__separator"></div>
                    <LanguageSelector />
                </div>
            </div>
        </header>
    );
};

export default Header;