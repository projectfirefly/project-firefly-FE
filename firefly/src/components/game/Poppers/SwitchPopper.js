import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontFamily: "Nunito",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    color: "#6459FF",
    fontWeight: "700"
  }
}));

const CustomSwitch = withStyles({
  switchBase: {
    color: "#fff",
    border: "2px solid #6C60FF",
    padding: "0",
    top: "20%",

    "&$checked": {
      color: "#D0CCFF",
      padding: "0",
      top: "20%"
    },

    "&$checked + $track": {
      backgroundColor: "blue"
    }
  },
  checked: {},
  track: { backgroundColor: "#D0CCFF" }
})(Switch);

const SwitchPopper = ({ checkedSwitch, setCheckedSwitch }) => {
  const handleChange = () => {
    setCheckedSwitch(!checkedSwitch);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.text}>Off</span>
      <CustomSwitch
        checked={checkedSwitch}
        onChange={() => handleChange()}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span className={classes.text}>On</span>
    </div>
  );
};

export default SwitchPopper;
