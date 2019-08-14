import React from "react";
import chooseWorldStyles from "./ChooseWorldStyles";

const ChooseWorld = () => {
  const classes = chooseWorldStyles();
  return (
    <div className={classes.rootContainer}>
      <hl className={classes.title}> CHOOSE YOUR WORLD </hl>
    </div>
  );
};

export default ChooseWorld;
