import React, { useState, useContext, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import TutorialOne from "./../../images/Step3Tutorial-1.png";
import TutorialTwo from "./../../images/Step3Tutorial-2.png";

//Context
import {
  UPDATE_USER,
  ADD_PROFILE,
  childContext,
} from "../../context/ChildProfiles/ChildProfileStore";
import { updateUser, addProfile } from "../../utils/firebaseInteractions";

import "../../styles/RegistrationStepThree.scss";

library.add(faArrowUp, faArrowDown);

const RegistrationStepThree = ({
  step,
  updateStep,
  info,
  profiles,
}) => {
  const [childProfileState, dispatch] = useContext(childContext);
  const [finishedLoading, setFinishedLoading] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    information: {
      city: "",
      address: "",
      state: "",
      zip: "",
    },
  });

  useEffect(() => {
    if (childProfileState.loaded && !finishedLoading) {
      setUpdatedUser(childProfileState.user);
      setFinishedLoading(true);
    }
  }, [childProfileState, finishedLoading]);

  const sendUserInfo = info => {
    const newUpdatedUser = {
      ...updatedUser,
      first_name: info.first_name,
      last_name: info.last_name,
      information: {
        ...updatedUser.information,
        address: info.address,
        city: info.city,
        state: info.state,
        zip: info.zipCode,
      },
    };
    updateUser(UPDATE_USER, newUpdatedUser, dispatch);
  };

  const addProfiles = profiles => {
    // console.log("profiles:", profiles);
    profiles.map(profile => {
      if (profile.first_name !== "" || profile.last_name !== "") {
        addProfile(ADD_PROFILE, profile, dispatch);
      }
    });
  };

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
                  marginTop: "14px",
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
                  fontSize: "1.4rem",
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
            BACK
          </button>

          <button
            className="registration-buttons__next"
            onClick={() => {
              sendUserInfo(info);
              addProfiles(profiles);
            }}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepThree;
