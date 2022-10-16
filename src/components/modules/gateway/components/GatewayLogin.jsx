import React, { useMemo } from "react";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import { GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import { generateInstitutionThemeStyles } from "../utils/gateway";
import GatewayDynamicForm from "./GatewayDynamicForm";

export default function GatewayLogin({
  goToScreen,
  activeAuthMethod,
  activeInstitution,
  handleSubmitAuthForm,
  closeGatewayModal,
  authenticationFormData,
  handleFormFieldChange,
  authenticating,
}) {
  const institutionThemeStyles = useMemo(() => {
    return generateInstitutionThemeStyles(activeInstitution?.primaryColor);
  }, [activeInstitution?.primaryColor]);

  const authMethodFormConfig = activeAuthMethod?.ui?.form;

  return activeInstitution && activeAuthMethod ? (
    <div className="gateway-auth" style={institutionThemeStyles}>
      <div className="gateway-auth__header">
        <BaseModalHeader
          onBack={() => goToScreen(GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION)}
          onClose={closeGatewayModal}
        >
          <img
            className="gateway-auth__header__icon"
            alt="financial institution icon"
            src={activeInstitution?.icon}
          />
        </BaseModalHeader>
        <p className="gateway-auth__header__title fade-right">Login</p>
      </div>

      <div className="gateway-auth__form fade-right">
        <GatewayDynamicForm
          {...{ activeInstitution, handleFormFieldChange }}
          loading={authenticating}
          formData={authenticationFormData}
          handleSubmit={handleSubmitAuthForm}
          formConfig={authMethodFormConfig}
        />
      </div>
    </div>
  ) : null;
}
