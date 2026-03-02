import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { NavigationContext } from "../components/NavigationContext";
import { callApi } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import Slideshow from "../components/Slideshow";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import LoginModal from "../components/LoginModal";
import CustomAlert from "../components/CustomAlert";
import "animate.css";
import ImgBanner1 from "/src/assets/img/banner1.jpg";
import ImgBanner2 from "/src/assets/img/banner2.jpg";
import ImgBanner3 from "/src/assets/img/banner3.jpg";
import ImgBanner4 from "/src/assets/img/banner4.jpg";
import IconYellowDeporte from "/src/assets/svg/yellow-deporte.svg";
import IconYellowCasino from "/src/assets/svg/yellow-casino.svg";
import IconYellowLiveCasino from "/src/assets/svg/yellow-live-casino.svg";

let selectedGameId = null;
let selectedGameType = null;
let selectedGameLauncher = null;
let pageCurrent = 0;

const Home = () => {
  const pageTitle = "Home";
  const { contextData } = useContext(AppContext);
  const { isLogin } = useContext(LayoutContext);
  const { setShowFullDivLoading } = useContext(NavigationContext);
  const [selectedPage, setSelectedPage] = useState("lobby");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [pageData, setPageData] = useState({});
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isSlotsOnly } = useOutletContext();
  const [messageCustomAlert, setMessageCustomAlert] = useState(["", ""]);
  const [shouldShowGameModal, setShouldShowGameModal] = useState(false);
  const refGameModal = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const imageSlideshow = [ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner4];

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth <= 767;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    selectedGameId = null;
    selectedGameType = null;
    selectedGameLauncher = null;
    setGameUrl("");
    setShouldShowGameModal(false);

    setSelectedPage("hot");
    getPage("hot");

    if (contextData.session != null) {
      getStatus();
    }
  }, [location.pathname]);

  useEffect(() => { }, [selectedPage]);

  const getStatus = () => {
    callApi(contextData, "GET", "/get-status", callbackGetStatus, null);
  };

  const callbackGetStatus = (result) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      contextData.slots_only = result && result.slots_only;
    }
  };

  const getPage = (page) => {
    setSelectedPage(page);
    callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
    setIsLoadingGames(true);
  };

  const callbackGetPage = (result) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      setGames(result.data.categories);
      setPageData(result.data);
      pageCurrent = 1;
    }

    setIsLoadingGames(false);
  };

  const launchGame = (id, type, launcher) => {
    setShowFullDivLoading(true);
    setShouldShowGameModal(true);
    selectedGameId = id != null ? id : selectedGameId;
    selectedGameType = type != null ? type : selectedGameType;
    selectedGameLauncher = launcher != null ? launcher : selectedGameLauncher;
    callApi(contextData, "GET", "/get-game-url?game_id=" + selectedGameId, callbackLaunchGame, null);
  };

  const callbackLaunchGame = (result) => {
    if (result.status == "0") {
      switch (selectedGameLauncher) {
        case "modal":
        case "tab":
          setGameUrl(result.url);
          break;
      }
    } else if (result.status == "500" || result.status == "422") {
      setMessageCustomAlert(["error", result.message]);
    }
    setShowFullDivLoading(false);
  };

  const closeGameModal = () => {
    selectedGameId = null;
    selectedGameType = null;
    selectedGameLauncher = null;
    setGameUrl("");
    setShouldShowGameModal(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginConfirm = () => {
    setShowLoginModal(false);
  };

  const handleAlertClose = () => {
    setMessageCustomAlert(["", ""]);
  };

  return (
    <>
      <CustomAlert message={messageCustomAlert} onClose={handleAlertClose} />
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleLoginConfirm}
        />
      )}

      {shouldShowGameModal && selectedGameId !== null ? (
        <GameModal
          gameUrl={gameUrl}
          reload={launchGame}
          launchInNewTab={() => launchGame(null, null, "tab")}
          ref={refGameModal}
          onClose={closeGameModal}
        />
      ) : (
        <>
          <Slideshow images={imageSlideshow} />

          <div className="slots-main-desktop__item-container">
            <div className="home-links-mobile">
              <div className="home-links-mobile__sub">
                {
                  isSlotsOnly == "false" && <a className="home-links-mobile__sub-item" onClick={() => navigate("/sports")}>
                    <span className="SVGInline home-links-mobile__sub-item-icon">
                      <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowDeporte} />
                    </span>
                    <span className="home-links-mobile__sub-item-text">Deporte</span>
                  </a>
                }

                <a className="home-links-mobile__sub-item" onClick={() => navigate("/casino")}>
                  <span className="SVGInline home-links-mobile__sub-item-icon">
                    <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowCasino} />
                  </span>
                  <span className="home-links-mobile__sub-item-text">Proveedores</span>
                </a>

                {
                  isSlotsOnly == "false" && <a className="home-links-mobile__sub-item" onClick={() => navigate("/casinolive")}>
                    <span className="SVGInline home-links-mobile__sub-item-icon">
                      <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowLiveCasino} />
                    </span>
                    <span className="home-links-mobile__sub-item-text">En vivo</span>
                  </a>
                }
              </div>
            </div>
          </div>

          <div className="slots-main-desktop__content-container">
            <div className="slots-main-desktop__provider-section">
              <div className="provider-section-desktop">
                <div className="provider-section-desktop__games-container">
                  {games &&
                    games.map((item, index) => (
                      <GameCard
                        key={index}
                        id={item.id}
                        title={item.name}
                        imageSrc={contextData.cdnUrl + item.image_local}
                        onClick={() =>
                          isLogin
                            ? launchGame(item.id, item.type, item.launcher)
                            : isMobile
                              ? navigate("/login")
                              : handleLoginClick()
                        }
                      />
                    ))}
                </div>
                {isLoadingGames && <DivLoading />}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;