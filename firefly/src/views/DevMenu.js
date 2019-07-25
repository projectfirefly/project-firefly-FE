//this is for using during development so we can quickly move between different components and see what we are doing

import React from "react";

//material

//routing
import { Switch, Route } from "react-router-dom";
import Menu from "../components/Menu";
import FireBaseLogin from "../components/FirebaseLogin";
import ProfileView from "../components/childProfile/ProfileView";
import CreateProfile from "../components/childProfile/CreateProfile";
import Main from "../components/Main";
import ChooseLogin from "../components/ChooseLogin";
import ChildProfiles from "../components/ChildProfiles/ChildProfiles";
import ChildProfileDialog from "../components/ChildProfiles/ChildProfileDialog";
import Register from "../components/Register";
import ColorSliderTest from "../components/ColorSlider/ColorSliderTest";
import SignIn from "../components/SignIn";
import StepperTest from "../components/Steppers/StepperTest";
import MultiStepRegistration from "../components/MultiStepRegistration";
import Accessories from "../components/childProfile/Accessories";
import EditProfile from "../components/CreateAndEditProfiles/EditProfile";
import ActuallyCreateProfile from "../components/CreateAndEditProfiles/ActuallyCreateProfile";

export default function Layout() {
  return (
    <div className="app">
      <div>
        <Menu />
      </div>
      <main className="app__content">
        <Switch>
          <Route path="/login" component={FireBaseLogin} />
          <Route exact path="/" component={Main} />

          <Route path="/profileview" component={ProfileView} />
          <Route path="/createprofile" component={CreateProfile} />

          <Route path="/choose-login" component={ChooseLogin} />
          <Route path="/register" component={Register} />
          <Route path="/registration" component={MultiStepRegistration} />
          <Route path="/sign-in" component={SignIn} />
          <Route
            exact
            path="/child-profiles-dialog"
            component={ChildProfileDialog}
          />
          <Route exact path="/child-profiles-main" component={ChildProfiles} />
          <Route exact path="/slider-test" component={ColorSliderTest} />
          <Route exact path="/stepper-test" component={StepperTest} />
          <Route exact path="/accessories" component={Accessories} />

          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/create-profile" component={ActuallyCreateProfile} />
        </Switch>
      </main>
    </div>
  );
}
