import React from "react";
import "./App.css";

import FirebaseLogin from "./components/FirebaseLogin";
import Main from "./components/Main";


//google analytics code start//
import ReactGA from 'react-ga';
ReactGA.initialize('UA-143905861-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
  return (
    <div className="App">

      <FirebaseLogin />
      <Main />

    </div>
  );
}

export default App;
