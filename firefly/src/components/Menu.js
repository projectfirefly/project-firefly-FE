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
    ListItemText,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const items = [
    {
        path: "/",
        text: "Main",
    },
    {
        path: "/login",
        text: "Login",
    },
    {
        path: "/profileview",
        text: "ProfileView",
    },
    {
        path: "/createprofile",
        text: "CreateProfile",
    },
    {
        path: "/choose-login",
        text: "ChooseLogin",
    },
    {
        path: "sign-in",
        text: "SignIn",
    },
    {
        path: "/register",
        text: "Register",
    },
    {
        path: "/registration",
        text: "Multi-Step Registration",
    },
    {
        path: "/child-profiles-dialog",
        text: "Profile Dialog Test",
    },
    {
        path: "/child-profiles-main",
        text: "Main Child Profiles Test",
    },
    {
        path: "/slider-test",
        text: "Rainbow Slider Test",
    },
    {
        path: "/stepper-test",
        text: "Stepper Test",
    },
];

function Menu() {
    const [open, setOpen] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    const classes = makeStyles(theme => ({
        container: {
            marginBottom: "20px",
        },
        root: {
            display: "flex",
        },
        appBar: {
            zIndex: 1000,
            background: "#5b4eff",
        },
        list: {
            width: '300px',
            background: "#5b4eff",
            color: "white",
        },
        listItem: {
            '&:hover, &:focus': {
                background: "rgba(208,204,255,.25)",
            }
        },
        drawer: {
            root: {
                background: "#5b4eff",
            }
        },
        drawerDiv: {
            height: "100%",
            background: "#5b4eff",
        },
        collapse: {
            marginLeft: "10%",
        },
        toolbar: theme.mixins.toolbar,
    }))();

    const handleClick = () => {
        setCollapseOpen(!collapseOpen);
    }

    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        // <ul className="menu">
        //   {items.map(item => (
        //     <li
        //       key={item.path}
        //       onClick={handleClick.bind(null, item.path)}
        //       className={
        //         props.location.pathname === item.path
        //           ? "menu__item menu__item--active"
        //           : "menu__item"
        //       }
        //     >
        //       <Link to={item.path}>{item.text}</Link>
        //     </li>
        //   ))}
        // </ul>
        <div className={classes.container}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open Drawer"
                        edge="start"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <h2>
                        Firefly Dev Menu
                    </h2>
                </Toolbar>
            </AppBar>
            <Drawer classes={classes.drawer} anchor="left" open={open} onClose={toggleDrawer}>
                <div className={classes.drawerDiv}>
                    <List className={classes.list}>
                        {items.map(item => (
                            <ListItem className={classes.listItem} button onClick={toggleDrawer} component={Link} to={item.path}>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <div className={classes.toolbar} />
        </div>
    );
}

export default Menu;
