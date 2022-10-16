import React from "react";
import { BaseButton } from "../baseButton";
import "./index.scss";

export default function BaseEmptyState({
  title,
  description,
  Icon,
  showRefreshButton,
}) {
  return (
    <div className="base-empty-state fade-up">
      <div className="base-empty-state__icon">{Icon ? <Icon /> : null}</div>

      <h4>{title}</h4>
      <p>{description}</p>

      {showRefreshButton ? (
        <BaseButton variant="light" onClick={() => window.location.reload()}>
          Refresh Page
        </BaseButton>
      ) : null}
    </div>
  );
}
