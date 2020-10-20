import React from "react";

import { arrayOf, shape, func } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import PizzaCard from "../PizzaCard";
import { Typography, Grid } from "@material-ui/core";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza en ce moment
      </Typography>
    );
  return (
    <Grid container justify="space-evenly">
      {data.map((pizza) => (
        <Grid key={pizza.id} item xs={6}>
          <PizzaCard {...pizza} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}
PizzaList.propTypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
  addToCart: func,
};

PizzaList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
