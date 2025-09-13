import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { callApi } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import NavLinkIcon from "../components/NavLinkIcon";
import CategoryButton from "../components/CategoryButton";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import SearchInput from "../components/SearchInput";
import LoginModal from "../components/LoginModal";
import "animate.css";
import ImgNavMidLobby from "/src/assets/img/nav-mid-lobby.png";
import ImgHot from "/src/assets/img/hot.png";
import ImgHeart from "/src/assets/img/heart.png";
import ImgArrow from "/src/assets/img/arrow.png";
import ImgSlotsBanner from "/src/assets/img/slots-banner.png";
import ImgMobileSlotsBanner from "/src/assets/img/mobile-slots-banner.png";

let selectedGameId = null;
let selectedGameType = null;
let selectedGameLauncher = null;
let pageCurrent = 0;

const Casino = () => {
  const pageTitle = "Casino";
  const { contextData } = useContext(AppContext);
  const [selectedPage, setSelectedPage] = useState("lobby");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [pageData, setPageData] = useState({});
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [searchDelayTimer, setSearchDelayTimer] = useState();
  const [fragmentNavLinksBody, setFragmentNavLinksBody] = useState(<></>);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef(null);
  const refGameModal = useRef();
  const { isLogin } = useContext(LayoutContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth <= 767;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setSelectedPage("home");
    getPage("home");

    if (contextData.session != null) {
      getStatus();
    }
  }, []);

  useEffect(() => {
    updateNavLinks();
  }, [selectedPage]);

  const getStatus = () => {
    callApi(contextData, "GET", "/get-status", callbackGetStatus, null);
  };

  const updateNavLinks = () => {
    if ((contextData.slots_only == null) || (contextData.slots_only == false)) {
      setFragmentNavLinksBody(
        <>
          <NavLinkIcon
            title="Lobby"
            pageCode="home"
            icon={ImgHeart}
            active={selectedPage === "home" || selectedPage === "lobby"}
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
        </>
      );
    } else {
      setFragmentNavLinksBody(
        <>
          <NavLinkIcon
            title="Lobby"
            pageCode="home"
            icon={ImgHeart}
            active={selectedPage === "home" || selectedPage === "lobby"}
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
        </>
      );
    }
  };

  const callbackGetStatus = (result) => {
    contextData.slots_only = result && result.slots_only;
    updateNavLinks();
  };

  const getPage = (page) => {
    setCategories([]);
    setGames([]);
    setSelectedPage(page);
    callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
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

  const loadMoreContent = () => {
    let item = categories[selectedCategoryIndex];
    fetchContent(item, item.id, item.table_name, selectedCategoryIndex, false);
  };

  const fetchContent = (category, categoryId, tableName, categoryIndex, resetCurrentPage) => {
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

  const launchGame = (id, type, launcher) => {
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
    } else {
      // Assuming setMessageCustomAlert is available via context or props
      // For now, we'll skip this as it's handled in Layout.jsx
    }
  };

  const search = (e) => {
    let keyword = e.target.value;
    setTxtSearch(keyword);

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
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

    if (e.key === "Enter" || e.keyCode === 13 || e.key === "Escape" || e.keyCode === 27) {
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
        "/search-content?keyword=" + txtSearch + "&page_group_code=" + pageData.page_group_code + "&length=" + pageSize,
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

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginConfirm = () => {
    setIsLogin(true);
    refreshBalance();
    setShowLoginModal(false);
  };

  return (
    <>
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleLoginConfirm}
        />
      )}

      {
        selectedGameId !== null ?
          <GameModal
            gameUrl={gameUrl}
            reload={launchGame}
            launchInNewTab={() => launchGame(null, null, "tab")}
            ref={refGameModal}
          /> :
          <>
            <div className="slots-layout-content-desktop">
              <img className="slots-main-desktop__banner" src={isMobile ? ImgMobileSlotsBanner : ImgSlotsBanner} alt="banner" />
              <div className="slots-main-desktop__filter-container">
                {
                  isLogin &&
                  <div className="slots-main-desktop__filters">
                    <div className="slots-main-desktop__search-category-filters">
                      <div className="slots-layout-content-menu">{fragmentNavLinksBody}</div>
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
                }

                <div className="slots-main-desktop__provider-filter-list">
                  {categories && categories.length > 0 && (
                    <div className="slots-provider-filter-list-desktop">
                      {categories.map((item, index) => (
                        <CategoryButton
                          key={index}
                          title={item.name}
                          icon=""
                          active={selectedCategoryIndex == index}
                          onClick={() => fetchContent(item, item.id, item.table_name, index, true)}
                        />
                      ))}
                    </div>
                  )}
                  {categories.length == 0 && <DivLoading />}
                </div>

                <div className="slots-main-mobile__search-category-filters">
                  <SearchInput txtSearch={txtSearch} setTxtSearch={setTxtSearch} searchRef={searchRef} search={search} />
                </div>
              </div>

              <div className="slots-main-desktop__content-container">
                <div className="slots-main-desktop__provider-section">
                  <div className="provider-section-desktop">
                    <div className="provider-section-desktop__header">
                      <div className="provider-section-desktop__header-img-container">
                        <div className="provider-section-desktop__header-img-top">
                          {activeCategory.image_url && activeCategory.image_url !== "" && (
                            <img className="provider-section-desktop__header-icon" src="" alt="" loading="lazy" />
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
                            onClick={() => isLogin ? launchGame(item.id, item.type, item.launcher) : isMobile ? navigate("/login") : handleLoginClick()}
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
            </div>
          </>
      }
    </>
  );
};

export default Casino;