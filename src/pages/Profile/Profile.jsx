import { useContext, useEffect } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { NavigationContext } from "../../components/NavigationContext";
import { callApi } from "../../utils/Utils";
import UserInfo from "./UserInfo";
import PayHistory from "./PayHistory";
import PayTransaction from "./PayTransaction";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconBell from "/src/assets/svg/bell.svg";
import IconHistory from "/src/assets/svg/history.svg";
import IconTransaction from "/src/assets/svg/transaction.svg";

const Profile = () => {
    const navigate = useNavigate();
    const { contextData } = useContext(AppContext);
    const { setShowFullDivLoading } = useContext(NavigationContext);
    const { supportParent, openSupportModal, isMobile } = useOutletContext();
    const location = useLocation();

    const hash = location.hash; // e.g. "#transaction" or "#history"

    const logout = () => {
        setShowFullDivLoading(true);
        callApi(contextData, "POST", "/logout", callbackLogout, null);
    };

    const callbackLogout = () => {
        setShowFullDivLoading(false);
        localStorage.removeItem("session");
        window.location.href = "/";
    };

    useEffect(() => {
        if (!contextData?.session) {
            navigate("/");
        }
    }, [contextData?.session, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Render a hash-based detail view for mobile
    const renderHashContent = () => {
        if (hash === "#transaction") {
            return (
                <div className={`${isMobile ? "pay-history-mobile" : "profile-menu-mobile__card" }`}>
                    <div className="profile-menu-mobile__user-info">
                        <div className="profile-menu-mobile__user-info-back">
                            <button className="back-block" onClick={() => navigate("/profile")}>
                                <span className="SVGInline back-block__arrow">
                                    <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="Back arrow" />
                                </span>
                                <div className="back-block__content">Transacciones</div>
                            </button>
                        </div>
                    </div>
                    <PayTransaction />
                </div>
            );
        }

        if (hash === "#history") {
            return (
                <div className={`${isMobile ? "pay-history-mobile" : "profile-menu-mobile__card" }`}>
                    <div className="profile-menu-mobile__user-info">
                        <div className="profile-menu-mobile__user-info-back">
                            <button className="back-block" onClick={() => navigate("/profile")}>
                                <span className="SVGInline back-block__arrow">
                                    <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="Back arrow" />
                                </span>
                                <div className="back-block__content">Historial de Operaciones</div>
                            </button>
                        </div>
                    </div>
                    <PayHistory />
                </div>
            );
        }

        return null;
    };

    const hashContent = renderHashContent();

    return (
        <>
            {/* Desktop */}
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
                    </div>
                    {hash === "#transaction" ? <PayTransaction /> : <PayHistory />}
                </div>
            </article>

            {/* Mobile */}
            <article className="profile-layout-mobile">
                {hashContent ? hashContent : (
                    <div className="profile-menu-mobile">
                        <div className="profile-menu-mobile__card">
                            <div className="profile-menu-mobile__user-info">
                                <div className="profile-menu-mobile__user-info-back">
                                    <button className="back-block" onClick={() => navigate("/")}>
                                        <span className="SVGInline back-block__arrow">
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
                                        <a className="profile-navigation-mobile__link" onClick={() => navigate("/profile#history")}>
                                            <span className="SVGInline profile-navigation-mobile__icon">
                                                <img className="SVGInline-svg profile-navigation-mobile__icon-svg" src={IconHistory} alt="History icon" />
                                            </span>
                                            <span className="profile-navigation-mobile__text">Historial de operaciones</span>
                                        </a>
                                    </div>
                                    <div className="profile-navigation-mobile__item">
                                        <a className="profile-navigation-mobile__link" onClick={() => navigate("/profile#transaction")}>
                                            <span className="SVGInline profile-navigation-mobile__icon">
                                                <img className="SVGInline-svg profile-navigation-mobile__icon-svg" src={IconTransaction} alt="Transaction icon" />
                                            </span>
                                            <span className="profile-navigation-mobile__text">Transacciones</span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </>
    );
};

export default Profile;