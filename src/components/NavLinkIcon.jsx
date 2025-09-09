const NavLinkIcon = (props) => {
  let customClass = "slots-layout-content-menu__item";
  if (props.active == true) {
    customClass += " slots-layout-content-menu__item_active";
  }

  return (
    <div className={customClass} onClick={props.onClick}>
      <span className="slots-layout-content-menu__item-icon">
        <img src={props.icon} alt={props.title} />
      </span>
      <span className="slots-layout-content-menu__item-text">{props.title}</span>
    </div>
  );
};

export default NavLinkIcon;
