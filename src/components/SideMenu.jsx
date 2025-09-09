import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { callApi, capitalize } from "../utils/Utils";
import TabButton from "./TabButton";
import ItemHistory from "./ItemHistory";
import ItemTransaction from "./ItemTransaction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DivLoading from "./DivLoading";

let pageCurrent = 0;
let selectedTab = 0;

const SideMenu = (props) => {
  const { contextData, setContextData } = useContext(AppContext);
  // const [selectedTab, setSelectedTab] = useState(0);
  // const [pageCurrent, setPageCurrent] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [itemsHistory, setItemsHistory] = useState([]);
  const [itemsTransactions, setItemsTransactions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const logout = () => {
    callApi(contextData, "POST", "/logout", callbackLogout, null);
  };

  const callbackLogout = (result) => {
    // console.log(result);
    setTimeout(function () {
      localStorage.removeItem("session");
      window.location.reload();
    }, 200);
  };

  const showChangePassword = () => {
    withReactContent(Swal).fire({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      title: <i>Input something</i>,
      input: "text",
      inputValue,
      preConfirm: () => {
        setInputValue(Swal.getInput()?.value || "");
      },
    });
  };

  const close = () => {
    // document.getElementById("side-menu").classList.remove("visible");
    props.closeMenu();
    selectedTab = 0;
  };

  const selectTab = (index) => {
    // setPageCurrent(0);
    pageCurrent = 0;
    // setSelectedTab(index);
    selectedTab = index;
    fetchTransactionData();
  };

  const callbackHistory = (result) => {
    setItemsHistory(result.data);
    // console.log("result.recordsTotal: " + result.recordsTotal)
    let pages = result.recordsTotal / pageSize;
    let pageTotal = Math.ceil(pages);
    // console.log("pageTotal: " + pages);
    setPageTotal(pageTotal);
    setLoading(false);
  };

  const callbackTransactions = (result) => {
    setItemsTransactions(result.data);
    // console.log("result.recordsTotal: " + result.recordsTotal)
    let pages = result.recordsTotal / pageSize;
    let pageTotal = Math.ceil(pages);
    // console.log("pageTotal: " + pageTotal);
    setPageTotal(pageTotal);
    setLoading(false);
  };

  const fetchTransactionData = () => {
    switch (selectedTab) {
      case 0:
        //historial (apuestas)
        setLoading(true);
        callApi(
          contextData,
          "GET",
          "/get-history?start=" +
            pageCurrent * pageSize +
            "&length=" +
            pageSize +
            "&type=sport",
          callbackHistory,
          null
        );
        break;
      case 1:
        //spins
        setLoading(true);
        callApi(
          contextData,
          "GET",
          "/get-history?start=" +
            pageCurrent * pageSize +
            "&length=" +
            pageSize +
            "&type=slot",
          callbackHistory,
          null
        );
        break;
      case 2:
        // transacciones
        setLoading(true);
        callApi(
          contextData,
          "GET",
          "/get-transactions?start=" +
            pageCurrent * pageSize +
            "&length=" +
            pageSize,
          callbackTransactions,
          null
        );
        break;
    }
  };

  const pagePrevious = () => {
    if (pageCurrent == 0) return;
    pageCurrent -= 1;
    fetchTransactionData();
  };

  const pageNext = () => {
    // console.log(
    //   "pageNext: (pageCurrent == pageTotal) = (" +
    //     pageCurrent +
    //     " == " +
    //     pageTotal +
    //     ")"
    // );
    if (pageCurrent == (pageTotal - 1)) return;
    pageCurrent += 1;
    fetchTransactionData();
  };

  useEffect(() => {
    // console.log("setSelectedTab");
    selectTab(1);
  }, []);

  // useEffect(() => {
  //   fetchTransactionData();
  // }, [selectedTab]);

  // useEffect(() => {
  //   fetchTransactionData();
  // }, [pageCurrent]);

  return (
    <div id="side-menu" className="burger-menu visible">
      <div className="burger-menu-card container">
        <div className="row">
          <div className="col col-4 p-0"></div>
          <div className="col col-4 p-0">
            <div className="column align-center">
              <h2>Cuenta</h2>
            </div>
          </div>
          <div className="col col-4 p-0">
            <div className="align-right">
              <span className="close-button" onClick={close}></span>
              <br />
              <a
                className="logout button button-outline"
                href="#"
                onClick={logout}
              >
                Salir
              </a>
            </div>
            <div className="align-right"></div>
          </div>
        </div>

        <ul className="settings-ul">
          <li>
            <span className="setting-title">Nombre: </span>
            <span className="user-name-email">
              {contextData.session.user.username}
            </span>
          </li>
          <li>
            <span className="setting-title">Usuario: </span>
            <span className="user-name-email">
              {contextData.session.user.username}
            </span>
          </li>
          <li>
            <span className="setting-title">Idioma</span>
            <span className="language-list">
              <a
                href="https://tincabet.net/p/changeLocale/en"
                style={{
                  backgroundImage:
                    "url(https://assets.a7a.info/media/icons/flags/en.png)",
                }}
                className="button button-outline"
              >
                English
              </a>
              <a
                href="https://tincabet.net/p/changeLocale/es"
                style={{
                  backgroundImage:
                    "url(https://assets.a7a.info/media/icons/flags/es.png)",
                }}
                className="button"
              >
                Español
              </a>
            </span>
          </li>
          {/* <li>
            <span className="setting-title">Contraseña</span>
            <a
              className="button deposit button-outline"
              onClick={showChangePassword}
            >
              Cambiar contraseña
            </a>
            <div>Your input: {inputValue}</div>
          </li> */}
        </ul>
        <div className="row user-history">
          <div className="col-12 col-md-4">
            <TabButton
              title="Apuestas"
              onClick={() => selectTab(0)}
              active={selectedTab == 0}
            ></TabButton>
          </div>
          <div className="col-12 col-md-4">
            <TabButton
              title="Spins"
              onClick={() => selectTab(1)}
              active={selectedTab == 1}
            ></TabButton>
          </div>
          <div className="col-12 col-md-4">
            <TabButton
              title="Transacciones"
              onClick={() => selectTab(2)}
              active={selectedTab == 2}
            ></TabButton>
          </div>
        </div>

        {loading && <DivLoading />}

        {!loading && selectedTab == 0 && (
          <div>
            <div className="row user-history-header">
              <div className="column align-center">
                <h3>Últimas Apuestas</h3>
              </div>
            </div>

            <div className="recent-bets">
              {itemsHistory.length > 0 && (
                <div>
                  {itemsHistory.map((item, index) => (
                    <ItemHistory key={index} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {(!loading && selectedTab) == 1 && (
          <div className="">
            <div className="row user-history-header">
              <div className="column align-center">
                <h3>Spins Recientes</h3>
              </div>
            </div>
            <div className="recent-spins">
              {/* <template>
                <div className="gray-loading auto-height-card" style={{height:"151px"}}></div>
                </template> */}
              {itemsHistory.length > 0 && (
                <div>
                  {itemsHistory.map((item, index) => (
                    <ItemHistory key={index} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {(!loading && selectedTab) == 2 && (
          <div>
            <div className="row user-history-header">
              <div className="column align-center">
                <h3>Transacciones Recientes</h3>
              </div>
            </div>
            <div className="recent-transactions">
              {/* ItemTransaction */}
              <div>
                {itemsTransactions.map((item, index) => (
                  <ItemTransaction key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* paginador */}
        <div className="row burger-menu-header pagination">
          <div className="column align-center">
            <a onClick={pagePrevious}>&lt;&lt;</a>
            &nbsp;&nbsp;&nbsp;
            <a onClick={pageNext}>&gt;&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
