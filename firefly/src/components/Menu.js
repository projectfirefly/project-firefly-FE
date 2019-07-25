import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  makeStyles,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Collapse,
  ListItemText
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const items = [
  {
    path: "/",
    text: "Main"
  },
  {
    path: "/login",
    text: "Login"
  },
  {
    path: "/profileview",
    text: "ProfileView"
  },
  {
    path: "/createprofile",
    text: "CreateProfile"
  },
  {
    path: "/choose-login",
    text: "ChooseLogin"
  },
  {
    path: "sign-in",
    text: "SignIn"
  },
  {
    path: "/register",
    text: "Register"
  },
  {
    path: "/registration",
    text: "Multi-Step Registration"
  },
  {
    path: "/child-profiles-dialog",
    text: "Profile Dialog Test"
  },
  {
    path: "/child-profiles-main",
    text: "Main Child Profiles Test"
  },
  {
    path: "/slider-test",
    text: "Rainbow Slider Test"
  },
  {
    path: "/stepper-test",
    text: "Stepper Test"
  },
  {
    path: "/accessories",
    text: "Accessory Picker"
  }
];

function Menu() {
  //Controls open state
  const [open, setOpen] = useState(false);

  //Styling
  const classes = makeStyles(theme => ({
    button: {
      position: "absolute",
      background: "#5b4eff",
      top: "5%",
      right: "5%",
      color: "white",
      "&:hover, &:focus": {
        background: "#d0ccff",
        opacity: "1"
      }
    },
    root: {
      display: "flex"
    },
    list: {
      width: "300px",
      background: "#5b4eff",
      color: "white"
    },
    listItem: {
      "&:hover, &:focus": {
        background: "rgba(208,204,255,.25)"
      }
    },
    drawer: {
      root: {
        background: "#5b4eff"
      }
    },
    drawerDiv: {
      height: "100%",
      background: "#5b4eff"
    },
    collapse: {
      marginLeft: "10%"
    },
    toolbar: theme.mixins.toolbar
  }))();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="Open Drawer"
        edge="start"
        onClick={toggleDrawer}
        className={classes.button}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        classes={classes.drawer}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.drawerDiv}>
          <List className={classes.list}>
            {items.map(item => (
              <ListItem
                className={classes.listItem}
                button
                onClick={toggleDrawer}
                component={Link}
                to={item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Menu;
