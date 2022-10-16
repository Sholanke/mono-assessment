import convertHexToRgb from "../../../../utils/color";

export const generateInstitutionThemeStyles = (hexColor) => {
  if (typeof hexColor === "string") {
    const convertedRgb = convertHexToRgb(hexColor);

    return {
      "--institution-theme-rgb": convertedRgb?.rawRgb?.join?.(","),
      "--institution-theme": convertedRgb?.rgb,
    };
  } else {
    return;
  }
};

export const searchInstituteByTerm = ({ term, institutes }) => {
  if (term) {
    const filteredResult = institutes?.filter((institute) => {
      let isResult;
      const subTerms = term.toLocaleLowerCase().split(" ");

      subTerms.forEach((subTerm) => {
        const nameIncludesTerm = institute?.name
          ?.toLocaleLowerCase()
          .includes(subTerm);
        if (nameIncludesTerm) isResult = true;
      });

      return isResult;
    });
    return filteredResult;
  } else {
    return institutes;
  }
};
