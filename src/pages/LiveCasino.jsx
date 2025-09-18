import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { NavigationContext } from "../components/NavigationContext";
import { callApi, callApiService } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import CategoryButton from "../components/CategoryButton";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import LoginModal from "../components/LoginModal";
import CustomAlert from "../components/CustomAlert";
import "animate.css";
import ImgLiveBanner from "/src/assets/img/live-banner.png";
import ImgMobileLiveBanner from "/src/assets/img/mobile-live-banner.png";

let selectedGameId = null;
let selectedGameType = null;
let selectedGameLauncher = null;
let pageCurrent = 0;

const LiveCasino = () => {
  const pageTitle = "Live Casino";
  const { contextData } = useContext(AppContext);
  const { isLogin } = useContext(LayoutContext);
  const { setShowFullDivLoading } = useContext(NavigationContext);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [pageData, setPageData] = useState({});
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [messageCustomAlert, setMessageCustomAlert] = useState(["", ""]);
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldShowGameModal, setShouldShowGameModal] = useState(false);
  const refGameModal = useRef();
  const navigate = useNavigate();
  const location = useLocation();

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
    
    getPage("livecasino");
  }, [location.pathname]);

  const getPage = (page) => {
    setCategories([]);
    setGames([]);
    callApi(contextData, "GET", "/get-page?page=" + page, callbackGetPage, null);
  };

  const callbackGetPage = (result) => {   
    if (result.status === 500 || result.status === 422) {
      setMessageCustomAlert(["error", result.message]);
    } else {
      setCategories(result && result.data.categories);
      setPageData(result && result.data);

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
    fetchContent(item, item.id, item.table_name, selectedCategoryIndex, false);
  };

  const fetchContent = (category, categoryId, tableName, categoryIndex, resetCurrentPage) => {
    let pageSize = 30;
    setIsLoadingGames(true);
    setShowFullDivLoading(true);

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
    result.data.forEach((element) => {
      let imageDataSrc = element.image_url;
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
        <div className="slots-layout-content-desktop">
          <img
            className="slots-main-desktop__banner"
            src={isMobile ? ImgMobileLiveBanner : ImgLiveBanner}
            alt="banner"
          />
          <div className="slots-main-desktop__filter-container">
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
                          src=""
                          alt=""
                          loading="lazy"
                        />
                      )}
                      <span className="provider-section-desktop__header-provider-text">
                        {activeCategory.name}
                      </span>
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
      )}
    </>
  );
};

export default LiveCasino;