import React from "react";

import Price from "../Price";
import { CardMedia, Card, Typography, CardContent } from "@material-ui/core";
import { arrayOf, string, number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const imageSize = 175;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: imageSize,
    margin: `${theme.spacing(2)}px auto`,
  },
}));

export default function PizzaCard({ name, ingredients, price, imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height="175"
          image={imageUrl}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
PizzaCard.propTypes = {
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};
PizzaCard.defaultProps = {
  imageUrl: null,
};
