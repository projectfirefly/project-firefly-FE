import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

//import components for each step. 
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

const MultiStepRegistration = () => {
  const classes = makeStyles(theme => ({
    app: {},
    header: {
      ...theme.headerMargin,
      marginBottom: "2rem",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    second: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    third: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    wrapper: {
      width: "100%"
    }
  }))();