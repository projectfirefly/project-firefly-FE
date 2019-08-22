import React, { useState } from "react";
import firebase from "firebase";

import { BrowserRouter } from "react-router-dom";
import DevMenu from "./views/DevMenu";
import { Loader } from "./utils/Loaders/loaders";
import LoadedChecker from "./utils/Loaders/LoadedChecker";

import GameContextStore from "./context/Game/GameStore";
import ChildProfileStore from "./context/ChildProfiles/ChildProfileStore";

import { ThemeProvider } from "@material-ui/styles";
import useTheme from "./styles/theme";
import { createMuiTheme } from "@material-ui/core";

//google analytics code start//
import ReactGA from "react-ga";
ReactGA.initialize("UA-143905861-1");
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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

  const theme = createMuiTheme(useTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {isLoading ? <Loader /> : <div />}
        <ChildProfileStore>
          <GameContextStore>
            {isLoading ? (
              <LoadedChecker logged={loggedIn} setIsLoading={setIsLoading} />
            ) : (
              <DevMenu
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                logged={loggedIn}
              />
            )}
          </GameContextStore>
        </ChildProfileStore>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
