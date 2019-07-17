//this is for using during development so we can quickly move between different components and see what we are doing

import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "../components/Menu";
import FireBaseLogin from "../components/FirebaseLogin";
import ChooseProfile from "../components/childProfile/ChooseProfile";
import ProfileView from "../components/childProfile/ProfileView";
import SelectAvatar from "../components/childProfile/SelectAvatar";
import Main from "../components/Main";
import "../styles/devMenu.scss";

export default function Layout() {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Menu />
      </div>
      <main className="app__content">
        <Switch>
          <Route path="/login" component={FireBaseLogin} />
          <Route path="/" component={Main} />
          <Route path="/chooseprofile" component={ChooseProfile} />
          <Route path="/profileview" component={ProfileView} />
          <Route path="/selectavatar" component={SelectAvatar} />
        </Switch>
      </main>
    </div>
  );
}
