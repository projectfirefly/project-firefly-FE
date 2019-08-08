import React, { useState } from 'react'
import { childContext } from '../context/ChildProfiles/ChildProfileStore';
import Welcome from '../images/WelcomeToFirefly.png';


import { makeStyles } from '@material-ui/core';
import Icon from '../assets/icons';

//I will add stuff in here eventually

export const Loader = () => {

  const classes = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    sizer: {
      display: "flex",
      flexDirection: "column",
    },
    image: {
      width: "100%",
    },
    loaderContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
    },
    loaderText: {
      textTransform: "uppercase",
      fontSize: "2.4rem",
      color: "#5b4eff",
      fontWeight: "900",
      letterSpacing: ".7rem",
    },
  })();

  return (
    <div className={classes.container}>
      <div className={classes.sizer}>
        {/* <img src={Welcome} className={classes.image}/> */}
        <Icon
          name="Firefly"
          width={"100%"}
          viewBox={"0 0 1024 1024"}
        />
        <div className={classes.loaderContainer}>
          <h2 className={classes.loaderText}>Loading</h2>
          <CircleLoader />
        </div>
      </div>
    </div>
  )
}

const CircleLoader = () => {
  const classes = makeStyles({
    ldsRoller: {
      display: "inline-block",
      position: "relative",
      width: "64px",
      height: "64px",
      "& div": {
        animation: "$lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        transformOrigin: "32px 32px",
      },
      "& div:after": {
        content: "' '",
        display: "block",
        position: "absolute",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#5b4eff",
        margin: "-3px 0 0 -3px",
      },
      "& div:nth-child(1)": {
        animationDelay: "-0.036s",
      },
      "& div:nth-child(1):after": {
        top: "50px",
        left: "50px",
      },
      "& div:nth-child(2)": {
        animationDelay: "-0.072s",
      },
      "& div:nth-child(2):after": {
        top: "54px",
        left: "45px",
      },
      "& div:nth-child(3)": {
        animationDelay: "-0.108s",
      },
      "& div:nth-child(3):after": {
        top: "57px",
        left: "39px",
      },
      "& div:nth-child(4)": {
        animationDelay: "-0.144s",
      },
      "& div:nth-child(4):after": {
        top: "58px",
        left: "32px",
      },
      "& div:nth-child(5)": {
        animationDelay: "-0.18s",
      },
      "& div:nth-child(5):after": {
        top: "57px",
        left: "25px",
      },
      "& div:nth-child(6)": {
        animationDelay: "-0.216s",
      },
      "& div:nth-child(6):after": {
        top: "54px",
        left: "19px",
      },
      "& div:nth-child(7)": {
        animationDelay: "-0.252s",
      },
      "& div:nth-child(7):after": {
        top: "50px",
        left: "14px",
      },
    },
    '@keyframes lds-roller': {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      }
    },
  })();

  return (
    <div>
      <div className={classes.ldsRoller}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}