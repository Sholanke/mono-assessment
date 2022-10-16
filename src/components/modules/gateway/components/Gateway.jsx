import React, { useEffect, useState } from "react";
import { BANK_LINKAGE_STATUS, GATEWAY_SCREEN_KEYS } from "../constants/gateway";
import SelectFinancialInstitution from "./SelectFinancialInstitution";
import "./index.scss";
import GatewayLogin from "./GatewayLogin";
import ChooseAccount from "./ChooseAccount";
import BankAccountLinkageStatus from "./BankAccountLinkageStatus";
import getFinancialInstitutions from "../api/getFinancialInstitutions";

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
  const [bankLinkageStatus, setBankLinkageStatus] = useState(
    DEFAULT_BANK_LINKAGE_STATUS
  );

  const goToScreen = (screenSlug) => {
    setActiveScreen(screenSlug);
  };

  const ActiveScreen = GATEWAY_SCREENS?.[activeScreen];

  const linkSelectedBankAccount = () => {
    console.log("account linked");
    setBankLinkageStatus(BANK_LINKAGE_STATUS.SUCCESS);
    goToScreen(GATEWAY_SCREEN_KEYS.LINKAGE_STATUS);
  };

  const handleSubmitAuthForm = () => {
    goToScreen(GATEWAY_SCREEN_KEYS.CHOOSE_ACCOUNT);
  };

  const getInstitutions = async () => {
    try {
      setShowInstitutionsLoader(true);
      const response = await getFinancialInstitutions();

      setAllFinancialInstitutions(response?.data);
    } catch (error) {
    } finally {
      setShowInstitutionsLoader(false);
    }
  };

  useEffect(() => {
    getInstitutions();
  }, []);

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
          }}
        />
      ) : null}
    </>
  );
}
