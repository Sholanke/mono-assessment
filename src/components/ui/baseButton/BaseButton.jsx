import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function BaseButton({ children, variant, loading, ...props }) {
  return (
    <button
      className={`base-button${variant ? `--${variant}` : ""} full`}
      {...props}
    >
      {children}
      {loading ? (
        <span className="base-button__icon">
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration=".4"
            width="25"
            visible={true}
          />
        </span>
      ) : null}
    </button>
  );
}
