import ImgBonusProgramGift from "/src/assets/img/bonus-program-gift.webp";
import ImgBonusProgramDevices from "/src/assets/img/bonus-program-devices.webp";

const BonusProgram = ({ isMobile = false }) => {
    return (
        <a className={isMobile ? "bonus-program-button-mobile" : "bonus-program-button-desktop"} href="/profile">
            <div className={isMobile ? "bonus-program-button-mobile__gift-wrapper" : "bonus-program-button-desktop__gift-wrapper"}>
                <img
                    className={isMobile ? "bonus-program-button-mobile__gift" : "bonus-program-button-desktop__gift"}
                    src={ImgBonusProgramGift}
                    alt="Gift"
                />
                <img
                    className={isMobile ? "bonus-program-button-mobile__gift bonus-program-button-mobile__gift_type_blur" : "bonus-program-button-desktop__gift bonus-program-button-desktop__gift_type_blur"}
                    src={ImgBonusProgramGift}
                    alt="Gift"
                />
            </div>
            <div className={isMobile ? "bonus-program-button-mobile__text" : "bonus-program-button-desktop__text"}>
                Programa de
                <div className={isMobile ? "bonus-program-button-mobile__text-accent-wrapper" : "bonus-program-button-desktop__text-accent-wrapper"}>
                    <div className={isMobile ? "bonus-program-button-mobile__text-accent" : "bonus-program-button-desktop__text-accent"}>bonos</div>
                    <div className={isMobile ? "bonus-program-button-mobile__text-accent bonus-program-button-mobile__text-accent_type_blur" : "bonus-program-button-desktop__text-accent bonus-program-button-desktop__text-accent_type_blur"}>
                        bonos
                    </div>
                </div>
            </div>
            <img
                className={isMobile ? "bonus-program-button-mobile__devices" : "bonus-program-button-desktop__devices"}
                src={ImgBonusProgramDevices}
                alt="bonos"
            />
        </a>
    );
};

export default BonusProgram;