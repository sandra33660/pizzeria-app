import React from "react";
import Screen from "../Screen";
import PizzaList from "../PizzaList";
import { CircularProgress } from "@material-ui/core";
import usePizzas from "../usePizzas";

export default function PizzaListScreen() {
  const { status, data: pizzas } = usePizzas();
  return (
    <Screen>
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={pizzas} />}
    </Screen>
  );
}
