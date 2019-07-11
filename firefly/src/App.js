import React from "react";
import "./App.css";

import FirebaseLogin from "./components/FirebaseLogin";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">

      <FirebaseLogin />
      <Main />

    </div>
  );
}

export default App;
