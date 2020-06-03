import React from "react";

import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { string } from "prop-types";
export default function PizzaCard({ name }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
PizzaCard.propTypes = {
  name: string.isRequired,
};
