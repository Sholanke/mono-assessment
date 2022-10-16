import React from "react";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import SvgSuccess from "../../../ui/icons/SvgSuccess";
import { BANK_LINKAGE_STATUS } from "../constants/gateway";

export default function BankAccountLinkageStatus({
  activeInstitution,
  bankLinkageStatus = BANK_LINKAGE_STATUS.PENDING,
  closeGatewayModal,
  institutionThemeStyles,
}) {
  const mapStatusToDetails = {
    [BANK_LINKAGE_STATUS.PENDING]: {
      title: "Pending!",
      Icon: () => "⌛",
      description: ` We will notify you when your financial account with ${activeInstitution?.name} is successfully linked to barter.`,
    },
    [BANK_LINKAGE_STATUS.SUCCESS]: {
      title: "Successful! 🎉",
      Icon: SvgSuccess,
      description: ` Your financial account with ${activeInstitution?.name} was successfully linked to barter.`,
    },
    [BANK_LINKAGE_STATUS.FAILED]: {
      title: "Failed!",
      Icon: () => "🚫",
      description: `Failed to link your financial account with ${activeInstitution?.name} to barter.`,
    },
  };

  const activeStatusDetails = mapStatusToDetails[bankLinkageStatus];

  return (
    <div className="gateway-linkage-status " style={institutionThemeStyles}>
      <BaseModalHeader onClose={closeGatewayModal} />

      <div className="fade-up">
        {activeStatusDetails.Icon ? (
          <span className="gateway-linkage-status__icon">
            <activeStatusDetails.Icon />
          </span>
        ) : null}
        <h4>{activeStatusDetails?.title}</h4>
        <p>{activeStatusDetails?.description}</p>

        <button className="base-button full" onClick={closeGatewayModal}>
          Continue
        </button>
      </div>
    </div>
  );
}
