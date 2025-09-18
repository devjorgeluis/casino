import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

// este bloque de código se ejecuta antes de renderizar la página
// y contiene las variables globales de la aplicación (contextData)
const AppContextProvider = (props) => {
  let apiBaseUrl = import.meta.env.VITE_API_URL;
  let serviceUrl = import.meta.env.VITE_SERVICE_URL;
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
    serviceUrl: serviceUrl,
    cdnUrl: cdnUrl,
    buildMode: buildMode,
    session: session,
    isMobile: isMobile,
    pageTitle: pageTitle,
  });
  
  return (
    <AppContext.Provider value={{ contextData, setContextData }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
