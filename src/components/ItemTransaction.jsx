import { useState } from "react";

const ItemTransaction = (props) => {
  // let customClass = "tab";
  // if (props.active == true) customClass += " active";
  let type = props.item.type == "add" ? "Depósito" : "Retiro"
  return (
    <div className="auto-height-card">
      <div>
        <div className="div-inline status-block">{type}</div>
        <div className="div-inline"># {props.item.id}</div>
      </div>
      <div className="game-title">
        <div className="div-inline">Monto:</div>
        <div className="div-inline bold">{props.item.amount}</div>
      </div>
      <div className="game-title">
        <div className="div-inline">Saldo:</div>
        <div className="div-inline bold">$ {props.item.to_current_balance}</div>
        &gt;&nbsp;
        <div className="div-inline bold">$ {props.item.to_new_balance}</div>
      </div>
      <div className="game-title">
        <div className="div-inline">Tiempo de Transacción:</div>
        <div className="div-inline">{props.item.created_at_formatted}</div>
      </div>
    </div>
  );
};

export default ItemTransaction;
