import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase";
import {
  addWorld,
  removeWorld,
  getWorld
} from "../../../utils/firebaseInteractions";

import chooseWorldStyles from "./ChooseWorldStyles";
import WorldCard from "./WorldCard";
import fireflyWorld1 from "./fireflyWorld1.png";
import lockedWorld from "./lockedWorld.png";
import { SecondaryButton } from "../../../utils/buttons/SecondaryButton";
import { Link } from "react-router-dom";

//importing the stores
import { gameContext, UPDATE_SELECTED } from "../../../context/Game/GameStore";
import { childContext } from "../../../context/ChildProfiles/ChildProfileStore";

const ChooseWorld = () => {
  //making the states from the stores
  const [context, dispatch] = useContext(childContext);
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [worldArr, updatedWorldArr] = useState();
  useEffect(() => {
    getWorld(context.selected.id, worldDispatch);
    console.log(worldContext, "this is the world context form useEffect");
    updatedWorldArr(worldContext);
  },[worldArr]);

  console.log(worldArr, "this is the world array");

  const GameState = world => {
    worldDispatch({ type: UPDATE_SELECTED, payload: world.id });
  };

  //this is the style
  const classes = chooseWorldStyles();
  const defaultWorld = { worldName: "Main World" };
  return (
    // console.log(worldContext),
    <div className={classes.rootContainer}>
      <hl className={classes.title}> CHOOSE YOUR WORLD </hl>
      <div className={classes.worldContainer}>
        {/* {worldArr.worlds[0].worldName !== "Main World"
          ? addWorld(context.selected.id, defaultWorld, worldDispatch) && (
              <div> TEST!!! </div>
            )
          : worldArr.worlds.map(world => {
              // console.log(worldContext.worlds.length)
              return (
                <Link
                  to="fireflyworld"
                  className={classes.links}
                  onClick={() => GameState(world)}
                >
                  <WorldCard title={`${world.worldName}`} img={fireflyWorld1} />
                </Link>
              );
            })} */}
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
