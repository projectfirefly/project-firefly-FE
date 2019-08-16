import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import FFanim from "../../../assets/animations/FFanim";

const FireflyWorld = () => {
  const classes = fireflyStyles();

  return (
    <div className={classes.body}>
      <div className={classes.rootContainer}>
        <div className={classes.fireflyContainer}>
          <FFanim
            height={129}
            width={132}
            accessory="none"
            color={642}
            awake={true}
          />
          <div className={classes.tempFirefly}>
            <FFanim
              height={129}
              width={132}
              accessory="none"
              color={642}
              awake={false}
            />
          </div>
          <div className={classes.tempFirefly2}>
            <FFanim
              height={129}
              width={132}
              accessory="none"
              color={142}
              awake={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireflyWorld;
