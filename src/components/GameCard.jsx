// import LazyLoad from "react-lazyload";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconPlay from "/src/assets/img/play.svg";
import IconFavorite from "/src/assets/img/favorite.svg";

const GameCard = (props) => {
  const imgRef = useRef(null);

  const imageLoaded = () => {
    // console.log(imgRef.current);
    // imgRef.current?.classList.remove("d-none");
    document
      .getElementById("game-card-img-" + props.id)
      .classList.add("fade-in");

    document
      .getElementById("game-card-img-" + props.id)
      .classList.remove("visibility-hidden");
  };

  const imageError = () => {
    document
      .getElementById("game-card-img-" + props.id)
      .setAttribute("src", "/src/assets/img/no-image.jpg");
  };

  return (
    <div className="provider-section-desktop__slot-icon">
      <div className="slots-icon-desktop">
        <a className="slots-icon-desktop__game-icon" onClick={props.onClick}>
          <div className="slots-icon-desktop__img slots-icon-desktop__img_loaded">
            <div className="loadable-image loadable-image_loaded">
              <div className="loadable-image__loader">
                <img className="loadable-image__image loadable-image__image_isLoaded" src={props.imageSrc} alt={props.title} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="slots-icon-desktop__modal">
            <div className="slots-icon-desktop__modal-top">
              <span className="slots-icon-desktop__play-icon">
                <span className="SVGInline SVG-component__content">
                  <img src={IconPlay} />
                </span>
              </span>
              <span className="slots-icon-desktop__game-name">{props.title}</span>
            </div>
            <span className="slots-icon-desktop__favorite">
              <span className="SVGInline SVG-component__content">
                <img src={IconFavorite} />
              </span>
            </span>
          </div>
        </a>
        <div className="slots-icon-desktop__name">{props.title}</div>
      </div>
    </div>
  );
};

export default GameCard;
