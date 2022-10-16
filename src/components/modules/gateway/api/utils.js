const SUCCESS_CODES = ["200"];

export const apiResponseCodeIsSuccessful = (responseCodeOrMessage) => {
  let successful = false;
  responseCodeOrMessage = `${responseCodeOrMessage}`;

  SUCCESS_CODES.forEach((successCode) => {
    if (responseCodeOrMessage?.includes?.(successCode)) successful = true;
  });

  return successful;
};
