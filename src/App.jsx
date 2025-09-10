import { useState, useEffect, useContext, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./css/Casino.css";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "animate.css";
// import './css/Slideshow.css'
// tambien se puede importar con link
<link rel="stylesheet" src="./css/Slideshow.css"></link>;

function App() {
  const [config, setConfig] = useState({
    faviconURL: "/vite.svg",
    pageTitle: "Título",
  });

  const { contextData, setContextData } = useContext(AppContext);

  // // Custom PrivateRoute Component: Protects routes that require authentication
  // const PrivateRoute = ({ isAuthenticated, children }) => {
  //   const location = useLocation(); // Access the current location

  //   return isAuthenticated ? (
  //     children // If authenticated, render the protected content
  //   ) : (
  //     // Otherwise, redirect to the login page and save the current location
  //     <Navigate to="/" state={{ from: location }} replace />
  //   );
  // };

  useEffect(() => {
    // const favicon = document.querySelector("link[rel~='icon']");
    // console.log(favicon);
    // if (favicon) {
    //   // favicon.href =
    //   //   window.location.origin +
    //   //   "/src/assets/" +
    //   //   contextData.buildMode +
    //   //   "/img/favicon.png";
    // }

    // var IE = navigator.userAgent.indexOf("MSIE") != -1;
    // var fav = {
    //   change: function (iconURL) {
    //     if (arguments.length == 2) {
    //       document.title = optionalDocTitle;
    //     }
    //     this.addLink(iconURL, "icon");
    //     this.addLink(iconURL, "shortcut icon");

    //     // Google Chrome HACK - whenever an IFrame changes location
    //     // (even to about:blank), it updates the favicon for some reason
    //     // It doesn't work on Safari at all though :-(
    //     if (!IE) {
    //       // Disable the IE "click" sound
    //       if (!window.__IFrame) {
    //         window.__IFrame = document.createElement("iframe");
    //         var s = __IFrame.style;
    //         s.height = s.width = s.left = s.top = s.border = 0;
    //         s.position = "absolute";
    //         s.visibility = "hidden";
    //         document.body.appendChild(__IFrame);
    //       }
    //       __IFrame.src = "about:blank";
    //     }
    //   },

    //   addLink: function (iconURL, relValue) {
    //     var link = document.createElement("link");
    //     link.type = "image/x-icon";
    //     link.rel = relValue;
    //     link.href = iconURL;
    //     this.removeLinkIfExists(relValue);
    //     this.docHead.appendChild(link);
    //   },

    //   removeLinkIfExists: function (relValue) {
    //     var links = this.docHead.getElementsByTagName("link");
    //     for (var i = 0; i < links.length; i++) {
    //       var link = links[i];
    //       if (link.type == "image/x-icon" && link.rel == relValue) {
    //         this.docHead.removeChild(link);
    //         return;
    //       }
    //     }
    //   }, // Assuming only one match at most.

    //   docHead: document.getElementsByTagName("head")[0],
    // };

    // fav.addLink(
    //   window.location.origin +
    //     "/src/assets/" +
    //     contextData.buildMode +
    //     "/img/favicon.png",
    //   "icon"
    // );

    document.title = contextData.pageTitle;
    setConfig(config);
  }, []);

  // crea funcion para eliminar elementos del DOM
  Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
  };
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  };

  const component = <Home />;

  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {component}
        {/* <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={contextData.session}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router> */}
      </ErrorBoundary>

      {/* { contextData.session && <Home/> }
      { !contextData.session && <Login/> } */}
    </>
  );
}

export default App;
