import React from "react";
import { node } from "prop-types";
import Header from "../Header/index";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
Screen.propTypes = {
  children: node.isRequired,
};
