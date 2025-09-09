const CategoryButton = (props) => {
  let customClass = "slots-provider-filter-list-desktop__item";
  if (props.active == true) {
    customClass += " slots-provider-filter-list-desktop__item_active";
  }

  return (
    <div className={customClass} onClick={props.onClick}>
      {
        props.icon && props.icon !== "" &&
        <span className="provider-filter-live-games-desktop__item-icon">
          <span className="SVGInline SVG-component__content">
            <img src={props.icon} alt={props.title} />
          </span>
        </span>
      }
      <span className="provider-filter-live-games-desktop__item-name">{props.title}</span>
    </div>
  );
};

export default CategoryButton;
