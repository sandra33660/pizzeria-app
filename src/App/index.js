import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import routes from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {Object.values(routes).map((route) => (
          <Route key={route.path} exact {...route} />
        ))}
      </Router>
    </ThemeProvider>
  );
}
