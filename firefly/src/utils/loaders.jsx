import React, { useState } from 'react'
import { childContext } from '../context/ChildProfiles/ChildProfileStore';
import Welcome from '../images/WelcomeToFirefly.png';


import { makeStyles } from '@material-ui/core';

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
    loaderContainer: {
      display: "flex",
    },
    loaderText: {

    },
  })();

  return ( 
    <div className={classes.container}>
      <img src={Welcome} />
      <div className={classes.loaderContainer}>
        <h2 className={classes.loaderText}>Loading</h2>
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
      "&div": {
        animation: "$ldsroller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        transformOrigin: "32px 32px",
      },
      "&div:after": {
        content: " ",
        display: "block",
        position: "absolute",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "#fff",
        margin: "-3px 0 0 -3px",
      },
      "&div:nth-child(1)": {
        animationDelay: "-0.036s",
      },
      "&div:nth-child(1):after": {
        top: "50px",
        left: "50px",
      },
      "&div:nth-child(2)": {
        animationDelay: "-0.072s",
      },
      "&div:nth-child(2):after": {
        top: "54px",
        left: "45px",
      },
      "&div:nth-child(3)": {
        animationDelay: "-0.108s",
      },
      "&div:nth-child(3):after": {
        top: "57px",
        left: "39px",
      },
      // ldsRoller: div:nth-child(4) {
      //   animation-delay: -0.144s;
      // }
      // ldsRoller: div:nth-child(4):after {
      //   top: 58px;
      //   left: 32px;
      // }
      // ldsRoller: div:nth-child(5) {
      //   animation-delay: -0.18s;
      // }
      // ldsRoller: div:nth-child(5):after {
      //   top: 57px;
      //   left: 25px;
      // }
      // ldsRoller: div:nth-child(6) {
      //   animation-delay: -0.216s;
      // }
      // ldsRoller: div:nth-child(6):after {
      //   top: 54px;
      //   left: 19px;
      // }
      // ldsRoller: div:nth-child(7) {
      //   animation-delay: -0.252s;
      // }
      // ldsRoller: div:nth-child(7):after {
      //   top: 50px;
      //   left: 14px;
      // }
      // ldsRoller: div:nth-child(8) {
      //   animation-delay: -0.288s;
      // }
      // ldsRoller: div:nth-child(8):after {
      //   top: 45px;
      //   left: 10px;
      // }
      "@keyframes ldsroller": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        }
      }
    },
  })();

  return (
    <div className={classes.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}