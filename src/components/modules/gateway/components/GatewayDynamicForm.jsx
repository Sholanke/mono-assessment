import React, { useMemo } from "react";
import { BaseInput } from "../../../ui/baseInput";
import { generateInstitutionThemeStyles } from "../utils/gateway";
import { BaseButton } from "../../../ui/baseButton";

const FORM_ELEMENT_TYPES = {
  INPUT: "elements.input",
  SWITCH: "elements.switch",
  CAPTCHA: "elements.captcha_input",
};

const MAP_FORM_CONFIG_TYPE_TO_NATIVE_TYPE = {
  string: "text",
  password: "password",
};

export default function GatewayDynamicForm({
  formConfig,
  handleSubmit,
  activeInstitution,
  handleFormFieldChange,
  loading,
  formData,
}) {
  const handleFieldChange = ({ currentTarget: { name, value } }) => {
    handleFormFieldChange({ name, value });
  };

  const institutionThemeStyles = useMemo(() => {
    return generateInstitutionThemeStyles(activeInstitution?.primaryColor);
  }, [activeInstitution?.primaryColor]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      {Array.isArray(formConfig) &&
        formConfig?.map((config, i) => {
          const inputField = (
            <BaseInput
              placeholder={config?.hint}
              value={formData?.[config.name]}
              name={config.name}
              onChange={handleFieldChange}
              type={MAP_FORM_CONFIG_TYPE_TO_NATIVE_TYPE[config?.contentType]}
              maxLength={config?.maxLength}
              key={i}
              required
            />
          );
          const mapFieldsToType = {
            [FORM_ELEMENT_TYPES.INPUT]: inputField,
            // [FORM_ELEMENT_TYPES.CAPTCHA]: inputField,
          };

          return mapFieldsToType[config.type];
        })}

      <BaseButton
        style={institutionThemeStyles}
        {...{ loading, disabled: loading }}
      >
        Link Account
      </BaseButton>
    </form>
  );
}
