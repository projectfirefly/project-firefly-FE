import React from "react";
import { BrowserRouter } from 'react-router-dom';
import DevMenu from './views/DevMenu';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

//google analytics code start//
import ReactGA from 'react-ga';
import ChildProfileStore from "./context/ChildProfiles/ChildProfileStore";
ReactGA.initialize('UA-143905861-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
    return (
        <BrowserRouter>
            <ChildProfileStore>
                <DevMenu />
            </ChildProfileStore>
        </BrowserRouter>
    );
}

export default App;
