import React from "react";
import { BaseButton } from "../../../ui/baseButton";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import SvgVerify from "../../../ui/icons/SvgVerify";
import { GATEWAY_SCREEN_KEYS, MOCK_ACCOUNTS } from "../constants/gateway";
import { NumericFormat } from "react-number-format";
import { CurrencyIcon } from "../../../ui/icons/currency/CurrencyIcon";

export default function ChooseAccount({
  goToScreen,
  activeInstitution,
  setSelectedBankAccount,
  selectedBankAccount,
  linkSelectedBankAccount,
  closeGatewayModal,
  institutionThemeStyles,
}) {
  const selectBankAccount = (bankAccount) => {
    setSelectedBankAccount(bankAccount);
  };

  return (
    <div className="gateway-auth " style={institutionThemeStyles}>
      <div className="gateway-auth__header">
        <BaseModalHeader
          onClose={closeGatewayModal}
          onBack={() => goToScreen(GATEWAY_SCREEN_KEYS.LOG_IN)}
        >
          <img
            className="gateway-auth__header__icon"
            src={activeInstitution?.icon}
            alt="financial institution icon"
          />
        </BaseModalHeader>
        <p className="gateway-auth__header__title fade-right">Choose Account</p>
        <p className="gateway-auth__header__description fade-right">
          Please select an account to continue
        </p>
      </div>

      <div className="gateway-auth__form fade-right">
        <div className="gateway-auth__accounts">
          {Array.isArray(MOCK_ACCOUNTS)
            ? MOCK_ACCOUNTS?.map((account, i) => {
                const thisBankAccountIsActive =
                  account?.accountNumber === selectedBankAccount?.accountNumber;

                return (
                  <button
                    className="gateway-auth__account"
                    onClick={() => selectBankAccount(account)}
                    data-active={thisBankAccountIsActive}
                    key={i}
                  >
                    <span className="gateway-auth__account__currency-icon">
                      <CurrencyIcon slug={account?.currency} />
                    </span>
                    <div className="gateway-auth__account__details">
                      <p className="gateway-auth__account__details__name">
                        {account?.name}
                      </p>
                      <p className="gateway-auth__account__details__number">
                        {account?.accountNumber}
                      </p>

                      <h5 className="gateway-auth__account__details__amount">
                        {account?.currency}{" "}
                        <NumericFormat
                          value={account?.balance}
                          displayType="text"
                          decimalScale="2"
                          thousandSeparator=","
                        />
                      </h5>
                    </div>

                    {thisBankAccountIsActive ? (
                      <div className="gateway-auth__account__icon">
                        <SvgVerify />
                      </div>
                    ) : null}
                  </button>
                );
              })
            : null}
        </div>

        <BaseButton
          style={institutionThemeStyles}
          onClick={linkSelectedBankAccount}
        >
          Continue
        </BaseButton>
      </div>
    </div>
  );
}
