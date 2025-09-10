import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../AppContext";
import { callApi, capitalize } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import NavLinkIcon from "../components/NavLinkIcon";
import CategoryButton from "../components/CategoryButton";
import NavLinkHeader from "../components/NavLinkHeader";
import Slideshow from "../components/Slideshow";
import UserMenu from "../components/UserMenu";
import LogoutConfirmModal from "../components/LogoutConfirmModal";
import "animate.css";

import ImgNavTopCasino from "/src/assets/img/nav-casino.png";
import ImgNavTopLiveCasino from "/src/assets/img/nav-livecasino.png";
import ImgNavMidLobby from "/src/assets/img/nav-mid-lobby.png";
import ImgHot from "/src/assets/img/hot.png";
import ImgHeart from "/src/assets/img/heart.png";
import ImgArrow from "/src/assets/img/arrow.png";
import ImgBet from "/src/assets/img/bet-responsibility.png";
import ImgLogo from "/src/assets/img/logo-net-new.png";
import ImgBanner1 from "/src/assets/img/banner-desktop-01.webp";
import ImgBanner2 from "/src/assets/img/banner-desktop-02.webp";
import ImgBanner3 from "/src/assets/img/banner-desktop-03.webp";
import IconCurrency from "/src/assets/svg/currency.svg";
import IconProfile from "/src/assets/svg/profile.svg";
import IconLogout from "/src/assets/svg/logout.svg";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import FullDivLoading from "../components/FullDivLoading";
import CustomAlert from "../components/CustomAlert";
import LanguageSelector from "../components/LanguageSelector";
import MobileSidebar from "../components/MobileSidebar";
import MobileFooter from "../components/MobileFooter";
import SearchInput from "../components/SearchInput";

let selectedGameId = null;
let selectedGameType = null;
let selectedGameLauncher = null;
let pageCurrent = 0;

