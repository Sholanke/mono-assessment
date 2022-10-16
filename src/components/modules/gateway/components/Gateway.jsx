import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BANK_LINKAGE_STATUS, GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import {
  SelectFinancialInstitution,
  GatewayLogin,
  ChooseAccount,
  BankAccountLinkageStatus,
  SecurityQuestion,
} from "../../gateway/components";
import {
  apiResponseCodeIsSuccessful,
  createConnectSession,
  getFinancialInstitutions,
  loginToInstitution,
} from "../api";
import { useToast } from "../../../../context/useToastProvider";
import { GATEWAY_ERRORS } from "../constants/errors";
import "./index.scss";
import { generateInstitutionThemeStyles } from "../utils/gateway";
import reCommitSession from "../api/reCommitSession";

const DEFAULT_GATEWAY_SCREEN = GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION;
const DEFAULT_BANK_LINKAGE_STATUS = BANK_LINKAGE_STATUS.SUCCESS;

const GATEWAY_SCREENS = {
  [GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION]: SelectFinancialInstitution,
  [GATEWAY_SCREEN_KEYS.LOG_IN]: GatewayLogin,
  [GATEWAY_SCREEN_KEYS.CHOOSE_ACCOUNT]: ChooseAccount,
  [GATEWAY_SCREEN_KEYS.LINKAGE_STATUS]: BankAccountLinkageStatus,
  [GATEWAY_SCREEN_KEYS.SECURITY_QUESTION]: SecurityQuestion,
};

const MAP_RESPONSE_CODE_TO_SCREEN_KEY = {
  99: GATEWAY_SCREEN_KEYS.LINKAGE_STATUS,
  101: GATEWAY_SCREEN_KEYS.CHOOSE_ACCOUNT,
  102: GATEWAY_SCREEN_KEYS.SECURITY_QUESTION,
};

export default function Gateway({ closeGatewayModal }) {
  const [allFinancialInstitutions, setAllFinancialInstitutions] = useState([]);
  const [showInstitutionsLoader, setShowInstitutionsLoader] = useState(false);
  const [activeInstitution, setActiveInstitution] = useState();
  const [selectedBankAccount, setSelectedBankAccount] = useState();
  const [activeAuthMethod, setActiveAuthMethod] = useState();
  const [activeScreen, setActiveScreen] = useState(DEFAULT_GATEWAY_SCREEN);
  const [authenticating, setAuthenticating] = useState(false);
  const [validatingSecurityAnswer, setValidatingSecurityQuestion] = useState();
  const [bankLinkageStatus, setBankLinkageStatus] = useState(
    DEFAULT_BANK_LINKAGE_STATUS
  );
  const [loginResponse, setLoginResponse] = useState();
  const [sessionId, setSessionId] = useState("");
  const { addToast } = useToast();
  const [securityFormData, setSecurityFormData] = useState({});
  const [authenticationFormData, setAuthenticationFormData] = useState({});

  const goToScreen = (screenSlug) => {
    setActiveScreen(screenSlug);
  };

  const linkSelectedBankAccount = () => {
    setBankLinkageStatus(BANK_LINKAGE_STATUS.SUCCESS);
    goToScreen(GATEWAY_SCREEN_KEYS.LINKAGE_STATUS);
  };

  const loginWithSessionId = async (sessionId) => {
    setSessionId(sessionId);
    setAuthenticating(true);

    try {
      const response = await loginToInstitution({
        body: authenticationFormData,
        sessionId: sessionId,
      });

      const responseStatus = response?.data?.status;
      const responseCode = response?.data?.responseCode;

      if (apiResponseCodeIsSuccessful(responseStatus) && responseCode) {
        const nextStepScreenKey = MAP_RESPONSE_CODE_TO_SCREEN_KEY[responseCode];
        setLoginResponse(response?.data);
        goToScreen(nextStepScreenKey);
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      addToast({
        title: GATEWAY_ERRORS.FAILED_TO_LOG_IN,
        description: errorMessage || GATEWAY_ERRORS.TRY_AGAIN,
        actions: [
          {
            label: "Retry",
            onClick: () => loginWithSessionId(sessionId),
          },
        ],
      });
    } finally {
      setAuthenticating(false);
    }
  };

  const handleSubmitAuthForm = async () => {
    setAuthenticating(true);

    const body = {
      institution: activeInstitution._id,
      auth_method: activeAuthMethod.type,
    };

    try {
      const response = await createConnectSession({ body });
      const sessionId = response?.data?.id;
      if (sessionId) await loginWithSessionId(sessionId);
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      addToast({
        title: GATEWAY_ERRORS.FAILED_TO_LOG_IN,
        description: errorMessage || GATEWAY_ERRORS.TRY_AGAIN,
        actions: [
          {
            label: "Retry",
            onClick: () => handleSubmitAuthForm(),
          },
        ],
      });
    } finally {
      setAuthenticating(false);
    }
  };

  const getInstitutions = useCallback(async () => {
    try {
      setShowInstitutionsLoader(true);
      const response = await getFinancialInstitutions();
      setAllFinancialInstitutions(response?.data);
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      addToast({
        title: GATEWAY_ERRORS.FAILED_TO_LOAD_BANKS,
        description: errorMessage || GATEWAY_ERRORS.TRY_AGAIN,
        actions: [
          {
            label: "Retry",
            onClick: () => getInstitutions(),
          },
        ],
      });
    } finally {
      setShowInstitutionsLoader(false);
    }
  }, []);

  const handleAuthFormFieldChange = ({ name, value }) => {
    setAuthenticationFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSecurityFormFieldChange = ({ name, value }) => {
    setSecurityFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSecurityFormSubmit = async () => {
    setValidatingSecurityQuestion(true);

    try {
      const response = await reCommitSession({
        body: securityFormData,
        sessionId,
      });

      if (apiResponseCodeIsSuccessful(response?.data?.status)) {
        setLoginResponse(response?.data)
        goToScreen(GATEWAY_SCREEN_KEYS.LINKAGE_STATUS);
      } else {
        const error = { response };
        throw error;
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      addToast({
        title: `🚫 ${errorMessage || GATEWAY_ERRORS.TRY_AGAIN}`,
        actions: [
          {
            label: "Retry",
            onClick: () => handleSecurityFormSubmit(),
          },
        ],
      });
    } finally {
      setValidatingSecurityQuestion(false);
    }
  };

  const institutionThemeStyles = useMemo(() => {
    return generateInstitutionThemeStyles(activeInstitution?.primaryColor);
  }, [activeInstitution?.primaryColor]);

  const ActiveScreen = GATEWAY_SCREENS?.[activeScreen];

  useEffect(() => {
    getInstitutions();
  }, [getInstitutions]);

  return (
    <>
      {ActiveScreen ? (
        <ActiveScreen
          {...{
            goToScreen,
            setActiveInstitution,
            activeInstitution,
            setActiveAuthMethod,
            activeAuthMethod,
            setSelectedBankAccount,
            selectedBankAccount,
            bankLinkageStatus,
            setBankLinkageStatus,
            linkSelectedBankAccount,
            handleSubmitAuthForm,
            closeGatewayModal,
            allFinancialInstitutions,
            showInstitutionsLoader,
            handleAuthFormFieldChange,
            authenticationFormData,
            authenticating,
            institutionThemeStyles,
            loginResponse,
            securityFormData,
            handleSecurityFormFieldChange,
            handleSecurityFormSubmit,
            validatingSecurityAnswer,
          }}
        />
      ) : null}
    </>
  );
}
