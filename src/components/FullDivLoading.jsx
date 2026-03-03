import { useEffect } from "react";

const FullDivLoading = (props) => {
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
    <div id="full-div-loading" className="d-none">
       <div className="App">
        <div className="flex items-center justify-center h-screen">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default FullDivLoading;
