//this is for using during development so we can quickly move between different components and see what we are doing

import React from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "../components/Menu";
import FireBaseLogin from "../components/FirebaseLogin";
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
        </Switch>
      </main>
    </div>
  );
}
