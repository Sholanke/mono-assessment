import React, { useMemo } from "react";
import BaseInput from "../../../ui/baseInput/BaseInput";
import { generateInstitutionThemeStyles } from "../utils/gateway";
import BaseButton from "../../../ui/baseButton/BaseButton";

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
  handleFormFieldChange,
  activeInstitution,
}) {
  const institutionThemeStyles = useMemo(() => {
    return generateInstitutionThemeStyles(activeInstitution?.primaryColor);
  }, [activeInstitution?.primaryColor]);

  const getField = (config, i) => {
    const InputField = () => (
      <BaseInput
        placeholder={config?.hint}
        onChange={handleFormFieldChange}
        type={MAP_FORM_CONFIG_TYPE_TO_NATIVE_TYPE[config?.contentType]}
        maxLength={config?.maxLength}
        required
      />
    );

    const FieldsToType = {
      [FORM_ELEMENT_TYPES.INPUT]: InputField,
      [FORM_ELEMENT_TYPES.CAPTCHA]: InputField,
    };

    const ActiveField = FieldsToType[config.type];

    return ActiveField ? <ActiveField key={i} /> : null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      {Array.isArray(formConfig) &&
        formConfig?.map((config, i) => getField(config, i))}

      <BaseButton
        style={institutionThemeStyles}
        // loading={true}
      >
        Link Account
      </BaseButton>
    </form>
  );
}
