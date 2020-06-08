import React from "react";
import { arrayOf, shape } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";

import PizzaCard from "../PizzaCard";
import { Typography } from "@material-ui/core";

export default function PizzaList({ data }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza en ce moment
      </Typography>
    );
  return (
    <>
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <PizzaCard
          key={id}
          name={name}
          ingredients={ingredients}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </>
  );
}
PizzaList.propTypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
};

PizzaList.defaultProps = {
  data: [],
};
