import React, { useEffect, useState } from "react";
import { BANK_LINKAGE_STATUS, GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import { createConnectSession, getFinancialInstitutions } from "../api";
import {
  SelectFinancialInstitution,
  GatewayLogin,
  ChooseAccount,
  BankAccountLinkageStatus,
} from "../../gateway/components";
import "./index.scss";
import { useToast } from "../../../../context/useToastProvider";
import { GATEWAY_ERRORS } from "../constants/errors";

const GATEWAY_SCREENS = {
  [GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION]: SelectFinancialInstitution,
  [GATEWAY_SCREEN_KEYS.LOG_IN]: GatewayLogin,
  [GATEWAY_SCREEN_KEYS.CHOOSE_ACCOUNT]: ChooseAccount,
  [GATEWAY_SCREEN_KEYS.LINKAGE_STATUS]: BankAccountLinkageStatus,
};

const DEFAULT_GATEWAY_SCREEN = GATEWAY_SCREEN_KEYS.SELECT_INSTITUTION;
const DEFAULT_BANK_LINKAGE_STATUS = BANK_LINKAGE_STATUS.PENDING;

export default function Gateway({ closeGatewayModal }) {
  const [allFinancialInstitutions, setAllFinancialInstitutions] = useState([]);
  const [showInstitutionsLoader, setShowInstitutionsLoader] = useState(false);
  const [activeInstitution, setActiveInstitution] = useState();
  const [selectedBankAccount, setSelectedBankAccount] = useState();
  const [activeAuthMethod, setActiveAuthMethod] = useState();
  const [activeScreen, setActiveScreen] = useState(DEFAULT_GATEWAY_SCREEN);
  const [authenticating, setAuthenticating] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const { addToast } = useToast();
  const [authenticationFormData, setAuthenticationFormData] = useState({
    username: "",
    password: "",
  });
  const [bankLinkageStatus, setBankLinkageStatus] = useState(
    DEFAULT_BANK_LINKAGE_STATUS
  );

  const goToScreen = (screenSlug) => {
    setActiveScreen(screenSlug);
  };

  const ActiveScreen = GATEWAY_SCREENS?.[activeScreen];

  const linkSelectedBankAccount = () => {
    setBankLinkageStatus(BANK_LINKAGE_STATUS.SUCCESS);
    goToScreen(GATEWAY_SCREEN_KEYS.LINKAGE_STATUS);
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

      if (sessionId) {
        setSessionId(sessionId);
        goToScreen(GATEWAY_SCREEN_KEYS.CHOOSE_ACCOUNT);
      }
    } catch (error) {
      addToast({
        title: GATEWAY_ERRORS.FAILED_TO_LOG_IN,
        description: GATEWAY_ERRORS.TRY_AGAIN,
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

  const getInstitutions = async () => {
    try {
      setShowInstitutionsLoader(true);
      const response = await getFinancialInstitutions();
      setAllFinancialInstitutions(response?.data);
    } catch (error) {
      addToast({
        title: GATEWAY_ERRORS.FAILED_TO_LOAD_BANKS,
        description: GATEWAY_ERRORS.TRY_AGAIN,
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
  };

  useEffect(() => {
    getInstitutions();
  }, []);

  const handleFormFieldChange = ({ name, value }) => {
    setAuthenticationFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
            handleFormFieldChange,
            authenticationFormData,
            authenticating,
          }}
        />
      ) : null}
    </>
  );
}
