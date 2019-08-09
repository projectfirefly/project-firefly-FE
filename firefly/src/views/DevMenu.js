//this is for using during development so we can quickly move between different components and see what we are doing

import React, { useContext, useEffect, useState } from "react";

import ChildProfileStore, {
  childContext,
  GET_USER_INFO,
  GET_PROFILES_AND_AVATARS,
  UPDATE_SELECTED,
} from "../context/ChildProfiles/ChildProfileStore";

import firebase from "firebase";

//material

//routing
import { Route, Redirect, Switch } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import MyFireflyPage from "../components/childProfile/MyFireflyPage";
import CustomizeFireflyPage from "../components/childProfile/CustomizeFireflyPage";
import LoggedOutStartPage from "../components/StartPages/LoggedOutStartPage";
import ChooseProfilePage from "../components/ChildProfiles/ChooseProfilePage";
import SignUpPage from "../components/SignInAndSignUp/SignUpPage";
import SignInPage from "../components/SignInAndSignUp/SignInPage";
import MultiStepRegistration from "../components/Registration/MultiStepRegistration";

import MyAccountPage from "../components/MyAccount/MyAccountPage";
import EditProfilePage from "../components/CreateAndEditProfiles/EditProfilePage";
import AddANewProfilePage from "../components/CreateAndEditProfiles/AddANewProfilePage";
import StartGame from "../components/StartPages/LoggedInStartPage";
import CodeView from "../components/part2/CodeView";

import BackendTester from "../components/backendTester/BackendTester";

import AnimationTest from "../components/part2/AnimationTest";

import Game from "../components/game/Game";

import { getUser } from "../utils/firebaseInteractions";
import { Loader } from "../utils/Loaders/loaders";

export default function DevMenu(props) {
  const [context, dispatch] = useContext(childContext);
  const [isLoading, setIsLoading] = useState(true);

  //Minimum loading time has passed or not
  const [atLeast, setAtLeast] = useState(false);

  //Getting my user information from Firestore
  useEffect(() => {
    if (props.logged) {
      setIsLoading(true);
      getUser(dispatch).then(() => {
        //Turn off loader if we've passed minimum loading time
        if (atLeast) {
          setIsLoading(false);
        }
      });
    }
  }, [props.logged]);

  //Set minimum loading time
  useEffect(() => {
    setTimeout(() => {
      setAtLeast(true);
    }, 250);
  }, []);

  //If loaded and minimum load time has passed, turn loader off
  useEffect(() => {
    if (atLeast && context.loaded) {
      setIsLoading(false);
    }
  }, [atLeast, context.loaded]);

  return (
    <div className="app">
      {JSON.parse(process.env.REACT_APP_DEV_MENU) ? (
        <div>
          <Menu />
        </div>
      ) : null}
      <main className="app__content">
        <Switch>
          <Route exact path="/loader" component={Loader} />
          <PublicRoute
            logged={props.logged}
            exact
            path="/"
            component={LoggedOutStartPage}
          />
          <PublicRoute
            logged={props.logged}
            path="/signup"
            component={SignUpPage}
          />
          <PublicRoute
            logged={props.logged}
            path="/signin"
            component={SignInPage}
          />
          <PrivateRoute
            logged={props.logged}
            path="/myfirefly"
            component={MyFireflyPage}
          />
          <PrivateRoute
            logged={props.logged}
            path="/customize"
            component={CustomizeFireflyPage}
          />
          <PrivateRoute
            logged={props.logged}
            path="/registration"
            component={MultiStepRegistration}
          />
          <PrivateRoute
            logged={props.logged}
            exact
            path="/choose-profile"
            component={ChooseProfilePage}
          />
          <PrivateRoute
            logged={props.logged}
            exact
            path="/account"
            component={MyAccountPage}
          />
          <PrivateRoute
            logged={props.logged}
            exact
            path="/editprofile"
            component={EditProfilePage}
          />
          <PrivateRoute
            logged={props.logged}
            exact
            path="/addprofile"
            component={AddANewProfilePage}
          />
          <PrivateRoute
            logged={props.logged}
            path="/startgame"
            component={StartGame}
          />
          <Route logged={props.logged} path="/codeview" component={CodeView} />
          <Route
            logged={props.logged}
            path="/animations"
            component={AnimationTest}
          />
          <Route logged={props.logged} path="/game" component={Game} />
          <PrivateRoute
            logged={props.logged}
            exact
            path="/backend-tester"
            component={BackendTester}
          />
        </Switch>
      </main>
    </div>
  );
}

function PrivateRoute({ component: Component, logged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        logged === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, logged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        logged === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/startgame" />
        )
      }
    />
  );
}
