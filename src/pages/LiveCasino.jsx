import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { LayoutContext } from "../components/LayoutContext";
import { NavigationContext } from "../components/NavigationContext";
import { callApi } from "../utils/Utils";
import GameCard from "/src/components/GameCard";
import CategoryButton from "../components/CategoryButton";
import GameModal from "../components/GameModal";
import DivLoading from "../components/DivLoading";
import SearchInput from "../components/SearchInput";
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
  const casinoBaseUrl = "https://casinotango.xyz/";
  const { contextData } = useContext(AppContext);
  const { isLogin } = useContext(LayoutContext);
  const { setShowFullDivLoading } = useContext(NavigationContext);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [pageData, setPageData] = useState({});
  const [games, setGames] = useState([]);
  const [gameUrl, setGameUrl] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const [messageCustomAlert, setMessageCustomAlert] = useState("");
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [searchDelayTimer, setSearchDelayTimer] = useState();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef(null);
  const refGameModal = useRef();
  const navigate = useNavigate();

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
    getPage("livecasino");
  }, []);

  const getPage = (page) => {
    setCategories([]);
    setGames([]);
    // setShowFullDivLoading(true);
    fetch(casinoBaseUrl + "api/v2/get-page?page=" + page, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "bearer " + contextData.session?.authorization?.token,
      },
    })
    .then((res) => {
      switch (res.status) {
        case 500:
          setMessageCustomAlert(["error", "Ha ocurrido un error inesperado, contacte al administrador."]);
          return;
        case 422:
          setMessageCustomAlert(["error", "Los datos ingresados no son válidos."]);
          return;
        case 401:
          localStorage.removeItem("session");
          window.location.reload();
          return;
        default:
          return res.json();
      }
    })
    .then((response) => {
      callbackGetPage(response);
    });
  };

  const callbackGetPage = (result) => {
    console.log(result);
    
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
    setShowFullDivLoading(false);
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
    // setShowFullDivLoading(true);

    if (resetCurrentPage == true) {
      pageCurrent = 0;
      setGames([]);
    }

    setActiveCategory(category);
    setSelectedCategoryIndex(categoryIndex);

    const params = new URLSearchParams({
      page_group_type: "categories",
      page: pageCurrent.toString(),
      page_group_code: pageData.page_group_code,
      table_name: tableName || "apigames_categories",
      apigames_category_id: categoryId.toString(),
      length: pageSize.toString(),
    });

    fetch(casinoBaseUrl + "service/apigames/games?" + params.toString(), {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "bearer " + contextData.session?.authorization?.token,
      },
    })
      .then((res) => {
        switch (res.status) {
          case 500:
            setMessageCustomAlert(["error", "Ha ocurrido un error inesperado, contacte al administrador."]);
            return;
          case 422:
            setMessageCustomAlert(["error", "Los datos ingresados no son válidos."]);
            return;
          case 401:
            localStorage.removeItem("session");
            window.location.reload();
            return;
          default:
            return res.json();
        }
      })
      .then((result) => {
        if (result && result.code === "0") {
          const content = result.data || [];
          if (pageCurrent == 0) {
            configureImageSrc({ content });
            setGames(content);
          } else {
            configureImageSrc({ content });
            setGames([...games, ...content]);
          }
          pageCurrent += 1;
        }
        setIsLoadingGames(false);
        setShowFullDivLoading(false);
      });
  }

  const launchGame = (id, type, launcher) => {
    selectedGameId = id != null ? id : selectedGameId;
    selectedGameType = type != null ? type : selectedGameType;
    selectedGameLauncher = launcher != null ? launcher : selectedGameLauncher;
    // setShowFullDivLoading(true);

    fetch(casinoBaseUrl + "service/apigames/get_game_url?launcher=modal&type=casino&game_id=" + selectedGameId, callbackLaunchGame, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "bearer " + contextData.session?.authorization?.token,
      },
    })
    .then((res) => {      
      switch (res.status) {
        case 500:
          setMessageCustomAlert(["error", "Ha ocurrido un error inesperado, contacte al administrador."]);
          return;
        case 422:
          setMessageCustomAlert(["error", "Los datos ingresados no son válidos."]);
          return;
        case 401:
          localStorage.removeItem("session");
          // window.location.reload();
          return;
        default:
          return res.json();
      }
    })
    .then((response) => {
      if (response) {
        callbackGetPage(response);
      } else {
        selectedGameId = null;
        getPage("livecasino");
      }
    });
  };

  const callbackLaunchGame = (result) => {
    if (result.status == "0") {
      switch (selectedGameLauncher) {
        case "modal":
        case "tab":
          setGameUrl(result.url);
          break;
      }
    }
    setShowFullDivLoading(false);
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
    setShowFullDivLoading(true);

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
    setShowFullDivLoading(false);
    pageCurrent = 0;
  };

  const configureImageSrc = (result) => {
    result.content.forEach((element) => {
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

  return (
    <>
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleLoginConfirm}
        />
      )}

      <CustomAlert message={messageCustomAlert} />

      {selectedGameId !== null ? (
        <GameModal
          gameUrl={gameUrl}
          reload={launchGame}
          launchInNewTab={() => launchGame(null, null, "tab")}
          ref={refGameModal}
        />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default LiveCasino;