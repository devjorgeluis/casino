import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { callApi, capitalize } from "../utils/Utils";
import { ImRedo } from "react-icons/im";
import { ImEnlarge2 } from "react-icons/im";
import { ImNewTab } from "react-icons/im";
import DivLoading from "./DivLoading";

const GameModal = (props) => {
  const { contextData, setContextData } = useContext(AppContext);
  const [url, setUrl] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (props.gameUrl !== null && props.gameUrl !== "") {
      // console.log("props.gameUrl change detected, setting local to GameModal");
      // console.log(props.gameUrl)
      document
        .getElementsByClassName("game-window")[0]
        .classList.remove("d-none");
      setUrl(props.gameUrl);
    }
  }, [props.gameUrl]);

  const closeModal = () => {
    resetModal();
    document.getElementsByClassName("game-window")[0].classList.add("d-none");
  };

  const reload = () => {
    resetModal();
    props.reload();
  };

  const resetModal = () => {
    setUrl(null);
    setIframeLoaded(false);
    document.getElementById("game-window-iframe").classList.add("d-none");
  };

  const toggleFullScreen = (isFull) => {
    // console.log("toggleFullScreen");

    // maximiza
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (isFull === false) {
        return;
      }

      // windowResize()
      // $(window).resize(function () { windowResize() });

      // syncWindowHeight();
      // window.addEventListener("resize", syncWindowHeight);

      // oculta barra lateral
      document
        .getElementsByClassName("game-window-header")[0]
        .classList.add("d-none");
      document
        .getElementById("game-window-iframe")
        .classList.remove("game-window-iframe-border");

      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }

      // minimiza
    } else {
      if (isFull === true) {
        return;
      }

      // window.removeEventListener("resize", syncWindowHeight);
      // window.scrollTo(0, localStorage.pageScroll);

      // document
      //   .getElementsByClassName("game-window-header")[0]
      //   .classList.remove("d-none");
      // document
      //   .getElementsByClassName("game-window-iframe-wrapper")[0]
      //   .classList.add("game-window-iframe-border");

      // if (document.cancelFullScreen) {
      //   document.cancelFullScreen();
      // } else if (document.mozCancelFullScreen) {
      //   document.mozCancelFullScreen();
      // } else if (document.webkitCancelFullScreen) {
      //   document.webkitCancelFullScreen();
      // }
    }
  };

  const exitHandler = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      // aqui cae cuando se minimiza la ventana
      document
        .getElementsByClassName("game-window-header")[0]
        .classList.remove("d-none");
      document
        .getElementById("game-window-iframe")
        .classList.add("game-window-iframe-border");
    } else {
      // aqui cae cuando se maximiza la ventana
    }
  };

  if (document.addEventListener) {
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
  }

  const launchInNewTab = () => {
    props.launchInNewTab();
    resetModal();
  };

  const handleIframeLoad = () => {
    // console.log("handleIframeLoad");
    if (url != null) {
      document.getElementById("game-window-iframe").classList.remove("d-none");
      setIframeLoaded(true);
    }
  };

  const handleIframeError = () => {
    // console.log("handleIframeError");
    props.setMessageCustomAlert(["error", "Se produjo un error al cargar el juego, contacte al administrador."])
  };

  

  useEffect(() => {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName("body")[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height =
        w.innerHeight || documentElement.clientHeight || body.clientHeight;

    // mobile
    if (width <= 767) {
      document
        .getElementsByClassName("game-window")[0]
        .classList.add("portrait");
    }
    // desktop
    else {
      document
        .getElementsByClassName("game-window")[0]
        .classList.add("landscape");
    }
  }, []);

  return (
    <>
      <div className="d-none game-window">
        <div className="game-window-header">
          <div className="game-window-header-item align-center">
            <span
              className="close-button"
              onClick={closeModal}
              title="Close"
            ></span>
          </div>
          <div className="game-window-header-item align-center">
            <span className="icon-reload" onClick={reload} title="Reload">
              <ImRedo />
            </span>
          </div>
          <div className="game-window-header-item align-center">
            <span
              className="icon-fullscreen"
              onClick={() => toggleFullScreen(true)}
              title="Fullscreen"
            >
              <ImEnlarge2 />
            </span>
          </div>
          <div className="game-window-header-item align-center">
            <span
              className="icon-new-window"
              onClick={launchInNewTab}
              title="Open In New Window"
            >
              <ImNewTab />
            </span>
          </div>
        </div>

        {iframeLoaded == false && (
          <div
            id="game-window-loading"
            className="game-window-iframe-wrapper game-window-iframe-border"
          >
            <DivLoading />
          </div>
        )}

        <div
          id="game-window-iframe"
          className="game-window-iframe-wrapper game-window-iframe-border d-none"
        >
          <iframe
            allow="camera;microphone;fullscreen *"
            src={url}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GameModal;
