const ItemHistory = (props) => {
  // let customClass = "tab";
  // if (props.active == true) customClass += " active";
  return (
    <>
      <div className="auto-height-card">
        <div>
          <div className="history-game-title-container">
            <img
              className="icon-category-2"
              src={props.item?.apigames_game.image_url}
            />
            {props.item?.apigames_game.name}
          </div>

          {/* <div className="div-inline">
            <div class="d-flex align-items-center">
              <img
                class="icon-category-2"
                src={props.item?.apigames_game.image_url}
                style={{ maxWidth: "45px" }}
              />{" "}
            </div>
            <div class="status-block">{props.item?.apigames_game.name}</div>
          </div> */}

          {/* <a className="button button-outline with-icon print">
            <div className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                ></path>
              </svg>
            </div>
            Imprimir
          </a> */}
        </div>

        <div className="div-inline status-block outcome2">
          {props.item?.apigames_game.type}
        </div>
        <div className="game-title with-margin-right">
          <div className="div-inline"></div>
        </div>

        <div className="game-title bold">
          <span className="div-inline">Hora:</span>
          <span className="odd-type-title">
            {props.item?.created_at_formatted}
          </span>
        </div>
        <hr />
        <div className="game-title">
          <div className="div-inline">ID TRX</div>
          <div className="div-inline">{props.item?.txn_id}</div>
        </div>
        <hr />

        <div className="game-title">
          <div className="div-inline">Monto:</div>
          <div className="div-inline bold">{props.item?.value}</div>
        </div>

        <div className="game-title">
          <div className="div-inline">Saldo:</div>
          <div className="div-inline bold">{props.item?.value_after}</div>
        </div>
      </div>
    </>
  );
};

export default ItemHistory;
