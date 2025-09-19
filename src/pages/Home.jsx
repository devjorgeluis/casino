import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [pageData, setPageData] = useState({});
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSlotsOnly, setIsSlotsOnly] = useState("");
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

  useEffect(() => {}, [selectedPage]);

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
    setCategories([]);
    setGames([]);
    setSelectedPage(page);
    callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
  };

  const callbackGetPage = (result) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      setCategories(result.data.categories);
      setPageData(result.data);

      if (pageData.url && pageData.url != null) {
        if (contextData.isMobile) {
          // Mobile sports workaround
        }
      } else {
        if (result.data.page_group_type == "categories") {
          setSelectedCategoryIndex(0);
        }
        if (result.data.page_group_type == "games") {
          loadMoreContent();
        }
      }
      pageCurrent = 0;
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      let item = categories[0];
      fetchContent(item, item.id, item.table_name, 0, false);
      setActiveCategory(item);
    }
  }, [categories]);

  const loadMoreContent = () => {
    let item = categories[selectedCategoryIndex];
    if (item) {
      fetchContent(item, item.id, item.table_name, selectedCategoryIndex, false);
    }
  };

  const fetchContent = (category, categoryId, tableName, categoryIndex, resetCurrentPage) => {
    let pageSize = 30;
    setIsLoadingGames(true);
    // setShowFullDivLoading(true);

    if (resetCurrentPage == true) {
      pageCurrent = 0;
      setGames([]);
    }

    setActiveCategory(category);
    setSelectedCategoryIndex(categoryIndex);

    callApiService(
      contextData,
      "GET",
      "/games/?page_group_type=categories&page_group_code=" +
        pageData.page_group_code +
        "&table_name=" +
        tableName +
        "&apigames_category_id=" +
        categoryId +
        "&page=" +
        pageCurrent +
        "&length=" +
        pageSize,
      callbackFetchContent,
      null
    );
  };

  const callbackFetchContent = (result) => {
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      if (pageCurrent == 0) {
        configureImageSrc(result);
        setGames(result.data);
      } else {
        configureImageSrc(result);
        setGames([...games, ...result.data]);
      }
      pageCurrent += 1;
    }
    setIsLoadingGames(false);
    setShowFullDivLoading(false);
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

  const configureImageSrc = (result) => {
    (result.data || []).forEach((element) => {
      let imageDataSrc = element.image_url;
      if (element.image_local != null) {
        imageDataSrc = contextData.cdnUrl + element.image_local;
      }
      element.imageDataSrc = imageDataSrc;
    });
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
                <a className="home-links-mobile__sub-item" href={isSlotsOnly == "true" ? "#" : "/sports"}>
                  <span className="SVGInline home-links-mobile__sub-item-icon">
                    <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowDeporte} />
                  </span>
                  <span className="home-links-mobile__sub-item-text">Deporte</span>
                </a>
                <a className="home-links-mobile__sub-item" href="/casino">
                  <span className="SVGInline home-links-mobile__sub-item-icon">
                    <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowCasino} />
                  </span>
                  <span className="home-links-mobile__sub-item-text">Casino</span>
                </a>
                <a
                  className="home-links-mobile__sub-item"
                  href={isSlotsOnly == "true" ? "#" : "/casinolive"}
                >
                  <span className="SVGInline home-links-mobile__sub-item-icon">
                    <img className="SVGInline-svg home-links-mobile__sub-item-icon-svg" src={IconYellowLiveCasino} />
                  </span>
                  <span className="home-links-mobile__sub-item-text">Casino en vivo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="slots-main-desktop__content-container">
            <div className="slots-main-desktop__provider-section">
              <div className="provider-section-desktop">
                <div className="provider-section-desktop__header">
                  <div className="provider-section-desktop__header-img-container">
                    <div className="provider-section-desktop__header-img-top">
                      {activeCategory.image_url && activeCategory.image_url !== "" && (
                        <img
                          className="provider-section-desktop__header-icon"
                          src={activeCategory.image_url}
                          alt=""
                          loading="lazy"
                        />
                      )}
                      <span className="provider-section-desktop__header-provider-text">{activeCategory.name}</span>
                    </div>
                    <div className="provider-section-desktop__header-line"></div>
                  </div>
                </div>
                <div className="provider-section-desktop__games-container">
                  {games &&
                    games.map((item, index) => (
                      <GameCard
                        key={index}
                        id={item.id}
                        title={item.name}
                        imageSrc={item.imageDataSrc}
                        onClick={() =>
                          isLogin ? launchGame(item.id, item.type, item.launcher) : isMobile ? navigate("/login") : handleLoginClick()
                        }
                      />
                    ))}
                </div>
                {isLoadingGames && <DivLoading />}
                {!isLoadingGames && (
                  <div className="carousel-arrows">
                    <a className="carousel-arrows__title" onClick={loadMoreContent}>
                      <span className="carousel-arrows__title-text">Mostrar todo</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;