import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { useToast } from "../../../context/useToastProvider";
import "./index.scss";

const toastRoot = document.querySelector("#toast-root");

export default function BaseToast() {
  const { allToast, deleteToast } = useToast();
  const toastPortal = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    toastRoot.appendChild(toastPortal);
  }, [toastPortal]);

  return createPortal(
    <div className="base-toast-wrapper">
      {allToast?.map?.((toastDetails) => (
        <div className="base-toast fade-right">
          <div className="base-toast__message">
            {toastDetails?.title ? (
              <p className="base-toast__title">{toastDetails?.title}</p>
            ) : null}
            {toastDetails?.description ? (
              <p className="base-toast__description">
                {toastDetails?.description}
              </p>
            ) : null}
          </div>

          <div className="base-toast__actions">
            {Array.isArray(toastDetails?.actions) && (
              <>
                {toastDetails?.actions?.map?.((action) => (
                  <div>
                    <button
                      onClick={() => {
                        action?.onClick?.();
                        deleteToast(toastDetails);
                      }}
                    >
                      {action?.label}
                    </button>
                  </div>
                ))}
                <div>
                  <button onClick={() => deleteToast(toastDetails)}>
                    Dismiss
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>,
    toastPortal
  );
}
