import IconSuccess from "/src/assets/svg/success.svg";
import IconError from "/src/assets/svg/error.svg";

const CustomAlert = (props) => {
  return (
    <div id="notify-root">
      {props.message && Array.isArray(props.message) && props.message[1] !== "" && (
        <div
          className={`notification ${props.message[0] === "success" ? "notification_type_success" : "notification_type_error"}`}
        >
          <div className="notification__wrapper">
            <span className="notification__text">{props.message[1]}</span>
            <div className="notification__left">
              <span className="SVGInline notification__cross">
                <img
                  src={props.message[0] === "success" ? IconSuccess : IconError}
                  className="SVGInline-svg notification__cross-svg"
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