import React from "react";
import { useList } from "react-use";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList";
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";

import { useQuery } from "react-query";

import { theme } from "./theme";
import Header from "../Header";

import PizzaListScreen from "../PizzaListScreen/index";
import CartScreen from "../CartScreen/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={PizzaListScreen}></Route>
        <Route exact path="/cart" component={CartScreen}></Route>
      </Router>
    </ThemeProvider>
  );
}