const Home = () => {
  const pageTitle = "Casino";
  const { contextData, setContextData } = useContext(AppContext);
  const [status, setStatus] = useState(null);
  const [slotsOnly, setSlotsOnly] = useState(false);
  const [selectedPage, setSelectedPage] = useState("lobby");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [pageData, setPageData] = useState({});
  const [userBalance, setUserBalance] = useState("...");
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(contextData.isLogin);
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [showFullDivLoading, setShowFullDivLoading] = useState(false);
  const [messageCustomAlert, setMessageCustomAlert] = useState("");
  const [searchDelayTimer, setSearchDelayTimer] = useState();
  const [fragmentNavLinksTop, setFragmentNavLinksTop] = useState(<></>);
  const [fragmentNavLinksBody, setFragmentNavLinksBody] = useState(<></>);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchRef = useRef(null);
  const refGameModal = useRef();

  const imageSlideshow = [
    ImgBanner1,
    ImgBanner2,
    ImgBanner3,
  ];

  const properties = {};

  useEffect(() => {
    document.getElementById("style-tag").remove();
    const styleTag = document.createElement("style");

    styleTag.id = "style-tag";
    styleTag.innerHTML = "";
    styleTag.innerHTML += contextData.css.home;
    styleTag.innerHTML += contextData.css.M;
    styleTag.innerHTML += contextData.css.G;
    styleTag.innerHTML += contextData.css.L;
    styleTag.innerHTML += contextData.css.S;

    if (!contextData.isMobile) {
      styleTag.innerHTML += contextData.css.D;
    }

    styleTag.innerHTML += contextData.css.normalize;
    styleTag.innerHTML += contextData.css.icons;
    document.head.appendChild(styleTag);

    getStatus();
    setSelectedPage("home");
    getPage("home");
    refreshBalance();
  }, []);

  const openMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getStatus = () => {
    callApi(
      contextData,
      "GET",
      "/get-status",
      callbackGetStatus,
      null
    );
  };

  const callbackGetStatus = (result) => {
    if ((result && result.slots_only == null) || (result && result.slots_only == false)) {
      setFragmentNavLinksTop(<>
        <NavLinkHeader
          title="Inicio"
          pageCode="home"
          icon={ImgNavTopCasino}
          active={
            selectedPage == "home" ||
            selectedPage == "lobby" ||
            selectedPage == "hot"
          }
          onClick={() => getPage("home")}
        />
        <NavLinkHeader
          title="Casino"
          pageCode="casino"
          icon={ImgNavTopCasino}
          active={["casino", "arcade", "megaways"].includes(selectedPage)}
          onClick={() => getPage("casino")}
        />
        <NavLinkHeader
          title="Casino en vivo"
          pageCode="livecasino"
          icon={ImgNavTopLiveCasino}
          active={["livecasino", "roulette"].includes(selectedPage)}
          onClick={() => getPage("livecasino")}
        />
      </>);

      setFragmentNavLinksBody(<>
        <NavLinkIcon
          title="Lobby"
          pageCode="home"
          icon={ImgHeart}
          active={selectedPage == "home"}
          onClick={() => getPage("home")}
        />
        <NavLinkIcon
          title="Hot"
          pageCode="hot"
          icon={ImgHot}
          active={selectedPage === "hot"}
          onClick={() => getPage("hot")}
        />
        <NavLinkIcon
          title="Habilidad"
          pageCode="arcade"
          icon={ImgNavMidLobby}
          active={selectedPage === "arcade"}
          onClick={() => getPage("arcade")}
        />
        <NavLinkIcon
          title="Megaways"
          pageCode="megaways"
          icon={ImgArrow}
          active={selectedPage === "megaways"}
          onClick={() => getPage("megaways")}
        />
        <NavLinkIcon
          title="Ruleta"
          pageCode="roulette"
          icon={ImgNavMidLobby}
          active={selectedPage === "roulette"}
          onClick={() => getPage("roulette")}
        />
      </>);
    } else {
      setSlotsOnly(result.slots_only === true);
      setFragmentNavLinksTop(<>
        <NavLinkHeader
          title="Inicio"
          pageCode="home"
          icon={ImgNavTopCasino}
          active={
            selectedPage == "home" ||
            selectedPage == "lobby" ||
            selectedPage == "hot"
          }
          onClick={() => getPage("home")}
        />
      </>);

      setFragmentNavLinksBody(<>
        <NavLinkIcon
          title="Lobby"
          pageCode="home"
          icon={ImgHeart}
          active={selectedPage == "home"}
          onClick={() => getPage("home")}
        />
        <NavLinkIcon
          title="Hot"
          pageCode="hot"
          icon={ImgHot}
          active={selectedPage === "hot"}
          onClick={() => getPage("hot")}
        />
        <NavLinkIcon
          title="Megaways"
          pageCode="megaways"
          icon={ImgArrow}
          active={selectedPage === "megaways"}
          onClick={() => getPage("megaways")}
        />
      </>);
    }

    setStatus(result.data);
  };

  const getPage = (page) => {
    setCategories([]);
    setGames([]);
    setSelectedPage(page);
    callApi(
      contextData,
      "GET",
      "/get-page?page=" + page,
      callbackGetPage,
      null
    );
  };

  const callbackGetPage = (result) => {
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
  };

  useEffect(() => {
    if (categories.length > 0) {
      let item = categories[0];
      fetchContent(item, item.id, item.table_name, 0, false);
      setActiveCategory(item);
    }
  }, [categories]);

  const refreshBalance = () => {
    setUserBalance("...");
    callApi(
      contextData,
      "GET",
      "/get-user-balance",
      callbackRefreshBalance,
      null
    );
  };

  const callbackRefreshBalance = (result) => {
    setUserBalance(result.balance);
  };

  const loadMoreContent = () => {
    let item = categories[selectedCategoryIndex];
    fetchContent(item, item.id, item.table_name, selectedCategoryIndex, false);
  };

  const fetchContent = (
    category,
    categoryId,
    tableName,
    categoryIndex,
    resetCurrentPage
  ) => {
    let pageSize = 30;
    setIsLoadingGames(true);

    if (resetCurrentPage == true) {
      pageCurrent = 0;
      setGames([]);
    }

    setActiveCategory(category);
    setSelectedCategoryIndex(categoryIndex);

    callApi(
      contextData,
      "GET",
      "/get-content?page_group_code=" +
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
    if (pageCurrent == 0) {
      configureImageSrc(result);
      setGames(result.content);
    } else {
      configureImageSrc(result);
      setGames([...games, ...result.content]);
    }
    pageCurrent += 1;
    setIsLoadingGames(false);
  };

  const onChangeSelectCategory = (value) => {
    let item = categories[value];
    fetchContent(item, item.id, item.table_name, value, true);
  };

  const launchGame = (id, type, launcher) => {
    setShowFullDivLoading(true);

    selectedGameId = id != null ? id : selectedGameId;
    selectedGameType = type != null ? type : selectedGameType;
    selectedGameLauncher = launcher != null ? launcher : selectedGameLauncher;

    callApi(
      contextData,
      "GET",
      "/get-game-url?game_id=" + selectedGameId,
      callbackLaunchGame,
      null
    );
  };

  const callbackLaunchGame = (result) => {
    setShowFullDivLoading(false);

    if (result.status == "0") {
      switch (selectedGameLauncher) {
        case "modal":
        case "tab":
          setGameUrl(result.url);
          break;
      }
    } else {
      setMessageCustomAlert(["error", "Tenemos problemas para cargar el juego, contacte al administrador."]);
    }
  };

  const search = (e) => {
    let keyword = e.target.value;
    setTxtSearch(keyword);

    if (
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
      )
    ) {
      let keyword = e.target.value;
      do_search(keyword);
    } else {
      if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode == 8 ||
        e.keyCode == 46
      ) {
        do_search(keyword);
      }
    }

    if (
      e.key === "Enter" ||
      e.keyCode === 13 ||
      e.key === "Escape" ||
      e.keyCode === 27
    ) {
      searchRef.current?.blur();
    }
  };

  const do_search = (keyword) => {
    clearTimeout(searchDelayTimer);

    if (keyword == "") {
      return;
    }

    setGames([]);
    setIsLoadingGames(true);

    let pageSize = 15;

    let searchDelayTimerTmp = setTimeout(function () {
      callApi(
        contextData,
        "GET",
        "/search-content?keyword=" +
        txtSearch +
        "&page_group_code=" +
        pageData.page_group_code +
        "&length=" +
        pageSize,
        callbackSearch,
        null
      );
    }, 1000);

    setSearchDelayTimer(searchDelayTimerTmp);
  };

  const callbackSearch = (result) => {
    configureImageSrc(result);
    setGames(result.content);
    setIsLoadingGames(false);
    pageCurrent = 0;
  };

  const configureImageSrc = (result) => {
    result.content.forEach((element) => {
      let imageDataSrc = element.image_url;
      if (element.image_local != null) {
        imageDataSrc = contextData.cdnUrl + element.image_local;
      }
      element.imageDataSrc = imageDataSrc;
    });
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    callApi(contextData, "POST", "/logout", (result) => {
      if (result.status === "0") {
        setTimeout(() => {
          localStorage.removeItem("session");
          window.location.reload();
        }, 200);
      } else {
        setShowLogoutModal(false);
      }
    }, null);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="body-container fade-in">
      <FullDivLoading show={showFullDivLoading} />
      <CustomAlert message={messageCustomAlert} />
      {showLogoutModal && <LogoutConfirmModal onConfirm={handleLogoutConfirm} onCancel={handleLogoutCancel} />}

      <GameModal
        gameUrl={gameUrl}
        reload={launchGame}
        launchInNewTab={() => launchGame(null, null, "tab")}
        ref={refGameModal}
        setMessageCustomAlert={setMessageCustomAlert}
      />

      <div className="body-scrollable">
        <div className="app__header-wrapper">
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
                  <a className="header-main-menu-desktop__item header-main-menu-desktop__item_active" href="/home">
                    <div className="header-main-menu-desktop__item-content">
                      <span className="header-main-menu-desktop__item-text">Inicio</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="header-desktop__right">
                <div className="user-block">
                  {
                    isLogin ? (
                      <div className="user-block__top">
                        <div className="user-block__border">
                          <div className="user-block__info">
                            <span className="user-block__info-icon">
                              <span className="SVGInline SVG-component__content">
                                <img src={IconCurrency} />
                              </span>
                            </span>
                            <span className="user-block__text">{userBalance}</span><span className="user-block__currency">ARS</span>
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
                          <button type="button" className="button-desktop button-desktop_color_default">
                            <span className="header-login-block-desktop__button-text">Acceder</span>
                          </button>
                        </div>
                      </div>
                    )
                  }

                  {showUserMenu && <UserMenu />}
                </div>
                <div className="header-desktop__separator"></div>
                <LanguageSelector />
              </div>
            </div>
          </header>

          <main className="app__main">
            <Slideshow images={imageSlideshow}></Slideshow>
            <div className="slots-main-desktop__filter-container">
              <div className="slots-main-desktop__filters">
                <div className="slots-main-desktop__search-category-filters">
                  <div className="slots-layout-content-menu">
                    {fragmentNavLinksBody}
                  </div>
                  <SearchInput
                    txtSearch={txtSearch}
                    setTxtSearch={setTxtSearch}
                    searchRef={searchRef}
                    search={search}
                    contextData={contextData}
                    pageData={pageData}
                    setGames={setGames}
                    setIsLoadingGames={setIsLoadingGames}
                    callbackSearch={callbackSearch}
                    searchDelayTimer={searchDelayTimer}
                    setSearchDelayTimer={setSearchDelayTimer}
                  />
                </div>
              </div>

              <div className="slots-main-desktop__provider-filter-list">
                {categories && categories.length > 0 && (
                  <div className="slots-provider-filter-list-desktop">
                    {categories.map((item, index) => (
                      <CategoryButton
                        key={index}
                        title={item.name}
                        icon=""
                        active={selectedCategoryIndex == index}
                        onClick={() =>
                          fetchContent(item, item.id, item.table_name, index, true)
                        }
                      />
                    ))}
                  </div>
                )}

                {categories.length == 0 && (
                  <DivLoading />
                )}
              </div>

              <div className="slots-main-mobile__search-category-filters">
                <SearchInput
                  txtSearch={txtSearch}
                  setTxtSearch={setTxtSearch}
                  searchRef={searchRef}
                  search={search}
                />
              </div>
            </div>
            <div className="slots-main-desktop__content-container">
              <div className="slots-main-desktop__provider-section">
                <div className="provider-section-desktop">
                  <div className="provider-section-desktop__header">
                    <div className="provider-section-desktop__header-img-container">
                      <div className="provider-section-desktop__header-img-top">
                        {
                          activeCategory.image_url && activeCategory.image_url !== "" && <img className="provider-section-desktop__header-icon" src="" alt="" loading="lazy" />
                        }
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
                            launchGame(item.id, item.type, item.launcher)
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
          </main>

          <MobileSidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

          <div className="app__footer-container">
            <footer className="footer">
              <nav className="footer__nav-links">
                <div className="footer__menu-container">
                  <a className="footer__menu-item" href="/home">
                    <span className="footer__menu-description">Inicio</span>
                  </a>
                </div>
              </nav>
              <div className="footer__center">
                <div className="footer__logo">
                  <img
                    title="Casino"
                    alt="Casino"
                    src={ImgLogo}
                    className="logo-domain"
                  />
                </div>
                <p className="footer__center-desc"></p>
              </div>
              <div className="footer__right">
                <div className="footer__button">
                  <div className="scroll-top-button-desktop">
                    <button type="button" className="button-desktop button-desktop_color_transparent" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <span className="scroll-top-button-desktop__text">Volver arriba</span>
                    </button>
                  </div>
                </div>
                <div className="footer__right-container">
                  <img className="footer__icon" src={ImgBet} alt="18+" />
                </div>
              </div>
              <div className="chat-with-us app-mode-chat">
                <a
                  className="telegram"
                  href=""
                  target="_blank"
                >
                  <img
                    src="https://assets.a7a.info/media/icons/generic/telegram.png"
                    title="Contactar"
                    alt="Contactar"
                  />
                </a>
              </div>
            </footer>
          </div>

          <MobileFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;