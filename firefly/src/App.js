import React from "react";
import "./App.css";
import FormikApp from "./components/LoginForm";
import World from "./components/World";

function App() {
    return (
        <div className="App">
            <FormikApp />
            <World />
        </div>
    );
}

export default App;
