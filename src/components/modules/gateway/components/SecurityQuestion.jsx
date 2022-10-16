import React from "react";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import { GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import { generateHeaderStyles } from "../utils/gateway";
import GatewayDynamicForm from "./GatewayDynamicForm";

export default function SecurityQuestion({
  activeInstitution,
  institutionThemeStyles,
  goToScreen,
  closeGatewayModal,
  loginResponse,
  handleSecurityFormFieldChange,
  handleSecurityFormSubmit,
  securityFormData,
  validatingSecurityQuestion,
}) {
  const formTitle = loginResponse?.data?.title;
  const formConfig = loginResponse?.data?.form;

  return (
    <div className="gateway-auth" style={institutionThemeStyles}>
      <div
        className="gateway-auth__header"
        style={generateHeaderStyles(validatingSecurityQuestion)}
      >
        <BaseModalHeader
          onBack={() => goToScreen(GATEWAY_SCREEN_KEYS.LOG_IN)}
          onClose={closeGatewayModal}
        >
          <img
            className="gateway-auth__header__icon"
            alt="financial institution icon"
            src={activeInstitution?.icon}
          />
        </BaseModalHeader>
        <p className="gateway-auth__header__title fade-right">{formTitle}</p>
      </div>

      <div className="gateway-auth__form fade-right">
        <GatewayDynamicForm
          {...{
            formConfig,
            institutionThemeStyles,
            handleSubmit: handleSecurityFormSubmit,
            handleFormFieldChange: handleSecurityFormFieldChange,
            formData: securityFormData,
            loading: validatingSecurityQuestion,
          }}
        />
      </div>
    </div>
  );
}
