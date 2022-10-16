import React from "react";
import useModal from "../../../../hooks/useModal";
import { BaseModal } from "../../../ui/baseModal";
import { Gateway } from "../components/";
import "./index.scss";

export default function GatewayPage() {
  const [showGatewayModal, openGatewayModal, closeGatewayModal] = useModal({
    defaultValue: true,
  });

  return (
    <div className="gateway-page">
      <button
        className="base-button gateway-page__open-btn"
        onClick={openGatewayModal}
      >
        Link Account
      </button>

      <BaseModal show={showGatewayModal} close={closeGatewayModal}>
        <Gateway {...{ closeGatewayModal }} />
      </BaseModal>
    </div>
  );
}
