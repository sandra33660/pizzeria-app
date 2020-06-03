import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import PizzaCard from "../PizzaCard";
import { theme } from "./theme";
import Header from "../Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      <PizzaCard name="Norvégienne" />
    </ThemeProvider>
  );
}
