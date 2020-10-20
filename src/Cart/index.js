import React from "react";
import { func } from "prop-types";
import { arrayOf, number, string, shape } from "prop-types";
import Price from "../Price";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@material-ui/core";
import { isEmpty } from "ramda";

export default function Cart({ cart, reset }) {
  if (isEmpty(cart)) return <Typography>Pas de Pizzas</Typography>;
  return (
    <TableContainer component={Paper}>
      <Table
        /* className={classes.table} */
        size="small"
        aria-label="Ma commande de pizzas"
      >
        <TableHead>
          <TableRow>
            <TableCell>Pizza</TableCell>
            <TableCell align="right">Prix</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(({ addedAt, name, price }) => (
            <TableRow key={addedAt}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">
                <Price value={price} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Cart.propTypes = {
  cart: arrayOf(
    shape({ id: number, name: string, price: number, addedAt: number })
  ),
  reset: func,
};
Cart.defaultProps = {
  cart: [],
  reset: Function.prototype,
};
