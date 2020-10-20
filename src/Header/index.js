import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { func, number } from "prop-types";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import routes from "../App/routes";

export default function Header({ shoppingCartCount }) {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to={routes.home.path}
        >
          Love Pizza
        </Typography>

        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          component={Link}
          to={routes.cart.path}
        >
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
Header.defaultProps = {
  shoppingCartCount: 0,
};
Header.propTypes = {
  shoppingCartCount: number,
};
