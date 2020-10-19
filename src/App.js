import React from "react";
// import { spacing } from "@material-ui/system";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme)) => ({
  grid: {
    width: '100%',
    margine: '0px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: them.palette.success.light,
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Grid container spacing = {2} className = {classes.grid}>
      <Grid item xs={6} md={12}>
        <Paper className={classes.paper}>1</Paper>
      </Grid>
    </Grid>
  );
}
