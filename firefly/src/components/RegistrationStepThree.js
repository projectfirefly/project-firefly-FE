import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import TutorialOne from "./../images/Step3Tutorial-1.png";
import TutorialTwo from "./../images/Step3Tutorial-2.png";

import "../styles/RegistrationStepThree.scss";

const RegistrationForm = ({ values, errors, touched, step, updateStep }) => {
  return (
    <div className="registration-container">
      <div className="registration-forms-container">
        <div className="registation-forms-boxes">
          <div className="registration-forms-box3">
            <div className="registration-step3-box">
              <h2 className="step3-header">Access My Account</h2>
              <img
                className="step3-image"
                src={TutorialOne}
                alt="tutorial-one"
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
            My Account
          </button>
        </div>
      </div>
    </div>
  );
};

const RegistrationStepOne = withFormik({
  mapPropsToValues({ firstName, lastName, address, city, state, zipCode }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      address: address || "",
      city: city || "",
      state: state || "",
      zipCode: zipCode || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipCode: Yup.string().required()
  }),

  handleSubmit(values, { setSubmitting }) {
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    const firstName = values.firstName;
    const lastName = values.lastName;
    const address = values.address;
    const city = values.city;
    const state = values.state;
    const zipCode = values.zipCode;
  }
})(RegistrationForm);

export default RegistrationStepOne;
