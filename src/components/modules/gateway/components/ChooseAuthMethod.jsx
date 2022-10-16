import React from "react";
import SvgRight from "../../../ui/icons/SvgRight";
import {
  GATEWAY_SCREEN_KEYS,
  MAP_AUTH_METHOD_TYPE_TO_ICON,
} from "../constants/gateway";

export default function ChooseAuthMethod({
  activeInstitution,
  setActiveAuthMethod,
  goToScreen,
}) {
  const authMethods = activeInstitution?.auth_methods;

  const handleSelectAuthMethod = (method) => {
    goToScreen(GATEWAY_SCREEN_KEYS.LOG_IN);
    setActiveAuthMethod(method);
  };

  return (
    <div className="select-institution__choose-auth-method fade-up">
      <img
        src={activeInstitution?.icon}
        className="select-institution__icon"
        alt="financial institution icon"
      />

      <h3>Choose log in method</h3>

      {Array.isArray(authMethods) &&
        authMethods?.map((method, i) => (
          <div
            className="select-institution__choose-auth-method__method-container"
            key={i}
          >
            <button
              className="select-institution__choose-auth-method__method"
              onClick={() => handleSelectAuthMethod(method)}
              key={method?._id}
            >
              <span className="select-institution__choose-auth-method__method__icon">
                <img
                  src={MAP_AUTH_METHOD_TYPE_TO_ICON[method?.type]}
                  alt="authentication method icon"
                />
              </span>
              <div>
                <p className="select-institution__choose-auth-method__method__title">
                  Link with {method.name} <SvgRight />
                </p>
                <p className="select-institution__choose-auth-method__method__description">
                  Click here to use the credentials you use with your{" "}
                  {activeInstitution?.name} {method.name}
                </p>
              </div>
            </button>
          </div>
        ))}
    </div>
  );
}
