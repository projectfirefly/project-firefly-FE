import React from "react";
import "../../styles/LoggedOutStartPage.scss";
import WelcomeToFirefly from "./../../images/WelcomeToFirefly.png";

import { Link } from "react-router-dom";

const LoggedOutStartPage = () => {
  return (
    <div className="choose-login-container">
      <span className="logo">
        <img
          src={WelcomeToFirefly}
          alt="WelcomeToFirefly"
          className="logo__image"
        />
      </span>
      <div className="buttons">
        <Link styles={{ "text-decoration": "none" }} to="/signup">
          <button className="buttons__get-started">Get Started</button>
        </Link>
        <Link styles={{ "text-decoration": "none" }} to="/signin">
          <button className="buttons__already-have-account">
            I Already Have An Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutStartPage;
