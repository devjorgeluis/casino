import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { NavigationContext } from "../components/NavigationContext";
import { callApi } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import NavLinkIcon from "../components/NavLinkIcon";
import CategoryButton from "../components/CategoryButton";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import SearchInput from "../components/SearchInput";
import LoginModal from "../components/LoginModal";
import CustomAlert from "../components/CustomAlert";
import "animate.css";
import ImgNavMidLobby from "/src/assets/img/nav-mid-lobby.png";
import ImgHot from "/src/assets/img/hot.png";
import ImgHeart from "/src/assets/img/heart.png";
import ImgMegaway from "/src/assets/svg/megaway.svg";
import ImgJoker from "/src/assets/svg/joker.svg";
import ImgRuleta from "/src/assets/img/ruleta.png";
import ImgSlotsBanner from "/src/assets/img/slots-banner.png";
import ImgMobileSlotsBanner from "/src/assets/img/mobile-slots-banner.png";

let selectedGameId = null;
let selectedGameType = null;
let selectedGameLauncher = null;
let pageCurrent = 0;

const Casino = () => {
  const pageTitle = "Casino";
  const { contextData } = useContext(AppContext);
  const { isLogin } = useContext(LayoutContext);
  const { setShowFullDivLoading } = useContext(NavigationContext);
  const [selectedPage, setSelectedPage] = useState("lobby");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const mainCategoriesRef = useRef([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [pageData, setPageData] = useState({});
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [searchDelayTimer, setSearchDelayTimer] = useState();
  const [fragmentNavLinksBody, setFragmentNavLinksBody] = useState(<></>);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [shouldShowGameModal, setShouldShowGameModal] = useState(false);
  const [messageCustomAlert, setMessageCustomAlert] = useState(["", ""]);
  const [casinoPageGroupCode, setCasinoPageGroupCode] = useState("");
  const searchRef = useRef(null);
  const refGameModal = useRef();
  const pageGroupTypeRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isSlotsOnly } = useOutletContext();
  const pageDataRef = useRef({});
  const pendingPageRef = useRef(new Set());
  const lastProcessedPageRef = useRef({ page: null, ts: 0 });

  useEffect(() => {
    if (categories.length > 0 && pageGroupTypeRef.current === "categories") {
      const item = categories[0];
      setActiveCategory(item);
      fetchContent(item, item.id, item.table_name, 0, true);
    }
  }, [categories]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const currentPath = window.location.pathname;
        if (currentPath === '/casino') {
          setShowFullDivLoading(true);
          pendingPageRef.current.clear();
          lastProcessedPageRef.current = { page: null, ts: 0 };

          selectedGameId = null;
          selectedGameType = null;
          selectedGameLauncher = null;
          setGameUrl("");
          setShouldShowGameModal(false);

          const hash = location.hash.replace("#", "");

          if (hash) {
            callApi(contextData, "GET", "/get-page?page=casino", (result) => {
              if (result && result.data && result.data.categories) {
                const casinoCategories = result.data.categories || [];
                setMainCategories(casinoCategories);
                mainCategoriesRef.current = casinoCategories;
              }
              getPage(hash);
            }, null);
          } else {
            getPage("casino");
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.hash]);

  useEffect(() => {
    selectedGameId = null;
    selectedGameType = null;
    selectedGameLauncher = null;
    setGameUrl("");
    setShouldShowGameModal(false);

    const hash = location.hash.replace("#", "");

    if (hash) {
      callApi(contextData, "GET", "/get-page?page=casino", (result) => {
        if (result && result.data && result.data.categories) {
          const casinoCategories = result.data.categories || [];
          setMainCategories(casinoCategories);
          mainCategoriesRef.current = casinoCategories;
        }
        getPage(hash);
      }, null);
    } else {
      getPage("casino");
    }
  }, [location.pathname, location.hash]);


  useEffect(() => {
    updateNavLinks();
  }, [selectedPage]);

  const pageCodeToTitle = {
    home: "Lobby",
    lobby: "Lobby",
    hot: "Nuevos",
    arcade: "Habilidad",
    megaways: "Megaways",
    joker: "Jokers",
    roulette: "Ruleta",
  };

  const isSlotsOnlyFalse = isSlotsOnly === false || isSlotsOnly === "false";

  const updateNavLinks = () => {
    if (isSlotsOnlyFalse) {
      setFragmentNavLinksBody(
        <>
          <NavLinkIcon title="Lobby" pageCode="home" icon={ImgHeart}
            active={selectedPage === "home" || selectedPage === "lobby" || selectedPage === "casino"}
            onClick={() => {
              setActiveCategory({});
              getPage("casino");
            }} />
          <NavLinkIcon title="Nuevos" pageCode="hot" icon={ImgHot}
            active={selectedPage === "hot"} onClick={() => getPage("hot")} />
          <NavLinkIcon title="Habilidad" pageCode="arcade" icon={ImgNavMidLobby}
            active={selectedPage === "arcade"} onClick={() => getPage("arcade")} />
          <NavLinkIcon title="Megaways" pageCode="megaways" icon={ImgMegaway}
            active={selectedPage === "megaways"} onClick={() => getPage("megaways")} />
          <NavLinkIcon title="Jokers" pageCode="joker" icon={ImgJoker}
            active={selectedPage === "joker"} onClick={() => getPage("joker")} />
          <NavLinkIcon title="Ruleta" pageCode="roulette" icon={ImgRuleta}
            active={selectedPage === "roulette"} onClick={() => getPage("roulette")} />
        </>
      );
    } else {
      setFragmentNavLinksBody(
        <>
          <NavLinkIcon title="Lobby" pageCode="home" icon={ImgHeart}
            active={selectedPage === "home" || selectedPage === "lobby" || selectedPage === "casino"}
            onClick={() => {
              setActiveCategory({});
              getPage("casino");
            }} />
          <NavLinkIcon title="Nuevos" pageCode="hot" icon={ImgHot}
            active={selectedPage === "hot"} onClick={() => getPage("hot")} />
          <NavLinkIcon title="Megaways" pageCode="megaways" icon={ImgMegaway}
            active={selectedPage === "megaways"} onClick={() => getPage("megaways")} />
          <NavLinkIcon title="Jokers" pageCode="joker" icon={ImgJoker}
            active={selectedPage === "joker"} onClick={() => getPage("joker")} />
        </>
      );
    }
  };

  const getPage = (page) => {
    if (pendingPageRef.current.has(page)) return;
    pendingPageRef.current.add(page);

    setIsLoadingGames(true);
    setCategories([]);
    setGames([]);
    setSelectedPage(page);
    callApi(contextData, "GET", "/get-page?page=" + page, (result) => callbackGetPage(result, page), null);
  };

  const callbackGetPage = (result, page) => {
    pendingPageRef.current.delete(page);

    if (!result || !result.data) {
      setMessageCustomAlert(["error", "Error al cargar la página"]);
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
      return;
    }

    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
      return;
    }

    const now = Date.now();
    if (lastProcessedPageRef.current.page === page && now - lastProcessedPageRef.current.ts < 3000) {
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
      return;
    }
    lastProcessedPageRef.current = { page, ts: now };

    const data = result.data;
    pageGroupTypeRef.current = data.page_group_type;
    setPageData(data);

    if (data.url && data.url != null) {
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
      return;
    }

    if (data.page_group_type === "categories") {
      const newCategories = data.categories || [];
      setSelectedCategoryIndex(0);
      setCategories(newCategories);
      pageDataRef.current = data;
      if (page === "casino") {
        setMainCategories(newCategories);
        mainCategoriesRef.current = newCategories;
        setCasinoPageGroupCode(data.page_group_code);
      }
      pageCurrent = 0;
    } else if (data.page_group_type === "games") {
      const currentMainCategories = mainCategoriesRef.current;
      setCategories(currentMainCategories.length > 0 ? currentMainCategories : []);

      const displayName = pageCodeToTitle[page] || data.page_group_name || data.name || page;
      setActiveCategory({ name: displayName, image_url: data.image_url || "" });

      const gamesWithImages = (data.categories || []).map((game) => ({
        ...game,
        imageDataSrc: game.image_local !== null
          ? contextData.cdnUrl + game.image_local
          : game.image_url,
      }));
      setGames(gamesWithImages);
      pageCurrent = 1;
    }

    setIsLoadingGames(false);
    setShowFullDivLoading(false);
  };

  const loadMoreContent = () => {
    const item = categories[selectedCategoryIndex];
    if (item) {
      fetchContent(item, item.id, item.table_name, selectedCategoryIndex, false);
    }
  };

  const fetchContent = (category, categoryId, tableName, categoryIndex, resetCurrentPage) => {
    const pageSize = 30;

    setTxtSearch("")
    setSelectedProvider(null);
    setIsLoadingGames(true);

    if (resetCurrentPage === true) {
      pageCurrent = 0;
      setGames([]);
    }

    setActiveCategory(category);
    setSelectedCategoryIndex(categoryIndex);

    let groupCode;

    if (pageData.page_group_type === "games") {
      groupCode = casinoPageGroupCode || pageDataRef.current.page_group_code || "default_pages_home";
    } else {
      groupCode = pageData.page_group_code || pageDataRef.current.page_group_code || "default_pages_home";
    }

    let apiUrl =
      "/get-content?page_group_type=categories&page_group_code=" +
      groupCode +
      "&table_name=" +
      tableName +
      "&apigames_category_id=" +
      categoryId +
      "&page=" +
      pageCurrent +
      "&length=" +
      pageSize;

    callApi(contextData, "GET", apiUrl, callbackFetchContent, null);
  };

  const callbackFetchContent = (result) => {
    if (!result) {
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
      return;
    }

    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
      setIsLoadingGames(false);
      setShowFullDivLoading(false);
    } else {
      const items = result.content || result.data || [];
      items.forEach((element) => {
        element.imageDataSrc = element.image_local != null
          ? contextData.cdnUrl + element.image_local
          : element.image_url;
      });

      if (pageCurrent === 0) {
        setGames(items);
      } else {
        setGames((prev) => [...prev, ...items]);
      }
      pageCurrent += 1;

      setIsLoadingGames(false);
      setShowFullDivLoading(false);
    }
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
    if (!result) {
      setShowFullDivLoading(false);
      return;
    }

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

  const search = (e) => {
    let keyword = e.target.value;
    setTxtSearch(keyword);

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
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

    if (keyword === "") {
      setGames([]);
      setIsLoadingGames(false);
      pageCurrent = 0;
      if (categories.length > 0) {
        const item = categories[selectedCategoryIndex] || categories[0];
        fetchContent(item, item.id, item.table_name, selectedCategoryIndex, true);
      }
      return;
    }

    setGames([]);
    setIsLoadingGames(true);

    const pageSize = 30;

    const searchDelayTimerTmp = setTimeout(function () {
      callApi(
        contextData,
        "GET",
        "/search-content?keyword=" + keyword + "&page_group_code=" + pageData.page_group_code + "&length=" + pageSize,
        callbackSearch,
        null
      );
    }, 1000);

    setSearchDelayTimer(searchDelayTimerTmp);
  };

  const callbackSearch = (result) => {
    if (!result) {
      setIsLoadingGames(false);
      return;
    }

    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      configureImageSrc(result, true);
      setGames(result.content || []);
      pageCurrent = 0;
    }
    setIsLoadingGames(false);
  };

  const configureImageSrc = (result, isSearch) => {
    const items = isSearch
      ? result.content || []
      : result.content || result.data || [];

    items.forEach((element) => {
      element.imageDataSrc = element.image_local != null
        ? contextData.cdnUrl + element.image_local
        : element.image_url;
    });
  };

  const handleLoginClick = () => setShowLoginModal(true);
  const handleLoginConfirm = () => setShowLoginModal(false);

  const closeGameModal = () => {
    selectedGameId = null;
    selectedGameType = null;
    selectedGameLauncher = null;
    setGameUrl("");
    setShouldShowGameModal(false);
  };

  const handleAlertClose = () => setMessageCustomAlert(["", ""]);

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
        <div className="slots-layout-content-desktop">
          <img
            className="slots-main-desktop__banner"
            src={isMobile ? ImgMobileSlotsBanner : ImgSlotsBanner}
            alt="banner"
          />
          <div className="slots-main-desktop__filter-container">
            <div className="slots-main-desktop__filters">
              <div className="slots-main-desktop__search-category-filters">
                <div className="slots-layout-content-menu">{fragmentNavLinksBody}</div>
                <SearchInput
                  txtSearch={txtSearch}
                  setTxtSearch={setTxtSearch}
                  searchRef={searchRef}
                  search={search}
                  onSearch={do_search}
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
                      icon={contextData.cdnUrl + item.image_local}
                      active={selectedCategoryIndex === index}
                      onClick={() => {
                        pageGroupTypeRef.current = "categories";
                        setSelectedProvider(null);
                        setActiveCategory(item);
                        setSelectedCategoryIndex(index);
                        fetchContent(item, item.id, item.table_name, index, true);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="slots-main-mobile__search-category-filters">
              <SearchInput
                txtSearch={txtSearch}
                setTxtSearch={setTxtSearch}
                searchRef={searchRef}
                search={search}
                onSearch={do_search}
              />
            </div>
          </div>

          <div className="slots-main-desktop__content-container">
            <div className="slots-main-desktop__provider-section">
              <div className="provider-section-desktop">
                <div className="provider-section-desktop__header">
                  {txtSearch === "" && (
                    <div className="provider-section-desktop__header-img-container">
                      {
                        !isLoadingGames && <>
                          <div className="provider-section-desktop__header-img-top">
                            {activeCategory && activeCategory.image_url && activeCategory.image_url !== "" && (
                              <img
                                className="provider-section-desktop__header-icon"
                                src={activeCategory.image_url}
                                alt=""
                                loading="lazy"
                              />
                            )}
                            <span className="provider-section-desktop__header-provider-text">
                              {activeCategory?.name}
                            </span>
                          </div>
                          <div className="provider-section-desktop__header-line"></div>
                        </>
                      }
                    </div>
                  )}
                </div>
                <div className="provider-section-desktop__games-container">
                  {games && games.map((item, index) => (
                    <GameCard
                      key={index}
                      id={item.id}
                      title={item.name}
                      imageSrc={item.imageDataSrc}
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
                <div className="carousel-arrows">
                  <a className="carousel-arrows__title" onClick={loadMoreContent}>
                    <span className="carousel-arrows__title-text">Mostrar todo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Casino;