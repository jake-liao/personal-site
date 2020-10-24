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
  root: {
    flexGrow: "1",
    height: "100vh",
    width: "100vw",
    background: "url(https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: "1"
  },
  img: {
    // width: "100%",
    height: "100vh"
  }
}));

export default function App() {
  const classes = useStyles();
  document.body.style.margin = "0px";
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            StarCluster
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}