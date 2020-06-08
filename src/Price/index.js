import { number, string } from "prop-types";

export default function Price({ value, currency, language }) {
  const priceFormateur = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  });
  return priceFormateur.format(value);
}

Price.propTypes = {
  value: number.isRequired,
  currency: string,
  language: string,
};
Price.defaultProps = {
  currency: "EUR",
  language: "fr-FR",
};
