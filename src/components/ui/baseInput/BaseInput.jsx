import React from "react";
import "./index.scss";

export default function BaseInput({ Svg, className = "", ...props }) {
  return (
    <label className={`base-input ${className}`}>
      {Svg ? <span className="base-input__icon">{Svg}</span> : null}
      <input className="base-input__text-space" {...props} />
    </label>
  );
}
