import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DevMenu from "./views/DevMenu";
import firebase from "firebase";

import GameContextStore from "./context/Game/GameStore";
import ChildProfileStore from "./context/ChildProfiles/ChildProfileStore";

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
  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  // console.log("App Render");

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      if (loggedIn === false) {
        setLoggedIn(true);
      }
    } else {
      if (loggedIn) {
        setLoggedIn(false);
        setIsLoading(true);
      }
    }
  });

  return (
    <BrowserRouter>
      {isLoading ? <Loader /> : <div />}
      <ChildProfileStore>
        <GameContextStore>
          {isLoading ? (
            <LoadedChecker logged={loggedIn} setIsLoading={setIsLoading} />
          ) : (
            <DevMenu isLoading={isLoading} setIsLoading={setIsLoading} logged={loggedIn} />
          )}
        </GameContextStore>
      </ChildProfileStore>
    </BrowserRouter>
  );
}

export default App;
