import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { func, number } from "prop-types";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export default function Header({ shoppingCartCount, displayPopinCart }) {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Love Pizza
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          onClick={displayPopinCart}
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
  displayPopinCart: Function.pototypes,
};
Header.propTypes = {
  shoppingCartCount: number,
  displayPopinCart: func,
};
