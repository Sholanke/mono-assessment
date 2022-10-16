import React from "react";
import "./index.scss";

export default function BaseModal({
  children,
  show,
  close,
  variant = "center",
}) {
  return (
    <>
      {show ? (
        <>
          <div
            className="base-modal-overlay"
            data-variant={variant}
            onClick={close}
          ></div>
          <div className="base-modal" data-variant={variant}>
            {children}
          </div>
        </>
      ) : null}
    </>
  );
}
