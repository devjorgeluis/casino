import { useState, useEffect } from "react";
import IconSuccess from "/src/assets/svg/success.svg";
import IconError from "/src/assets/svg/error.svg";

const CustomAlert = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!message && Array.isArray(message) && message[1] !== "");

  useEffect(() => {
    setIsVisible(!!message && Array.isArray(message) && message[1] !== "");
  }, [message]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose();
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div id="notify-root">
      {message && Array.isArray(message) && message[1] !== "" && (
        <div
          className={`notification ${
            message[0] === "success" ? "notification_type_success" : "notification_type_error"
          }`}
        >
          <div className="notification__wrapper">
            <span className="notification__text">{message[1]}</span>
            <div className="notification__left">
              <span
                className="SVGInline notification__cross"
                onClick={handleClose}
                role="button"
                aria-label="Close alert"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={message[0] === "success" ? IconSuccess : IconError}
                  className="SVGInline-svg notification__cross-svg"
                  alt="Close"
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAlert;