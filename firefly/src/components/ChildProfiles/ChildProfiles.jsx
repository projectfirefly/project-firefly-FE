import React, { useState, useEffect, useContext } from "react";
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import ChildProfileDialog from "./ChildProfileDialog";
import logo from "../../assets/icons/Firefly.svg";
import { Toolbar } from "@material-ui/core";
import ColorSlider from "../ColorSlider/ColorSlider";
import ProfileFly from "../../assets/icons/ProfileFly";

const ChildProfiles = () => {
  const [childProfileState, dispatch] = useContext(childContext);

  const useStyles = makeStyles({
    header: {
      fontSize: "34px",
      letterSpacing: "10px",
      fontWeight: "900",
      color: "#5B4EFF",
      display: "flex",  
      marginBottom: '50px',
    },
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "60px"
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    single: {
        width: "33%",
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px'
    },
    card: {
      border: "2px solid #ABB0BA",
      borderRadius: "10px",
      boxShadow: "0px 3px #8F96A3",
      width: '200px',
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      margin: '-17px -65px -40px -65px'
    },
    text: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      marginBottom: '-25px',
      paddingTop: '10px'
    },
    name: {
      fontSize: "1.5rem",
      color: "#243d14"
    },
    flysize: {
        width: '75%',
        height: '75%'
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}> CHOOSE YOUR FIREFLY </div>
      <div className={classes.cardContainer}>
        {childProfileState.profiles.map(profile => (
            <div className={classes.single}>
                <Card className={classes.card}>
                    <CardActionArea
                    onClick={() =>
                        dispatch({ type: "UPDATE_SELECTED", payload: profile.id })
                    }
                    >

                        <CardContent className={classes.cardContent}>
                                <div className={classes.text}>
                                    <h2 className={classes.name}>{profile.name}</h2>
                                </div>
                                <div className={classes.flysize}>
                                    <ProfileFly  color={profile.color} />
                                </div>
                        </CardContent>
                        
                    </CardActionArea>
                </Card>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ChildProfiles;
