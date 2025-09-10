import React, { useRef } from "react";
import IconSearch from "/src/assets/svg/search.svg";

const SearchInput = ({
    txtSearch,
    setTxtSearch,
    searchRef,
    search
}) => {
    return (
        <div className="slots-main-desktop__search-filter">
            <form className="search-filter-slots-desktop">
                <div className="search-filter-slots-desktop__input-wrapper">
                    <span className="SVGInline search-filter-slots-desktop__search-icon">
                        <img src={IconSearch} className="SVGInline-svg search-filter-slots-desktop__search-icon-svg" />
                    </span>
                    <div className="search-filter-slots-desktop__input">
                        <div className="input-desktop">
                            <input
                                ref={searchRef}
                                className="input-desktop__native input-desktop__native_color_default input-desktop__native_type_search-slots"
                                type="text"
                                name="slots-search"
                                placeholder="Búsqueda"
                                onChange={(event) => {
                                    setTxtSearch(event.target.value);
                                }}
                                onKeyUp={search}
                                value={txtSearch}
                            />
                        </div>
                    </div>
                </div>
                <div className="search-filter-slots-mobile__button">
                    <button type="submit" className="button-mobile button-mobile_color_default button-mobile_borderRadius_500">Búsqueda</button>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;