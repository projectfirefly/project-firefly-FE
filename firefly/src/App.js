import React from "react";
import "./App.css";

import FirebaseLogin from "./components/FirebaseLogin";
import Main from "./components/Main";
import ChildProfiles from "./components/ChildProfiles/ChildProfiles";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

//google analytics code start//
import ReactGA from 'react-ga';
ReactGA.initialize('UA-143905861-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
    return (
        <div className="App">

            <Route exact path="/firebase-login" component={FirebaseLogin} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/child-profile" component={ChildProfiles} />
            <Link to="/firebase-login">FIREBASE LOGIN</Link> <br/>
            <Link to="/main">MAIN</Link> <br/>
            <Link to="/child-profile">CHILD PROFILE, CLICK HERE FOR THE COOL STUFF</Link> <br/>

        </div>
    );
}

export default App;
