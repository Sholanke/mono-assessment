import React, { useCallback, useEffect, useMemo, useState } from "react";
import useModal from "../../../../hooks/useModal";
import { BaseModalHeader } from "../../../ui/baseModalHeader";
import { BaseInput } from "../../../ui/baseInput";
import { BaseModal } from "../../../ui/baseModal";
import SvgSearch from "../../../ui/icons/SvgSearch";
import { searchInstituteByTerm } from "../utils/gateway";
import ChooseAuthMethod from "./ChooseAuthMethod";
import debounce from "lodash.debounce";
import { BaseEmptyState } from "../../../ui/baseEmptyState";
import { BasePageLoader } from "../../../ui/basePageLoader";

export default function SelectFinancialInstitution({
  activeInstitution,
  setActiveInstitution,
  setActiveAuthMethod,
  goToScreen,
  closeGatewayModal,
  allFinancialInstitutions,
  showInstitutionsLoader,
  institutionThemeStyles,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInstitutes, setFilteredInstitutes] = useState([]);
  const [showAuthModal, openAuthModal, closeAuthModal] = useModal({
    defaultValue: false,
  });

  const handleAuth = (institution) => {
    setActiveInstitution(institution);
    openAuthModal();
  };

  const triggerSearchInstituteByTerm = useCallback(
    (term) => {
      const filteredResult = searchInstituteByTerm({
        term,
        institutes: allFinancialInstitutions,
      });
      setSearchTerm((current) => {
        if (current === term) setFilteredInstitutes(filteredResult);
        return current;
      });
    },
    [allFinancialInstitutions]
  );

  useEffect(() => {
    triggerSearchInstituteByTerm(searchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerSearchInstituteByTerm]);

  const debounceSearchInstituteByTerm = useMemo(() => {
    return debounce((term) => {
      triggerSearchInstituteByTerm(term);
    }, 400);
  }, [triggerSearchInstituteByTerm]);

  const handleSearchTermChange = useCallback(
    ({ currentTarget: { value } }) => {
      setSearchTerm(value);
      if (!value) setFilteredInstitutes(allFinancialInstitutions);
      else debounceSearchInstituteByTerm(value);
    },
    [debounceSearchInstituteByTerm, allFinancialInstitutions]
  );

  const getContent = () => {
    if (Array.isArray(filteredInstitutes) && filteredInstitutes?.length > 0) {
      return (
        <div className="select-institution__options__grid fade-up">
          {filteredInstitutes?.map((institution, i) => (
            <button
              key={`${institution?._id}_${i}`}
              className="select-institution__option"
              onClick={() => {
                handleAuth(institution);
              }}
            >
              <img src={institution?.icon} alt="institution icon" />
              <p>{institution?.name}</p>
            </button>
          ))}
        </div>
      );
    }

    if (
      filteredInstitutes?.length === 0 &&
      !showInstitutionsLoader &&
      searchTerm
    ) {
      return (
        <BaseEmptyState
          title="Sorry! No results found"
          description={`Unable to find any matches for "${searchTerm}". Please try another term`}
          Icon={SvgSearch}
          key="no-result"
        />
      );
    }

    if (showInstitutionsLoader) {
      return <BasePageLoader title="Fetching financial institutions..." />;
    }

    return (
      <BaseEmptyState
        Icon={() => "⚠️"}
        title="Something Went Wrong"
        description="Please try refreshing this page. If the problem persists, please contact support."
        showRefreshButton
        key="error-state"
      />
    );
  };

  return (
    <div className="select-institution" style={institutionThemeStyles}>
      <BaseModalHeader
        title="Select your financial institution"
        onClose={closeGatewayModal}
        onBack={closeGatewayModal}
      />
      <BaseInput
        Svg={<SvgSearch />}
        onChange={handleSearchTermChange}
        value={searchTerm}
        className="select-institution__search"
        placeholder="Search"
      />

      <div className="select-institution__options">{getContent()}</div>

      <BaseModal variant="widget" close={closeAuthModal} show={showAuthModal}>
        <ChooseAuthMethod
          {...{ activeInstitution, goToScreen, setActiveAuthMethod }}
        />
      </BaseModal>
    </div>
  );
}
