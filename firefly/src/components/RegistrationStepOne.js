import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import "../styles/RegistrationStepOne.scss";

const RegistrationForm = ({
  values,
  errors,
  touched,
  step,
  updateStep,
  info,
  handleInfoChanges
}) => {
  return (
    <div className="registration-container">
      <div className="registration-forms-container">
        <div className="registration-forms-box">
          <Form className="registration-forms-box__formik">
            <div className="registration-forms-two-field top-buttons">
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">First Name</h2>
                <Field
                  type="text"
                  name="first_name"
                  className="registration-forms-box__field-small"
                  value={info.firstName}
                  onChange={e => handleInfoChanges(e)}
                />
                {touched.first_name && errors.first_name && (
                  <p className="error">*Required</p>
                )}
              </div>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">Last Name</h2>
                <Field
                  name="last_name"
                  type="text"
                  className="registration-forms-box__field-small"
                  value={info.last_name}
                  onChange={e => handleInfoChanges(e)}
                />
                {touched.last_name && errors.last_name && (
                  <p className="error">*Required</p>
                )}
              </div>
            </div>
            <div className="registration-forms-field">
              <h2 className="registration-forms-field-title-big">Address</h2>
              <Field
                name="address"
                className="registration-forms-box__field"
                type="text"
                value={info.address}
                onChange={e => handleInfoChanges(e)}
              />
              {touched.address && errors.address && (
                <p className="error-big">*Required</p>
              )}
            </div>
            <div className="registration-forms-field">
              <h2 className="registration-forms-field-title-big">City</h2>
              <Field
                name="city"
                className="registration-forms-box__field"
                type="text"
                value={info.city}
                onChange={e => handleInfoChanges(e)}
              />
              {touched.city && errors.city && (
                <p className="error-big">*Required</p>
              )}
            </div>
            <div className="registration-forms-two-field bottom-buttons">
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">State</h2>
                <Field
                  name="state"
                  className="registration-forms-box__field-small"
                  type="text"
                  value={info.state}
                  onChange={e => handleInfoChanges(e)}
                />
                {touched.state && errors.state && (
                  <p className="error">*Required</p>
                )}
              </div>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">Zip Code</h2>
                <Field
                  name="zipCode"
                  className="registration-forms-box__field-small"
                  type="text"
                  value={info.zipCode}
                  onChange={e => handleInfoChanges(e)}
                />
                {touched.zipCode && errors.zipCode && (
                  <p className="error">*Required</p>
                )}
              </div>
            </div>
          </Form>
        </div>
        <div className="registration-buttons">
          <button
            className={step === 0 ? "none" : "registration-buttons__back"}
          >
            Back
          </button>

          <button
            className="registration-buttons__next"
            onClick={() => updateStep("add")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const RegistrationStepOne = withFormik({
  mapPropsToValues({ first_name, last_name, address, city, state, zipCode }) {
    return {
      first_name: first_name || "",
      last_name: last_name || "",
      address: address || "",
      city: city || "",
      state: state || "",
      zipCode: zipCode || ""
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipCode: Yup.string().required()
  }),

  handleSubmit(values, { setSubmitting }) {
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    const first_name = values.first_name;
    const last_name = values.last_name;
    const address = values.address;
    const city = values.city;
    const state = values.state;
    const zipCode = values.zipCode;
  }
})(RegistrationForm);

export default RegistrationStepOne;
