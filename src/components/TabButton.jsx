import { useState } from "react";

const TabButton = (props) => {
  let customClass = "tab";
  if (props.active == true) customClass += " active";
  return (
    <div
      className={customClass}
      href="javascript:void(0)"
      onClick={props.onClick}
    >
      <span className="text">{props.title}</span>
    </div>
  );
};

export default TabButton;
