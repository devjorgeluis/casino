import { useState } from "react";

const NavLinkHeader = (props) => {
  let navLinkClass = "nav-link-wrapper";
  if (props.active == true) navLinkClass += " active";

  return (
    <a className={navLinkClass} href="#" onClick={props.onClick}>
      {/* <img className="main-nav-img" src={props.icon} alt="casino" /> */}
      <span className="text">{props.title}</span>
    </a>
  );
};

export default NavLinkHeader;
