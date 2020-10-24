import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./appbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    height: "100vh",
    width: "100vw",
    background: "url(https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts)"
  }
}));

export default function App() {
  const classes = useStyles();
  document.body.style.margin = "0px";
  return (
    <div className={classes.root}>
      <Navigation/>
    </div>
  );
}