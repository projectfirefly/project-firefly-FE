import React from "react";
import "./App.css";
import FormikApp from "./components/LoginForm";

//google analytics code start//
import ReactGA from 'react-ga';
ReactGA.initialize('UA-143905861-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
  return (
    <div className="App">
      <FormikApp />
    </div>
  );
}

export default App;
