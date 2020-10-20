import React from "react";
import Screen from "../Screen";
import PizzaList from "../PizzaList";
import { CircularProgress } from "@material-ui/core";
import usePizzas from "../usePizzas";

export default function PizzaListScreen() {
  const { isFetching, data: pizzas } = usePizzas();
  return (
    <Screen>
      {isFetching && <CircularProgress />}
      {pizzas && <PizzaList data={pizzas} />}
    </Screen>
  );
}
