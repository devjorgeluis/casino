import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "./LayoutContext";
import { callApi } from "../utils/Utils";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import MobileFooter from "./MobileFooter";
import NavLinkHeader from "../components/NavLinkHeader";
import LoginModal from "./LoginModal";
import LogoutConfirmModal from "./LogoutConfirmModal";
import FullDivLoading from "./FullDivLoading";
import { NavigationContext } from "./NavigationContext";

const Layout = () => {
    const { contextData } = useContext(AppContext);
    const [selectedPage, setSelectedPage] = useState("lobby");
    const [isLogin, setIsLogin] = useState(contextData.isLogin);
    const [userBalance, setUserBalance] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [fragmentNavLinksTop, setFragmentNavLinksTop] = useState(<></>);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showFullDivLoading, setShowFullDivLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (contextData.session != null) {
            setIsLogin(true);
            refreshBalance();
            getStatus();
        }
    }, [contextData.session]);

    const refreshBalance = () => {
        setUserBalance("");
        setShowFullDivLoading(true);
        callApi(contextData, "GET", "/get-user-balance", callbackRefreshBalance, null);
    };

    const callbackRefreshBalance = (result) => {
        setUserBalance(result && result.balance);
        setShowFullDivLoading(false);
    };

    const getStatus = () => {
        setShowFullDivLoading(true);
        callApi(contextData, "GET", "/get-status", callbackGetStatus, null);
    };

    const getPage = (page) => {
        setSelectedPage(page);
        setShowFullDivLoading(true);
        callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
        window.location.href = "/" + (page === "home" ? "" : page);
    };

    const callbackGetPage = (result) => {
        setShowFullDivLoading(false);
    };

    const callbackGetStatus = (result) => {
        if ((result && result.slots_only == null) || (result && result.slots_only == false)) {
            setFragmentNavLinksTop(
                <>
                    <NavLinkHeader
                        title="Inicio"
                        pageCode="home"
                        icon=""
                        active={selectedPage == "home" || selectedPage == "lobby" || selectedPage == "hot"}
                        onClick={() => getPage("home")}
                    />
                    <NavLinkHeader
                        title="Casino"
                        pageCode="casino"
                        icon=""
                        active={["casino", "arcade", "megaways"].includes(selectedPage)}
                        onClick={() => getPage("casino")}
                    />
                    <NavLinkHeader
                        title="Casino en vivo"
                        pageCode="casinolive"
                        icon=""
                        active={["casinolive", "roulette"].includes(selectedPage)}
                        onClick={() => getPage("casinolive")}
                    />
                </>
            );
        } else {
            setFragmentNavLinksTop(
                <>
                    <NavLinkHeader
                        title="Inicio"
                        pageCode="home"
                        icon=""
                        active={selectedPage == "home" || selectedPage == "lobby" || selectedPage == "hot"}
                        onClick={() => getPage("home")}
                    />
                    <NavLinkHeader
                        title="Casino en vivo"
                        pageCode="casinolive"
                        icon=""
                        active={["casinolive", "roulette"].includes(selectedPage)}
                        onClick={() => getPage("casinolive")}
                    />
                </>
            );
        }
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleLoginConfirm = () => {
        setIsLogin(true);
        refreshBalance();
        setShowLoginModal(false);
    };

    const goLoginPage = () => {
        navigate("/login");
    }

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = () => {
        callApi(contextData, "POST", "/logout", (result) => {
            if (result.status === "success") {
                setTimeout(() => {
                    localStorage.removeItem("session");
                    window.location.href = "/";
                }, 200);
            } else {
                setShowLogoutModal(false);
            }
        }, null);
    };

    const handleLogoutCancel = () => {
        setShowLogoutModal(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const layoutContextValue = {
        isLogin,
        userBalance,
        handleLoginClick,
        handleLogoutClick,
        refreshBalance,
        setShowFullDivLoading,
    };

    return (
        <LayoutContext.Provider value={layoutContextValue}>
            <NavigationContext.Provider
                value={{ fragmentNavLinksTop, selectedPage, setSelectedPage, getPage, showFullDivLoading, setShowFullDivLoading }}
            >
                <div className="body-container fade-in">
                    <FullDivLoading show={showFullDivLoading} />
                    {showLogoutModal && (
                        <LogoutConfirmModal onConfirm={handleLogoutConfirm} onCancel={handleLogoutCancel} />
                    )}
                    {showLoginModal && (
                        <LoginModal
                            isOpen={showLoginModal}
                            onClose={() => setShowLoginModal(false)}
                            onConfirm={handleLoginConfirm}
                        />
                    )}
                    <div className="body-scrollable">
                        <div className="app__header-wrapper">
                            <Header
                                isLogin={isLogin}
                                userBalance={userBalance}
                                handleLoginClick={handleLoginClick}
                                handleLogoutClick={handleLogoutClick}
                                fragmentNavLinksTop={fragmentNavLinksTop}
                            />
                            <MobileHeader
                                isLogin={isLogin}
                                userBalance={userBalance}
                                isOpen={isSidebarOpen}
                                handleLoginClick={goLoginPage}
                                onToggle={toggleSidebar}
                            />
                            <main className="app__main">
                                <Outlet />
                            </main>
                            <Footer />
                            <MobileFooter />
                        </div>
                    </div>
                </div>
            </NavigationContext.Provider>
        </LayoutContext.Provider>
    );
};

export default Layout;