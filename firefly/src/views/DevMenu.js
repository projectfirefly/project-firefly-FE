//this is for using during development so we can quickly move between different components and see what we are doing

import React from "react";

//material

//routing
import { Switch, Route } from "react-router-dom";
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

export default function Layout() {
  return (
    <div className="app">
      <div>
        <Menu />
      </div>
      <main className="app__content">
        <Switch>
          <Route path="/login" component={FireBaseLogin} />
          <Route exact path="/" component={TabletLandingPage} />

          <Route path="/myfirefly" component={MyFireflyPage} />
          <Route path="/customize" component={CustomizeFireflyPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/registration" component={MultiStepRegistration} />
          <Route path="/signin" component={SignInPage} />
          <Route exact path="/choose-profile" component={ChooseProfilePage} />
          <Route exact path="/account" component={MyAccountPage} />
          <Route exact path="/editprofile" component={EditProfilePage} />
          <Route exact path="/addprofile" component={AddANewProfilePage} />
          <Route path = "/startgame" component={StartGame}/>
        </Switch>
      </main>
    </div>
  );
}
