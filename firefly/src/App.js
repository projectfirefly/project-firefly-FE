import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DevMenu from "./views/DevMenu";
import firebase from "firebase";

import ChildProfileStore, {
  childContext,
  GET_USER,
} from "./context/ChildProfiles/ChildProfileStore";

import GameContextStore, {
    gameContext,
    ADD_WORLD
} from "./context/Game/GameStore";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";

//google analytics code start//
import ReactGA from "react-ga";
import { Loader } from "./utils/Loaders/loaders";
import LoadedChecker from "./utils/Loaders/LoadedChecker";
ReactGA.initialize("UA-143905861-1");
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
    console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)
    const [loggedIn, setLoggedIn] = useState(false);

    firebase.auth().onAuthStateChanged(user => {
        // console.log("hello");
        if (user) {
            // console.log("If Statement");
            setLoggedIn(true);
        } else {
            // console.log("Else Statement")
            setLoggedIn(false);
        }
    });

    return (
        <BrowserRouter>
            <ChildProfileStore>
                <GameContextStore>
                    <DevMenu logged={loggedIn}/>
                </GameContextStore>
            </ChildProfileStore>
        </BrowserRouter>
    );
}

export default App;
