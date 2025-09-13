import { NavLink } from "react-router-dom";

const NavLinkHeader = (props) => {
  return (
    <NavLink
      to={props.pageCode === "home" ? "/" : `/${props.pageCode}`}
      className={({ isActive }) => 
        `header-main-menu-desktop__item ${isActive ? "header-main-menu-desktop__item_active" : ""}`
      }
      onClick={props.onClick}
    >
      <div className="header-main-menu-desktop__item-content">
        {props.icon && <img className="main-nav-img" src={props.icon} alt={props.title} />}
        <span className="header-main-menu-desktop__item-text">{props.title}</span>
      </div>
    </NavLink>
  );
};

export default NavLinkHeader;