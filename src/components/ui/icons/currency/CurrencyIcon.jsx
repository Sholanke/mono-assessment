import SvgDollar from "./SvgDollar";
import SvgNaira from "./SvgNaira";

export const MAP_CURRENCY_TO_SVG = {
  NGN: SvgNaira,
  USD: SvgDollar,
};

export const CurrencyIcon = ({ slug }) => {
  const Currency = MAP_CURRENCY_TO_SVG[slug] || (() => slug);

  return <Currency />;
};
