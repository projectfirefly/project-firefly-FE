//this is for using during development so we can quickly move between different components and see what we are doing

import React, { useContext, useEffect } from "react";

import ChildProfileStore, {
  childContext,
  GET_USER_INFO,
  GET_PROFILES_AND_AVATARS,
  UPDATE_SELECTED
} from "../context/ChildProfiles/ChildProfileStore";

import firebase from "firebase";

//material

//routing
import { Route, Redirect, Switch } from "react-router-dom";
import Menu from "../components/Menu";
import FireBaseLogin from "../components/FirebaseLogin";
import MyFireflyPage from "../components/childProfile/MyFireflyPage";
import CustomizeFireflyPage from "../components/childProfile/CustomizeFireflyPage";
import TabletLandingPage from "../components/TabletLandingPage";
import ChooseProfilePage from "../components/ChildProfiles/ChooseProfilePage";
import SignUpPage from "../components/SignUpPage";
import SignInPage from "../components/SignInPage";
import MultiStepRegistration from "../components/MultiStepRegistration";

import MyAccountPage from "../components/MyAccountPage";
import EditProfilePage from "../components/CreateAndEditProfiles/EditProfilePage";
import AddANewProfilePage from "../components/CreateAndEditProfiles/AddANewProfilePage";
import StartGame from "../components/StartGame";
import CodeView from "../components/CodeView";

import BackendTester from "../components/backendTester/BackendTester";

export default function Layout(props) {
  const [context, dispatch] = useContext(childContext);

  //Getting my user information from Firestore
  //This is a monster function, I'll fix it some day.
  useEffect(() => {
    if (props.logged) {
      const db = firebase.firestore();
      const uid = firebase.auth().currentUser.uid;
      db.collection("users")
        .doc(uid)
        .get()
        .then(snapshot => {
          const userInfo = snapshot.data();
          return { ...userInfo, id: snapshot.id };
        })
        .then(userInfo => {
          db.collection("users")
            .doc(uid)
            .collection("information")
            .get()
            .then(snapshot => {
              const docList = snapshot.docs.map(doc => {
                const document = doc.data();
                return { ...document, id: doc.id };
              });
              dispatch({
                type: GET_USER_INFO,
                payload: {
                  ...userInfo,
                  information: docList[0]
                }
              });
            })
            .then(() => {
              const profiles = db
                .collection("users")
                .doc(uid)
                .collection("profiles")
                .get()
                .then(snapshot => {
                  const childList = snapshot.docs.map(doc => {
                    const child = doc.data();
                    return { ...child, id: doc.id };
                  });
                  return childList;
                })
                .then(childList => {
                  const childAndAvatar = childList.map(child => {
                    const avatar = db
                      .collection("users")
                      .doc(uid)
                      .collection("profiles")
                      .doc(child.id)
                      .collection("avatar")
                      .get()
                      .then(snapshot => {
                        const document = snapshot.docs.map(doc => {
                          const avatarDoc = doc.data();
                          return {
                            ...avatarDoc,
                            id: doc.id
                          };
                        });
                        return document[0];
                      })
                      .then(avatar => {
                        dispatch({
                          type: GET_PROFILES_AND_AVATARS,
                          payload: {
                            ...child,
                            avatar: avatar
                          }
                        });
                      });
                  });
                  if (childList[0]) {
                    dispatch({
                      type: UPDATE_SELECTED,
                      payload: childList[0].id
                    });
                  }
                });
            });
        });
    }
  }, [dispatch, props.logged]);

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
          logged === false ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }

  return (
    <div className="app">
      <div>
        <Menu />
      </div>
      <main className="app__content">
        <Switch>
          <PublicRoute
            logged={props.logged}
            exact
            path="/"
            component={TabletLandingPage}
          />
          <PublicRoute
            logged={props.logged}
            path="/login"
            component={FireBaseLogin}
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
          <PrivateRoute
            logged={props.logged}
            path="/codeview"
            component={CodeView}
          />
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
