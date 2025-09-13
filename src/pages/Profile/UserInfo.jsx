import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { LayoutContext } from "../../components/LayoutContext";
import ImgMascot from "/src/assets/img/mascot.png";
import IconProfileCircle from "/src/assets/svg/profile-circle.svg";
import IconLogout from "/src/assets/svg/logout.svg";
import IconWhiteLogout from "/src/assets/svg/white-logout.svg";

const UserInfo = ({ logout, isMobile = false }) => {
    const navigate = useNavigate();
    const { contextData } = useContext(AppContext);
    const { userBalance } = useContext(LayoutContext);

    useEffect(() => {
        if (!contextData?.session) {
            navigate("/");
        }
    }, [contextData?.session, navigate]);

    return (
        <div className={isMobile ? "profile-user-info-mobile" : "user-info"}>
            <div className={isMobile ? "profile-user-info-mobile__header" : "user-info__content"}>
                <div className={isMobile ? "w-100" : "user-info__header"}>
                    <div className={isMobile ? "profile-user-info-mobile__header_left" : "user-info__header-left"}>
                        <span className={isMobile ? "SVGInline profile-user-info-mobile__user-icon" : "user-info__header-icon"}>
                            <img
                                className={isMobile ? "SVGInline-svg profile-user-info-mobile__user-icon-svg" : "SVGInline-svg SVG-component__content-svg"}
                                src={IconProfileCircle}
                                alt="Profile icon"
                            />
                        </span>
                        <div className={isMobile ? "profile-user-info-mobile__credentials" : "user-info__header-info"}>
                            <div className={isMobile ? "profile-user-info-mobile__id" : "user-info__header-info-id"}>
                                ID {contextData?.session?.user?.id || '******'}
                            </div>
                            <div className={isMobile ? "profile-user-info-mobile__username" : "user-info__header-info-username"}>
                                {contextData?.session?.user?.name || 'Guest'}
                            </div>
                        </div>
                        {isMobile && (
                            <button className="profile-user-info-mobile__logout" onClick={logout}>
                                <span className="SVGInline profile-user-info-mobile__logout-icon">
                                    <img className="SVGInline-svg profile-user-info-mobile__logout-icon-svg" src={IconWhiteLogout} alt="Logout icon" />
                                </span>
                            </button>
                        )}
                    </div>
                    {!isMobile && (
                        <span className="user-info__header-logout" onClick={logout}>
                            <span className="SVGInline SVG-component__content">
                                <img className="SVGInline-svg SVG-component__content-svg" src={IconLogout} alt="Logout icon" />
                            </span>
                        </span>
                    )}
                </div>
                <div className={isMobile ? "profile-user-info-mobile__balance" : "user-info__balance"}>
                    <span className={isMobile ? "profile-user-info-mobile__balance-title" : "user-info__balance-title"}>Balance:</span>
                    <div className={isMobile ? "profile-user-info-mobile__balance-value" : ""}>
                        <span className={isMobile ? "profile-user-info-mobile__balance-amount" : "user-info__balance-amount"}>
                            $ {userBalance}
                        </span>
                        <span className={isMobile ? "profile-user-info-mobile__balance-currency" : "user-info__balance-currency"}>ARS</span>
                    </div>
                </div>
                <div className={isMobile ? "profile-user-info-mobile__balance" : "user-info__bonus-balance"}>
                    <span className={isMobile ? "profile-user-info-mobile__balance-title" : "user-info__bonus-balance-title"}>Balance de bono:</span>
                    <span className={isMobile ? "profile-user-info-mobile__balance-amount profile-user-info-mobile__balance-amount_sm" : "user-info__bonus-balance-amount"}>
                        0.00
                    </span>
                </div>
            </div>
            {!isMobile && <img className="user-info__mascot" src={ImgMascot} alt="mascot" />}
        </div>
    );
};

export default UserInfo;