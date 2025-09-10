import { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { callApi, capitalize } from "../utils/Utils";
import FullDivLoading from "../components/FullDivLoading";
import CustomAlert from "../components/CustomAlert";
import ImgLogo from "/src/assets/img/logo-landscape.png";
import imgShowPassword from "/src/assets/img/show-password.png";
import imgHidePassword from "/src/assets/img/hide-password.png";

// import ImgLogoLandscape from "/src/assets/img/logo-landscape.png";

const Login = () => {
  const { contextData, setContextData } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showFullDivLoading, setShowFullDivLoading] = useState(false);
  const [messageCustomAlert, setMessageCustomAlert] = useState([]);

  // Carga/Importación dinámica de componentes
  const [imgLogoLandscape, setImgLogoLandscape] = useState();

  const handleSubmit = (event) => {
    setShowFullDivLoading(true);

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      let body = {
        username: username,
        password: password,
      };
      callApi(
        contextData,
        "POST",
        "/login/",
        callbackSubmitLogin,
        JSON.stringify(body)
      );
    }
  };

  const callbackSubmitLogin = (result) => {
    if (result.status == "success") {
      setTimeout(function () {
        localStorage.setItem("session", JSON.stringify(result));
        window.location.reload();
      }, 1000);
    } else {
      setShowFullDivLoading(false);
      setMessageCustomAlert(["error", "Credenciales no válidas"]);
    }
  };

  useEffect(() => {
    if(showPassword) document.getElementById("password").setAttribute('type','text');
    if(!showPassword) document.getElementById("password").setAttribute('type','password');
  }, [showPassword]);

  useEffect(() => {
    let rootNode = document.getElementById("root").classList.remove("d-none");
  }, []);

  return (
    <div
      className="login"
      style={{
        backgroundImage: "url(img/bg.jpg)",
      }}
    >
      <FullDivLoading show={showFullDivLoading} />
      <CustomAlert message={messageCustomAlert} />

      <div className="container">
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="col-md-5">
            <div className="logo">
              <a className="navbar-brand">
                <img
                  title="Casino"
                  alt="Casino"
                  src={ImgLogo}
                  // src={imgLogoLandscape}
                  className="max-h-full"
                  style={{ width: "100%", maxWidth: "240px" }}
                />
              </a>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="languages">
                  <a>
                    <img
                      src="https://assets.a7a.info/media/icons/flags/en.png"
                      alt="en"
                    />
                  </a>
                  <a>
                    <img
                      src="https://assets.a7a.info/media/icons/flags/es.png"
                      alt="es"
                    />
                  </a>
                </div>
                <form method="POST" onSubmit={handleSubmit}>
                  <input type="hidden" name="_token" value="" />
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label
                        htmlFor="email"
                        className="col-form-label text-md-right"
                      >
                        Usuario
                      </label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required="required"
                        autoComplete="email"
                        autoFocus="autoFocus"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label
                        htmlFor="password"
                        className="col-form-label text-md-right"
                      >
                        Contraseña
                      </label>
                      <div className="position-relative">
                        <input
                          id="password"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required="required"
                          autoComplete="current-password"
                          className="form-control "
                          style={{ paddingRight: "30px" }}
                        />
                        {showPassword == false && 
                          <img
                            src={imgShowPassword}
                            id="togglePassword"
                            alt="Contraseña"
                            className="toggle-password"
                            onClick={() => setShowPassword(true)}
                          />
                        }
                        {showPassword == true && 
                          <img
                          src={imgHidePassword}
                            id="togglePassword"
                            alt="Contraseña"
                            className="toggle-password"
                            onClick={() => setShowPassword(false)}
                          />
                        }
                        
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              name="remember"
                              id="remember"
                              className="form-check-input"
                            />
                            <label
                              htmlFor="remember"
                              className="form-check-label"
                            >
                              Recuérdame
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <div className="col-md-12">
                      <div className="user-login-button-wrapper">
                        <button type="submit" className="btn btn-primary">
                          Acceso
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
