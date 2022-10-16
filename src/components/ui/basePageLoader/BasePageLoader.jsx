import React from "react";
import { Oval } from "react-loader-spinner";
import "./index.scss";

export default function BasePageLoader({ title }) {
  return (
    <div className="base-page-loader">
      <Oval
        height={60}
        width={60}
        color="#fff"
        visible={true}
        className="base-page-loader__spinner"
        ariaLabel="oval-loading"
        secondaryColor="#ffffff30"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      {title ? <p>{title}</p> : null}
    </div>
  );
}
