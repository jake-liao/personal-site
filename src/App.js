import React from "react";
import { Button, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  AppBar: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    background: "indigo",
  }
}));

export default function App() {
  const classes = useStyles();
  document.body.style.margin = "0px";
  return (
    <AppBar position="static" className={classes.AppBar}>
      <Button>
        
      </Button>
    </AppBar>
  );
}
