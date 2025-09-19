import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";
import { callApi } from "../utils/Utils";
import CustomAlert from "../components/CustomAlert";
import DivLoading from "../components/DivLoading";
import "animate.css";

const Sports = () => {
    const pageTitle = "Sports";
    const { contextData } = useContext(AppContext);
    const [sportsEmbedUrl, setSportsEmbedUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [messageCustomAlert, setMessageCustomAlert] = useState(["", ""]);
    const location = useLocation();

    useEffect(() => {
        loadSportsPage();
    }, [location.pathname]);

    const loadSportsPage = () => {
        setIsLoading(true);
        callApi(contextData, "GET", "/get-page?page=sports", callbackGetPage, null);
    };

    const callbackGetPage = (result) => {        
        if (result.status === 500 || result.status === 422) {
            setMessageCustomAlert(["error", result.message]);
        } else {
            setSportsEmbedUrl(result.data.url_embed);
            setIsLoading(false);
        }
    };
    const handleAlertClose = () => {
        setMessageCustomAlert(["", ""]);
    };

    return (
        <>
            <CustomAlert message={messageCustomAlert} onClose={handleAlertClose} />

            <div className="app__main">
                {isLoading ? (
                    <div className="app__main-content">
                        <DivLoading />
                    </div>
                ) : sportsEmbedUrl ? (
                    <div className="app__main-content">
                        <div className="digitain-sport-desktop">
                            <div id="sport_div_iframe">
                                <iframe
                                    src={sportsEmbedUrl}
                                    title="Sportsbook"
                                    className="sports-iframe"
                                    allowFullScreen
                                    loading="lazy"
                                    onError={(e) => {
                                        setMessageCustomAlert(["error", "No se pudo cargar el sportsbook. Intente recargar la página."]);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="sports-layout-desktop__content">
                        <div className="sports-error-container">
                            <div className="sports-error-message">
                                <p>No se pudo cargar la página de deportes.</p>
                                <button
                                    className="button-desktop button-desktop_color_default"
                                    onClick={loadSportsPage}
                                >
                                    Intentar de nuevo
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sports;