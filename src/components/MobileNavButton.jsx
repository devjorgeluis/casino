const MobileNavButton = (props) => {
  let customClass = "nav-link-wrapper";
  if (props.active == true) customClass += " active";
  return (
    <a className={customClass} onClick={props.onClick}>
      <img
        className="main-nav-img"
        src={props.icon}
        alt="casino"
      />
      <span className="text">{props.title}</span>
    </a>
  );
};

export default MobileNavButton;
