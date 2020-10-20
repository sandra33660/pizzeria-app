import React from "react";
import Screen from "../Screen";
import Cart from "../Cart";

import { useList } from "react-use";

export default function CartScreen() {
  const [cart] = useList([]);
  return (
    <Screen>
      <Cart cart={cart} />
    </Screen>
  );
}
