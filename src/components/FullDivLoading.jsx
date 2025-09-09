import { useContext, useState, useEffect } from "react";


const FullDivLoading = (props) => {

  let styleContainer = { 
    width: "100vw", 
    height: "100vh", 
    alignContent: "center",
    position: "fixed",
    zIndex: 9,
    backgroundColor: "#000000cc"
  };

  useEffect(() => {
      if (props.show == true) {
        document
          .getElementById("full-div-loading").classList.remove("d-none");
      } else {
        document
          .getElementById("full-div-loading").classList.add("d-none");
      }
    }, [props.show]);

  return (
    <div id="full-div-loading" style={styleContainer} className="d-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
            margin: "auto", 
            display: "block", 
            shapeRendering: "auto", 
            animationPlayState: "running",
            animationDelay: "0s"
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="14"
          strokeWidth="5"
          stroke="#6a6a6a"
          strokeDasharray="21.991148575128552 21.991148575128552"
          fill="none"
          strokeLinecap="round"
          style={{
            animationPlayState: "running",
            animationDelay: "0s"
          }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            style={{
                animationPlayState: "running",
                animationDelay: "0s"
            }}
          />
        </circle>
      </svg>
    </div>
  );
};

export default FullDivLoading;
