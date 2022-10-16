import React from "react";
import "./index.scss";
import SvgClose from "../icons/SvgClose";
import SvgLeft from "../icons/SvgLeft";

export default function BaseModalHeader({ onClose, onBack, children, title }) {
  return (
    <div className="base-modal-header">
      {onBack ? (
        <button className="base-button--clear" onClick={onBack}>
          <SvgLeft />
        </button>
      ) : (
        <span data-back></span>
      )}

      {title ? <p className="base-modal-header__title">{title}</p> : null}
      {children}

      {onClose ? (
        <button onClick={onClose} className="base-button--clear">
          <SvgClose />
        </button>
      ) : null}
    </div>
  );
}
