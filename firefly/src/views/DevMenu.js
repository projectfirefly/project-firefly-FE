//this is for using during development so we can quickly move between different components and see what we are doing

import React, { useContext, useEffect } from "react";

import ChildProfileStore, {
    childContext,
    GET_USER_INFO,
    GET_PROFILES_AND_AVATARS,
} from "../context/ChildProfiles/ChildProfileStore";

import firebase from "firebase";

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
import AccountPage from "../components/AccountPage";
import Accessories from "../components/childProfile/Accessories";
import EditProfile from "../components/CreateAndEditProfiles/EditProfile";
import ActuallyCreateProfile from "../components/CreateAndEditProfiles/ActuallyCreateProfile";
import BackendTester from "../components/backendTester/BackendTester";

export default function Layout(props) {
    const [context, dispatch] = useContext(childContext);

    //Getting my user information from Firestore
    //This is a monster function, I'll fix it some day.
    useEffect(() => {
        if (props.logged) {
            const db = firebase.firestore();
            const uid = firebase.auth().currentUser.uid;
            const userInfo = db
                .collection("users")
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
                                    information: docList[0],
                                },
                            });
                        })
                        .then(() => {
                            const children = db
                                .collection("users")
                                .doc(uid)
                                .collection("children")
                                .get()
                                .then(snapshot => {
                                    const childList = snapshot.docs.map(doc => {
                                        const child = doc.data();
                                        return { ...child, id: doc.id };
                                    });
                                    return childList;
                                })
                                .then(childList => {
                                    const childAndAvatar = childList.map(
                                        child => {
                                            const avatar = db.collection("users")
                                                .doc(uid)
                                                .collection("children")
                                                .doc(child.id)
                                                .collection("avatar")
                                                .get()
                                                .then(snapshot => {
                                                    const document = snapshot.docs.map(
                                                        doc => {
                                                            const avatarDoc = doc.data();
                                                            return {
                                                                ...avatarDoc,
                                                                id: doc.id,
                                                            };
                                                        }
                                                    );
                                                    return document[0];
                                                }).then(avatar => {
                                                    dispatch({
                                                        type: GET_PROFILES_AND_AVATARS,
                                                        payload: {...child, avatar: avatar}
                                                    })
                                                })
                                        }
                                    );
                                });
                        });
                });
        }
    }, [props.logged]);

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
                    <Route
                        path="/createprofile"
                        component={CustomizeFireflyPage}
                    />

                    <Route path="/choose-login" component={TabletLandingPage} />
                    <Route path="/register" component={SignUpPage} />
                    <Route
                        path="/registration"
                        component={MultiStepRegistration}
                    />
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
                    <Route
                        exact
                        path="/slider-test"
                        component={ColorSliderTest}
                    />
                    <Route exact path="/stepper-test" component={StepperTest} />
                    <Route exact path="/account" component={AccountPage} />
                    <Route exact path="/accessories" component={Accessories} />

                    <Route exact path="/edit-profile" component={EditProfile} />
                    <Route
                        exact
                        path="/create-profile"
                        component={ActuallyCreateProfile}
                    />
                    <Route
                        exact
                        path="/backend-tester"
                        component={BackendTester}
                    />
                </Switch>
            </main>
        </div>
    );
}
