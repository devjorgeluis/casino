import { useState, useEffect, useMemo, useCallback } from "react";
import IconSearch from "/src/assets/svg/search.svg";
import IconChevronRight from "/src/assets/svg/chevron-right.svg";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import { ultim8SportRulesData } from '/src/assets/js/ultim8_sport_rules_es.js';

const Ultim8SportRules = () => {
    const [activeSport, setActiveSport] = useState("definiciones");
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [isSelectRule, setIsSelectRule] = useState(false);

    const checkIsMobile = useCallback(() => window.innerWidth <= 767, []);

    useEffect(() => {
        setIsMobile(checkIsMobile());

        const handleResize = () => {
            setIsMobile(checkIsMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [checkIsMobile]);

    const filteredSports = useMemo(() => {
        if (!searchTerm) return ultim8SportRulesData;
        
        const term = searchTerm.toLowerCase();
        return ultim8SportRulesData.filter(sport =>
            sport.title.toLowerCase().includes(term) ||
            sport.id.toLowerCase().includes(term)
        );
    }, [searchTerm]);

    const currentSport = useMemo(() => 
        ultim8SportRulesData.find(sport => sport.id === activeSport),
        [activeSport]
    );

    const handleSportClick = useCallback((sportId) => {
        setActiveSport(sportId);
        if (isMobile) {
            setIsSelectRule(true);
        }
    }, [isMobile]);

    const handleSearch = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleBack = useCallback(() => {
        if (isMobile && isSelectRule) {
            setIsSelectRule(false);
        } else {
            window.history.back();
        }
    }, [isMobile, isSelectRule]);

    const renderMobileBackButton = (onClick, content) => (
        <button className="back-block">
            <span className="SVGInline back-block__arrow" onClick={onClick}>
                <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="back" />
            </span>
            <div className="back-block__content">{content}</div>
        </button>
    );

    const renderSearchBar = () => (
        <div className="sport-rules-layout__search">
            <div className="search-filter-slots-desktop search-filter-slots-desktop_type_sport-rules">
                <div className="search-filter-slots-desktop__input-wrapper">
                    <span className="SVGInline search-filter-slots-desktop__search-icon">
                        <img className="search-filter-slots-desktop__search-icon-svg" src={IconSearch} alt="search" />
                    </span>
                    <div className="search-filter-slots-desktop__input">
                        <div className="input-desktop">
                            <input
                                className="input-desktop__native input-desktop__native_color_default input-desktop__native_type_search-slots"
                                type="search"
                                name="slots-search"
                                placeholder="Búsqueda"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSportsList = () => (
        <div className="sport-rules-layout__sports">
            {filteredSports.map((sport) => (
                <a
                    key={sport.id}
                    className={`sport-rules-layout__sports-item ${activeSport === sport.id ? 'sport-rules-layout__sports-item_isActive' : ''}`}
                    href={`#${sport.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSportClick(sport.id);
                    }}
                >
                    {sport.title}
                    <span className="sport-rules-layout__sports-svg">
                        <span className="SVGInline SVG-component__content">
                            <img className="SVGInline-svg SVG-component__content-svg" src={IconChevronRight} alt="arrow right" />
                        </span>
                    </span>
                </a>
            ))}
        </div>
    );

    const renderContentSection = () => (
        <div className="sport-rules-layout__content">
            <h3 className="sport-rules-layout__content-title">
                {currentSport?.title || 'Reglas deportivas ULTIM8'}
            </h3>
            <div className="sport-rules-layout__description">
                {currentSport?.description || 'Contenido no disponible.'}
            </div>
        </div>
    );

    return (
        <div className="sport-rules-layout sport-rules-layout_isSportPages">
            {isMobile && !isSelectRule && renderMobileBackButton(handleBack, "Reglas deportivas ULTIM8")}
            
            {!isSelectRule && (
                <div className="sport-rules-layout__menu">
                    {renderSearchBar()}
                    {renderSportsList()}
                </div>
            )}

            {isMobile && isSelectRule ? (
                <>
                    {renderMobileBackButton(() => setIsSelectRule(false), currentSport?.title || 'Reglas deportivas ULTIM8')}
                    {renderContentSection()}
                </>
            ) : !isMobile && renderContentSection()}
        </div>
    );
};

export default Ultim8SportRules;