import React from 'react';
import "../styles/TabletLandingPage.scss";
import WelcomeToFirefly from "./../images/WelcomeToFirefly.png";

import { Link } from 'react-router-dom';

const TabletLandingPage = () => {



    return(
        <div className='choose-login-container'>
        <span className='logo'>
        <img src={WelcomeToFirefly} alt='WelcomeToFirefly' className='logo__image'/>
        </span>
        <div className='buttons'>
            <Link styles={{"text-decoration": "none"}} to='/register'><button className='buttons__get-started'>Get Started</button></Link>
            <Link styles={{"text-decoration": "none"}} to='/sign-in'><button className='buttons__already-have-account'>I Already Have An Account</button></Link>
        </div>
        </div>

    )
}

export default TabletLandingPage