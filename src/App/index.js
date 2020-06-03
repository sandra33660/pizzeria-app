import React from "react";
import { theme } from "./theme";
import { Button, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <h1>Love pizza</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </ThemeProvider>
  );
}
