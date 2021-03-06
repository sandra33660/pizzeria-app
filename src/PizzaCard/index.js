import React from "react";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import { PIZZAS_MAX_COUNT } from "../pizzas/index";
import Price from "../Price";
import {
  CardActions,
  Button,
  CardMedia,
  Card,
  Typography,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { arrayOf, string, number, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useCounter } from "react-use";

const imageSize = 175;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: imageSize,
    margin: `${theme.spacing(2)}px auto`,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
  const classes = useStyles();

  const [pizzaCount, { dec, inc }] = useCounter(1, PIZZAS_MAX_COUNT, 1);
  const addedPizzas = Array.from(new Array(pizzaCount), () => ({
    id,
    name,
    price,
    addedAt: Date.now(),
  }));
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
        <IconButton arial-label="moins" onClick={() => dec()}>
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
        <span>{pizzaCount}</span>
        <IconButton arial-label="plus" onClick={() => inc()}>
          <AddBox fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => {
            addToCart(...addedPizzas);
          }}
        >
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}
PizzaCard.propTypes = {
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  addToCart: func,
};
PizzaCard.defaultProps = {
  imageUrl: null,
  addToCart: Function.prototype,
};
