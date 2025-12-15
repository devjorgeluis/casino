import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { NavigationContext } from "../components/NavigationContext";
import { callApi, callApiService } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import Slideshow from "../components/Slideshow";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import LoginModal from "../components/LoginModal";
import CustomAlert from "../components/CustomAlert";
import "animate.css";
import ImgBanner1 from "/src/assets/img/banner-desktop-01.webp";
import ImgBanner2 from "/src/assets/img/banner-desktop-02.webp";
import ImgBanner3 from "/src/assets/img/banner-desktop-03.webp";
import ImgJetx from "/src/assets/img/jetx.png";
import ImgJetxIcon from "/src/assets/img/jetx-icon.png";
import ImgCrash from "/src/assets/img/crash.png";
import ImgCrashIcon from "/src/assets/img/crash-icon.png";
import ImgSpaceman from "/src/assets/img/spaceman.png";
import ImgSpacemanIcon from "/src/assets/img/spaceman-icon.png";
import ImgChicken from "/src/assets/img/chicken.webp";
import ImgChickenIcon from "/src/assets/img/chicken-icon.webp";
import ImgChickenText from "/src/assets/img/chicken-text.webp";
import ImgHorseRaces from "/src/assets/img/horseRaces.webp";
import ImgBlackjackMain from "/src/assets/img/blackjack-main.webp";
import IconDigitain from "/src/assets/svg/digitain.svg";
import IconLiga from "/src/assets/svg/liga.svg";
import IconUltim8 from "/src/assets/svg/ultim8.svg";
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
  const [firstFiveCategoriesGames, setFirstFiveCategoriesGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isSlotsOnly } = useOutletContext();
  const [messageCustomAlert, setMessageCustomAlert] = useState(["", ""]);
  const [shouldShowGameModal, setShouldShowGameModal] = useState(false);
  const refGameModal = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const imageSlideshow = [ImgBanner1, ImgBanner2, ImgBanner3];

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

    setSelectedPage("home");
    getPage("home");

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
      setIsSlotsOnly(contextData.slots_only ? "true" : "false");
    }
  };

  const getPage = (page) => {
    setFirstFiveCategoriesGames([]);
    setSelectedPage(page);
    callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
    setIsLoadingGames(true);
  };

  const callbackGetPage = (result) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      if (result.data.categories && result.data.page_group_type === "categories") {
        const firstFiveCategories = result.data.categories.slice(0, 5);
        firstFiveCategories.forEach((item, index) => {
          if (index < 5) {
            fetchContentForCategory(item, item.id, item.table_name, index, true);
          }
        });
      }

      pageCurrent = 0;
    }
  };

  const fetchContentForCategory = (category, categoryId, tableName, categoryIndex, resetCurrentPage) => {
    let pageSize = 8;
    let categoryPageCurrent = 0;

    if (resetCurrentPage) {
      categoryPageCurrent = 0;
    }

    callApiService(
      contextData,
      "GET",
      "/games/?page_group_type=categories&page_group_code=" +
      "default_pages_home" +
      "&table_name=" +
      tableName +
      "&apigames_category_id=" +
      categoryId +
      "&page=" +
      categoryPageCurrent +
      "&length=" +
      pageSize,
      (result) => callbackFetchContentForCategory(result, category, categoryIndex),
      null
    );
  };

  const callbackFetchContentForCategory = (result, category, categoryIndex) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      setIsLoadingGames(false);

      const gamesWithImages = (result.data || []).map(game => {
        let imageDataSrc = game.image_url;
        if (game.image_local != null) {
          imageDataSrc = contextData.cdnUrl + game.image_local;
        }
        return {
          ...game,
          imageDataSrc: imageDataSrc
        };
      });

      const categoryGames = {
        category: category,
        games: gamesWithImages
      };

      setFirstFiveCategoriesGames(prev => {
        const updated = [...prev];
        updated[categoryIndex] = categoryGames;
        return updated;
      });
    }
  };

  const launchLiveCasinoGame = (id, type, launcher) => {
    setShouldShowGameModal(true);
    callApiService(contextData, "GET", `/get_game_url?launcher=${launcher}&type=${type}&game_id=` + id, callbackLaunchGame, null);
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
            <div className="home-desktop__block">
              <div className="home-sports-menu-desktop">
                <div className="home-sports-menu-desktop__wrapper">
                  <a className="home-sports-menu-desktop__item" href="#">
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_top"></div>
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_bottom"></div>
                    <div className="home-sports-menu-desktop__logo home-sports-menu-desktop__logo_format_svg">
                      <span className="SVG-component">
                        <span className="SVGInline SVG-component__content">
                          <img className="SVGInline-svg SVG-component__content-svg" src={IconDigitain} />
                        </span>
                      </span>
                    </div>
                    <div className="home-sports-menu-desktop__title-block">
                      <span className="home-sports-menu-desktop__title">Digitain Deporte</span>
                    </div>
                  </a>
                </div>
                <div className="home-sports-menu-desktop__wrapper">
                  <a className="home-sports-menu-desktop__item" href="#">
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_top"></div>
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_bottom"></div>
                    <div className="home-sports-menu-desktop__logo home-sports-menu-desktop__logo_format_svg">
                      <span className="SVG-component">
                        <span className="SVGInline SVG-component__content">
                          <img className="SVGInline-svg SVG-component__content-svg" src={IconLiga} />
                        </span>
                      </span>
                    </div>
                    <div className="home-sports-menu-desktop__title-block">
                      <span className="home-sports-menu-desktop__title">Liga Premier</span>
                    </div>
                  </a>
                </div>
                <div className="home-sports-menu-desktop__wrapper">
                  <a className="home-sports-menu-desktop__item" href="#">
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_top"></div>
                    <div className="home-sports-menu-desktop__ellipse home-sports-menu-desktop__ellipse_bottom"></div>
                    <div className="home-sports-menu-desktop__logo home-sports-menu-desktop__logo_format_svg">
                      <span className="SVG-component">
                        <span className="SVGInline SVG-component__content">
                          <img className="SVGInline-svg SVG-component__content-svg" src={IconUltim8} />
                        </span>
                      </span>
                    </div>
                    <div className="home-sports-menu-desktop__title-block">
                      <span className="home-sports-menu-desktop__title">ULTIM8 Deporte</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-desktop__block">
              <div className="home-main-slots-desktop">
                <a className="home-main-slots-desktop__item" href="#">
                  <img className="home-main-slots-desktop__img" src={ImgJetx} alt="Main Slot" />
                  <img className="home-main-slots-desktop__icon" src={ImgJetxIcon} alt="" />
                  <div className="home-main-slots-desktop__button">
                    <div>Jugar</div>
                  </div>
                </a>
                <a className="home-main-slots-desktop__item" href="#">
                  <img className="home-main-slots-desktop__img" src={ImgCrash} alt="Main Slot" />
                  <img className="home-main-slots-desktop__icon" src={ImgCrashIcon} alt="" />
                  <div className="home-main-slots-desktop__button">
                    <div>Jugar</div>
                  </div>
                </a>
                <a className="home-main-slots-desktop__item" href="#">
                  <img className="home-main-slots-desktop__img" src={ImgSpaceman} alt="Main Slot" />
                  <img className="home-main-slots-desktop__icon" src={ImgSpacemanIcon} alt="" />
                  <div className="home-main-slots-desktop__button">
                    <div>Jugar</div>
                  </div>
                </a>
                <a className="home-main-slots-desktop__item" href="#">
                  <img className="home-main-slots-desktop__text" src={ImgChickenText} alt="" />
                  <img className="home-main-slots-desktop__img" src={ImgChicken} alt="Main Slot" />
                  <img className="home-main-slots-desktop__icon" src={ImgChickenIcon} alt="" />
                  <div className="home-main-slots-desktop__button">
                    <div>Jugar</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-links-mobile">
              <div className="home-links-mobile__main">
                <a className="home-links-card-mobile" href="#">
                  <div
                    className="home-links-card-mobile__content home-links-card-mobile__content_bg_card"
                    onClick={() =>
                      isLogin ? launchLiveCasinoGame(19985, "casino", "modal") : isMobile ? navigate("/login") : handleLoginClick()
                    }
                  >
                    <img
                      className="home-links-card-mobile__img"
                      src={ImgBlackjackMain}
                      alt="Blackjack"
                      loading="lazy"
                    />
                    <span className="home-links-card-mobile__title">Blackjack</span>
                  </div>
                </a>
                <a className="home-links-card-mobile" href="#">
                  <div className="home-links-card-mobile__content home-links-card-mobile__content_bg_horseRaces">
                    <img
                      className="home-links-card-mobile__img"
                      src={ImgHorseRaces}
                      alt="Universal Race"
                      loading="lazy"
                    />
                    <span className="home-links-card-mobile__title">Universal Race</span>
                  </div>
                </a>
              </div>
              <div className="home-sports-menu-mobile">
                <div className="home-sports-menu-mobile__wrapper">
                  <a className="home-sports-menu-mobile__item" href="#">
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_top"></div>
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_bottom"></div>
                    <div className="home-sports-menu-mobile__logo home-sports-menu-mobile__logo_format_svg">
                      <span className="SVGInline">
                        <img className="SVGInline-svg" src={IconDigitain} />
                      </span>
                    </div>
                    <div className="home-sports-menu-mobile__title-block">
                      <span className="home-sports-menu-mobile__title">Digitain Deporte</span>
                    </div>
                  </a>
                </div>
                <div className="home-sports-menu-mobile__wrapper">
                  <a className="home-sports-menu-mobile__item" href="#">
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_top"></div>
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_bottom"></div>
                    <div className="home-sports-menu-mobile__logo home-sports-menu-mobile__logo_format_svg">
                      <span className="SVGInline">
                        <img className="SVGInline-svg" src={IconLiga} />
                      </span>
                    </div>
                    <div className="home-sports-menu-mobile__title-block">
                      <span className="home-sports-menu-mobile__title">Liga Premier</span>
                    </div>
                  </a>
                </div>
                <div className="home-sports-menu-mobile__wrapper">
                  <a className="home-sports-menu-mobile__item" href="#">
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_top"></div>
                    <div className="home-sports-menu-mobile__ellipse home-sports-menu-mobile__ellipse_bottom"></div>
                    <div className="home-sports-menu-mobile__logo home-sports-menu-mobile__logo_format_svg">
                      <span className="SVGInline">
                        <img className="SVGInline-svg" src={IconUltim8} />
                      </span>
                    </div>
                    <div className="home-sports-menu-mobile__title-block">
                      <span className="home-sports-menu-mobile__title">ULTIM8 Deporte</span>
                    </div>
                  </a>
                </div>
              </div>
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
                  <span className="home-links-mobile__sub-item-text">Casino</span>
                </a>

                {
                  isSlotsOnly == "false" && <a className="home-links-mobile__sub-item" onClick={() => navigate("/casinolive")}>
                    <span className="SVGInline home-links-mobile__sub-item-icon">
                      <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowLiveCasino} />
                    </span>
                    <span className="home-links-mobile__sub-item-text">Casino en vivo</span>
                  </a>
                }
              </div>
            </div>
          </div>

          <div className="slots-main-desktop__content-container">
            {firstFiveCategoriesGames.length > 0 && firstFiveCategoriesGames.map((categoryData, index) => (
              categoryData && categoryData.games && categoryData.games.length > 0 ? (
                <div key={index} className="slots-main-desktop__provider-section">
                  <div className="provider-section-desktop">
                    <div className="provider-section-desktop__header">
                      <div className="provider-section-desktop__header-img-container">
                        <div className="provider-section-desktop__header-img-top">
                          {/* {categoryData.category.image_local && (
                            <img
                              className="provider-section-desktop__header-icon"
                              src={contextData.cdnUrl + categoryData.category.image_local}
                              alt={categoryData.category.name}
                              loading="lazy"
                            />
                          )} */}
                          <span className="provider-section-desktop__header-provider-text">
                            {categoryData.category.name}
                          </span>
                        </div>
                        <div className="provider-section-desktop__header-line"></div>
                      </div>
                      <div className="provider-section-desktop__controls">
                        <div className="carousel-arrows">
                          <a className="carousel-arrows__title" onClick={() => navigate("/casino")}>
                            <span className="carousel-arrows__title-text">Mostrar todo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="provider-section-desktop__games-container">
                      {categoryData.games.slice(0, 8).map((game, gameIndex) => (
                        <GameCard
                          key={gameIndex}
                          id={game.id}
                          title={game.name}
                          imageSrc={game.imageDataSrc || game.image_url || (game.image_local ? contextData.cdnUrl + game.image_local : "")}
                          onClick={() =>
                            isLogin
                              ? launchGame(game.id, game.type, game.launcher)
                              : isMobile
                                ? navigate("/login")
                                : handleLoginClick()
                          }
                        />
                      ))}
                    </div>
                    {categoryData.games.length === 8 && (
                      <div className="carousel-arrows">
                        <a className="carousel-arrows__title" href={`/casino?category=${categoryData.category.id}`}>
                          <span className="carousel-arrows__title-text">Ver más {categoryData.category.name}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ) : null
            ))}

            {isLoadingGames && <DivLoading />}
          </div>
        </>
      )}
    </>
  );
};

export default Home;