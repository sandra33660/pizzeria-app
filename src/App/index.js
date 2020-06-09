import React from "react";

import PizzaList from "../PizzaList";
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";

import { useQuery } from "react-query";

import { theme } from "./theme";
import Header from "../Header";
import PopinCart from "../PopinCart";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};
export default function App() {
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);
  const displayPopinCart = () => {
    setPopinCartOpen(true);
  };
  const hidePopinCart = () => {
    setPopinCartOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} displayPopinCart={displayPopinCart} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
      <PopinCart open={popinCartOpen} hidePopinCart={hidePopinCart} />
    </ThemeProvider>
  );
}
