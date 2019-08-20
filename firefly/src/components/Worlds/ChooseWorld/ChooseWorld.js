import React from "react";
import chooseWorldStyles from "./ChooseWorldStyles";
import WorldCard from "./WorldCard";
import fireflyWorld1 from "./fireflyWorld1.png";
import lockedWorld from "./lockedWorld.png";
import { SecondaryButton } from "../../../utils/buttons/SecondaryButton";
import { Link } from "react-router-dom";

const ChooseWorld = () => {
  const classes = chooseWorldStyles();
  return (
    <div className={classes.rootContainer}>
      <hl className={classes.title}> CHOOSE YOUR WORLD </hl>
      <div className={classes.worldContainer}>
        <Link to="fireflyworld" className={classes.links}>
          <WorldCard title={"Fireflies"} img={fireflyWorld1} />
        </Link>
        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <div className={classes.buttonContainer}>
          <div className={classes.backButton}>
            <SecondaryButton text={"BACK"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseWorld;
