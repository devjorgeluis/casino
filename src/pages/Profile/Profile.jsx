import { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { callApi } from "../../utils/Utils";
import UserInfo from "./UserInfo";
import BonusProgram from "./BonusProgram";
import Promocode from "./Promocode";
import ChangePassword from "./ChangePassword";
import PayHistory from "./PayHistory";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconBell from "/src/assets/svg/bell.svg";
import IconHistory from "/src/assets/svg/history.svg";
import IconWhiteLock from "/src/assets/svg/white-lock.svg";

const Profile = () => {
    const navigate = useNavigate();
    const { contextData } = useContext(AppContext);
    const { supportParent, openSupportModal } = useOutletContext();

    const logout = () => {
        callApi(contextData, "POST", "/logout", callbackLogout, null);
    };

    const callbackLogout = () => {
        localStorage.removeItem("session");
        window.location.href = "/";
    };

    useEffect(() => {
        if (!contextData?.session) {
            navigate("/");
        }
    }, [contextData?.session, navigate]);

    return (
        <>
            <article className="profile-layout-desktop">
                <div className="profile-layout-desktop__header">
                    <div className="profile-layout-desktop__header-title">¡Bienvenido al Área Personal!</div>
                    <div className="profile-layout-desktop__header-subtitle">
                        Aquí podrás consultar tus datos personales, así como conocer tu saldo
                    </div>
                </div>
                <div className="profile-layout-desktop__content">
                    <div className="profile-layout-desktop__content-left">
                        <UserInfo logout={logout} supportParent={supportParent} openSupportModal={openSupportModal} />
                        <BonusProgram />
                        <Promocode />
                        <ChangePassword />
                    </div>
                    <PayHistory />
                </div>
            </article>

            <article className="profile-layout-mobile">
                <div className="profile-menu-mobile">
                    <div className="profile-menu-mobile__card">
                        <div className="profile-menu-mobile__user-info">
                            <div className="profile-menu-mobile__user-info-back">
                                <button className="back-block">
                                    <span className="SVGInline back-block__arrow" onClick={() => navigate("/")}>
                                        <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="Back arrow" />
                                    </span>
                                    <div className="back-block__content">Área personal</div>
                                </button>
                                <div className="profile-menu-mobile__notifies-wrap">
                                    <div className="profile-menu-mobile__bell">
                                        <div className="profile-menu-mobile__bell-notifies-count profile-menu-mobile__bell-notifies-count_zero">0</div>
                                        <span className="profile-menu-mobile__bell-icon">
                                            <span className="SVGInline SVG-component__content">
                                                <img className="SVGInline-svg SVG-component__content-svg" src={IconBell} alt="notification" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <UserInfo logout={logout} isMobile={true} />
                        </div>
                        <div className="profile-menu-mobile__navigation">
                            <nav className="profile-navigation-mobile">
                                <div className="profile-navigation-mobile__item">
                                    <a className="profile-navigation-mobile__link" onClick={() => navigate("/profile/pay-history")}>
                                        <span className="SVGInline profile-navigation-mobile__icon">
                                            <img className="SVGInline-svg profile-navigation-mobile__icon-svg" src={IconHistory} alt="History icon" />
                                        </span>
                                        <span className="profile-navigation-mobile__text">Historial de operaciones</span>
                                    </a>
                                </div>
                                <div className="profile-navigation-mobile__item">
                                    <a className="profile-navigation-mobile__link" onClick={() => navigate("/profile/change-password")}>
                                        <span className="SVGInline profile-navigation-mobile__icon">
                                            <img className="SVGInline-svg profile-navigation-mobile__icon-svg" src={IconWhiteLock} alt="Lock icon" />
                                        </span>
                                        <span className="profile-navigation-mobile__text">Cambiar la contraseña</span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="profile-menu-mobile__bonus">
                        <BonusProgram isMobile={true} />
                    </div>
                    <div className="profile-menu-mobile__promocode">
                        <Promocode isMobile={true} />
                    </div>
                </div>
            </article>
        </>
    );
};

export default Profile;