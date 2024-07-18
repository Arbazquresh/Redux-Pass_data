import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Expenditure = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid item xs={3}>
          <h3>Immam Payment:</h3>
          <h3>Mozaam Payment:</h3>
        </Grid>

        <Grid item xs={3}>
          <h3>Electricity Bill:</h3>
          <h3>Labour Bill:</h3>
          <h3>Plumber Bill:</h3>
          <h3>Item Bill:</h3>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid item xs={3}>
          <h3>Property Tax:</h3>
          <h3>Light Tax:</h3>
          <h3>Water Tax:</h3>
        </Grid>

        <Grid item xs={3}>
          <h3>Property Tax:</h3>
          <h3>Light Tax:</h3>
          <h3>Water Tax:</h3>
        </Grid>
      </Grid>
    </Grid>
  );
};
