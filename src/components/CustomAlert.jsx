import { useContext, useState, useEffect } from "react";
import IconSuccess from "/src/assets/svg/success.svg";
import IconError from "/src/assets/svg/error.svg";

const CustomAlert = (props) => {
  let styleContainer = {
    display: "inline",
    minWidth: "200px",
    minHeight: "50px",
    right: "1em",
    top: "1em",
    position: "absolute",
    zIndex: 8,
    backgroundColor: "#000000cc",
    padding: "1em",
    animationFillMode: "both" // importante para que cuando la animacion termina 
                              // siga en su ultimo estado y no reaparezca el objeto
  };

  let customAlertIcon = {
    width: "20px",
    height: "20px",
    marginRight: "5px"
  }

  let AlertTimeout = "";

  useEffect(() => {
    if (props.message != "") {
      document.getElementById("custom-alert").classList.remove("d-none");
      document.getElementById("custom-alert").classList.remove("animate__bounceOut");
      document.getElementById("custom-alert").classList.add("animate__bounceIn");

      clearTimeout(AlertTimeout),
        (AlertTimeout = setTimeout(function () {
          document.getElementById("custom-alert").classList.remove("animate__bounceIn");
          document.getElementById("custom-alert").classList.add("animate__bounceOut");
        }, 3000));
        // }, 9999999));
    }
  }, [props.message]);

  return (
    <div
      id="custom-alert"
      style={styleContainer}
      className="card d-none"
    >
      {props.message[0] == "error" && <img style={customAlertIcon} src={IconError} alt=""/>}
      {props.message[0] == "success" && <img style={customAlertIcon} src={IconSuccess} alt=""/>}
      {props.message[1]}
    </div>
  );
};

export default CustomAlert;
