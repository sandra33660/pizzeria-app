import React from "react";
import Screen from "../Screen";
import PopinCart from "../PopinCart";

import { useList } from "react-use";

export default function CartScreen() {
  const [cart] = useList([]);
  return (
    <Screen>
      <PopinCart cart={cart} />
    </Screen>
  );
}
