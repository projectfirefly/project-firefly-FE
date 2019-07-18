import React from 'react';
import "../styles/chooseLogin.scss";
import WelcomeToFirefly from "./../images/WelcomeToFirefly.png";

const ChooseLogin = () => {

    return(
        <div className='choose-login-container'>
        <span className='logo'>
        <img src={WelcomeToFirefly} alt='WelcomeToFirefly' className='logo__image'/>
        </span>
        <div className='buttons'>
            <button className='buttons__get-started'>Get Started</button>
            <button className='buttons__already-have-account'>I Already Have An Account</button>
        </div>
        </div>

    )
}

export default ChooseLogin