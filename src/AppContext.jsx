import React, { createContext, useState } from "react";

// de esta forma se carga CSS de forma dinámica,
// luego desde cada página incrusto el CSS correspondiente a esa página
// por ejemplo: ver  useEffect(() => { en Home.jsx
import cssLogin from "/src/css/Login.css?raw";
import cssHome from "/src/css/Home.css?raw";
import cssD from "/src/css/D.css?raw";
import cssM from "/src/css/M.css?raw";
import cssG from "/src/css/Ganamos.css?raw";
import cssL from "/src/css/LiveCasino.css?raw";
import cssS from "/src/css/Slot.css?raw";
// import cssChangePassword from '/src/css/ChangePassword.css?raw';
import cssNormalize from "normalize.css?raw";

export const AppContext = createContext(null);

// este bloque de código se ejecuta antes de renderizar la página
// y contiene las variables globales de la aplicación (contextData)
const AppContextProvider = (props) => {
  let apiBaseUrl = import.meta.env.VITE_API_URL;
  let cdnUrl = import.meta.env.VITE_CDN_URL;
  let pageTitle = import.meta.env.VITE_PAGE_TITLE;
  let buildMode = import.meta.env.MODE;
  let session = null;
  if (
    localStorage.getItem("session") &&
    localStorage.getItem("session") !== "undefined"
  ) {
    session = JSON.parse(localStorage.getItem("session"));
  }

  let isMobile = navigator.userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
  );
  isMobile = (isMobile && (window.screen.width < 992));

  const [contextData, setContextData] = useState({
    apiBaseUrl: apiBaseUrl,
    cdnUrl: cdnUrl,
    buildMode: buildMode,
    session: session,
    isMobile: isMobile,
    pageTitle: pageTitle,
    css: {
      login: cssLogin,
      home: cssHome,
      M: cssM,
      D: cssD,
      G: cssG,
      L: cssL,
      S: cssS,
      normalize: cssNormalize,
      // "changePassword": cssChangePassword
    },
  });
  
  return (
    <AppContext.Provider value={{ contextData, setContextData }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
