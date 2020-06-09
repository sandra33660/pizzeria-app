import React from "react";
import { bool, func } from "prop-types";

import Popin from "../Popin";

export default function PopinCart({ open, hidePopinCart }) {
  const actions = [
    { label: "Annuler", onClick: hidePopinCart },
    { label: "Commander", primary: true },
  ];

  return (
    <Popin
      open={open}
      onClose={hidePopinCart}
      title="Passer commande"
      actions={actions}
    >
      Récapitulatif des Pizzas en commande
    </Popin>
  );
}

PopinCart.propTypes = {
  open: bool,
  hidePopinCart: func,
};
PopinCart.defaultProps = {
  open: false,
  hidePopinCart: Function.prototype,
};
