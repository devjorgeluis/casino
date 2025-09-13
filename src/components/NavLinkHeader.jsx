import { useState } from "react";

const NavLinkHeader = (props) => {
  let navLinkClass = "header-main-menu-desktop__item";
  if (props.active == true) navLinkClass += " header-main-menu-desktop__item_active";

  return (
    <a className={navLinkClass} href="#" onClick={props.onClick}>
      <div className="header-main-menu-desktop__item-content">
        {
          props.icon && <img className="main-nav-img" src={props.icon} alt={props.title} />
        }
        <span className="header-main-menu-desktop__item-text">{props.title}</span>
      </div>
    </a>
  );
};

export default NavLinkHeader;
