//this is for using during development so we can quickly move between different components and see what we are doing

import React from "react";

//material

//routing
import { Switch, Route } from "react-router-dom";
import Menu from "../components/Menu";
import FireBaseLogin from "../components/FirebaseLogin";
import MyFireflyPage from "../components/childProfile/MyFireflyPage";
import CustomizeFireflyPage from "../components/childProfile/CustomizeFireflyPage";
import Main from "../components/Main";
import TabletLandingPage from "../components/TabletLandingPage";
import ChooseProfilePage from "../components/ChildProfiles/ChooseProfilePage";
import ChildProfileDialog from "../components/ChildProfiles/ChildProfileDialog";
import SignUpPage from "../components/SignUpPage";
import ColorSliderTest from "../components/ColorSlider/ColorSliderTest";
import SignInPage from "../components/SignInPage";
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

          <Route path="/myfireflypage" component={MyFireflyPage} />
          <Route path="/createprofile" component={CustomizeFireflyPage} />

          <Route path="/choose-login" component={TabletLandingPage} />
          <Route path="/register" component={SignUpPage} />
          <Route path="/registration" component={MultiStepRegistration} />
          <Route path="/sign-in" component={SignInPage} />
          <Route
            exact
            path="/child-profiles-dialog"
            component={ChildProfileDialog}
          />
          <Route
            exact
            path="/child-profiles-main"
            component={ChooseProfilePage}
          />
          <Route exact path="/slider-test" component={ColorSliderTest} />
          <Route exact path="/stepper-test" component={StepperTest} />
          <Route exact path="/accessories" component={Accessories} />

          <Route exact path="/edit-profile" component={EditProfile} />
          <Route
            exact
            path="/create-profile"
            component={ActuallyCreateProfile}
          />
        </Switch>
      </main>
    </div>
  );
}
