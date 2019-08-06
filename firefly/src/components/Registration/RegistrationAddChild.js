import React from "react";

import Firefly from "./../../images/Logo.png";

import "./../../styles/RegistrationStepTwo.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const RegistrationAddChild = ({
  clickedClose,
  idx,
  profile,
  profiles,
  handleChanges
}) => {
  const handleChange = e => {
    handleChanges(e, idx);
  };

  return (
    <div className="registration-forms-box-2">
      <FontAwesomeIcon
        icon="times"
        className={profiles.length === 1 ? "none" : "close-icon"}
        onClick={() => clickedClose(idx)}
      />
      <form className="registration-forms-box__formik">
        <div className="registration-forms-field-container">
          <div className="registration-firefly-container">
            <img
              className="registration-firefly-container__image"
              src={Firefly}
              alt="firefly"
            />
          </div>
          <div className="registration-forms-field-two">
            <div className="registration-forms-field-two__field">
              <h2 className="registration-forms-field-title-two">First Name</h2>
              <input
                type="text"
                name="first_name"
                className="registration-forms-box__field"
                value={profile.first_name}
                onChange={e => handleChange(e)}
              />
              <p className={profile.first_name === "" ? "error-step2" : "none"}>
                *Required
              </p>
            </div>
            <div className="registration-forms-field-two__field">
              <h2 className="registration-forms-field-title-two">Last Name</h2>
              <input
                type="text"
                name="last_name"
                value={profile.last_name}
                onChange={e => handleChange(e)}
                className="registration-forms-box__field"
              />
              <p className={profile.last_name === "" ? "error-step2" : "none"}>
                *Required
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationAddChild;
