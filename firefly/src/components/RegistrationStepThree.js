import React, { useState } from "react";
import ApolloClient from "apollo-boost";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import TutorialOne from "./../images/Step3Tutorial-1.png";
import TutorialTwo from "./../images/Step3Tutorial-2.png";

import "../styles/RegistrationStepThree.scss";

library.add(faArrowUp, faArrowDown);

const RegistrationStepThree = ({
  values,
  errors,
  touched,
  step,
  updateStep
}) => {
  return (
    <div className="registration-container">
      <div className="registration-forms-container">
        <div className="registation-forms-boxes">
          <div className="registration-forms-box3">
            <div className="registration-step3-box">
              <h2 className="step3-header">Access My Account</h2>
              <i
                class="fas fa-arrow-alt-down"
                style={{
                  color: "#5B4EFF",
                  alignSelf: "flex-end",
                  marginRight: "10%",
                  fontSize: "1.4rem",
                  marginTop: "14px"
                }}
              />

              <img
                className="step3-image"
                src={TutorialOne}
                alt="tutorial-one"
                style={{ marginTop: "4px" }}
              />
            </div>
          </div>

          <div className="registration-forms-box3">
            <div className="registration-step3-box">
              <h2 className="step3-header">Manage Account</h2>
              <img
                className="step3-image"
                src={TutorialTwo}
                alt="tutorial-two"
              />
              <ul className="step3-list">
                <li>Manage Profiles</li>
                <li>Update Account Information</li>
                <li>Manage Payment Information</li>
              </ul>
            </div>
          </div>

          <div className="registration-forms-box3">
            <div className="registration-step3-box">
              <h2 className="step3-header">Start Our Adventure</h2>
              <img
                className="step3-image"
                src={TutorialTwo}
                alt="tutorial-two"
                style={{ marginBottom: "4px" }}
              />
              <i
                class="fas fa-arrow-alt-up"
                style={{
                  color: "#5B4EFF",
                  alignSelf: "flex-end",
                  marginRight: "22%",
                  fontSize: "1.4rem"
                }}
              />
            </div>
          </div>
        </div>
        <div className="registration-buttons">
          <button
            className={step === 0 ? "none" : "registration-buttons__back"}
            onClick={() => updateStep("subtract")}
          >
            Back
          </button>

          <button
            className="registration-buttons__next"
            onClick={() => updateStep("add")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepThree;
