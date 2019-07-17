import React from "react";
import { BrowserRouter } from 'react-router-dom';
import DevMenu from './views/DevMenu';


//google analytics code start//
import ReactGA from 'react-ga';
ReactGA.initialize('UA-143905861-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

function App() {
  return (
    <BrowserRouter>
    <DevMenu/>
    </BrowserRouter>
  );
}

export default App;
