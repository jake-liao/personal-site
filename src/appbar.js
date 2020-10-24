import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "./drawer";

const useStyles = makeStyles(theme => ({
  AppBar: {
    width: "100vw",
    marginTop: "3vh",
    background: "gray"
  },
  title: {
    flexGrow: "1"
  }
}));

export default function Navigation() {
  const classes = useStyles();
  document.body.style.margin = "0px";
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar>
        <Drawer />
        <Typography variant="h6" className={classes.title}>
          StarCluster
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
