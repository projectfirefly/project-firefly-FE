import React from "react";
import chooseWorldStyles from "./ChooseWorldStyles";

const WorldCard = props => {
  const classes = chooseWorldStyles();
  console.log("IMG" + props.img);
  return (
    <div className={classes.worldCard}>
      <h4>{props.title}</h4>
      <img src={props.img} className={classes.worldCardImg} />
    </div>
  );
};

export default WorldCard;