import React from "react";
import PizzaList from "../PizzaList";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";
import Header from "../Header";
import db from "../db.json";
export default function App() {
  const pizzas = db.pizzas;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      <PizzaList data={pizzas} />
    </ThemeProvider>
  );
}
