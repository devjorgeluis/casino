import { useState } from "react";
import IconPromote from "/src/assets/svg/promote.svg";

const Promocode = ({ isMobile = false }) => {
    const [promocode, setPromocode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add API call or logic to handle promocode submission
        console.log("Promocode submitted:", promocode);
    };

    return (
        <div className={isMobile ? "profile-menu-mobile__promocode" : "promocode-profile-desktop"}>
            <form className={isMobile ? "profile-promocode-mobile" : "promocode-profile-desktop__info"} onSubmit={handleSubmit}>
                <div className={isMobile ? "profile-promocode-mobile__header" : "promocode-profile-desktop__header"}>
                    <span className={isMobile ? "SVGInline profile-promocode-mobile__icon" : "promocode-profile-desktop__header-icon"}>
                        <img
                            className={isMobile ? "SVGInline-svg profile-promocode-mobile__icon-svg" : "SVGInline-svg SVG-component__content-svg"}
                            src={IconPromote}
                            alt="Promote icon"
                        />
                    </span>
                    <div className={isMobile ? "profile-promocode-mobile__text" : "promocode-profile-desktop__header-info"}>
                        <h2 className={isMobile ? "profile-promocode-mobile__title" : "promocode-profile-desktop__header-info-title"}>
                            Aquí puedes aplicar un código promocional
                        </h2>
                        <span className={isMobile ? "profile-promocode-mobile__description" : "promocode-profile-desktop__header-info-subtitle"}>
                            Todos los códigos promocionales se pueden encontrar en las redes sociales.
                        </span>
                    </div>
                </div>
                <div className={isMobile ? "profile-promocode-mobile__field" : "promocode-profile-desktop__input-wrapper"}>
                    <div className={isMobile ? "w-100" : "promocode-profile-desktop__input"}>
                        <div className={isMobile ? "" : "input-desktop"}>
                            <input
                                className={isMobile ? "profile-promocode-mobile__input" : "input-desktop__native input-desktop__native_color_transparent input-desktop__native_type_text"}
                                type="text"
                                placeholder="Código promocional"
                                value={promocode}
                                onChange={(e) => setPromocode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={isMobile ? "profile-promocode-mobile__button" : "promocode-profile-desktop__button"}>
                        <button
                            type="submit"
                            className={isMobile ? "button-mobile button-mobile_color_default" : "button-desktop button-desktop_color_default"}
                            disabled={!promocode}
                        >
                            Activar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Promocode;