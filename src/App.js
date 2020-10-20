import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  AppBar: {
    width: "100vw",
    color: "white",
    background: "gray"
  },
  root: {
    flexGrow: "1",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: "1"
  },
  img: {
    width: "100vw",
    height: "100vh"
  }
}));

export default function App() {
  const classes = useStyles();
  document.body.style.margin = "0px";
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            StarCluster
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <img className={classes.img} position="static" src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts" alt="new"/>
    </div>
  );
}
