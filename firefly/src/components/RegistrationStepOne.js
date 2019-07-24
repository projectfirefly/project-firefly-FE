import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import "../styles/RegistrationStepOne.scss";


const RegistrationForm = ({ values, errors, touched, step, updateStep }) => {
  
    return (
      <div className="registration-container">
        <div className="registration-forms-container">
          <div className="registration-forms-box">
            <Form className="registration-forms-box__formik">
            <div className='registration-forms-two-field top-buttons'>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">First Name</h2>
                <Field type="text" name="firstName" className="registration-forms-box__field-small" />
                {touched.firstName && errors.firstName && (
                  <p className="error">*Required</p>
                )}
              </div>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">Last Name</h2>
                  <Field
                    name="lastName"
                    className="registration-forms-box__field-small"
                  />
                {touched.lastName && errors.lastName && (
                  <p className="error">*Required</p>
                )}
              </div>
              </div>
              <div className="registration-forms-field">
                <h2 className="registration-forms-field-title-big">Address</h2>
                  <Field
                    name="address"
                    className="registration-forms-box__field"
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
                  />
                {touched.city && errors.city && (
                    <p className="error-big">*Required</p>
                  )}
              </div>
              <div className='registration-forms-two-field bottom-buttons'>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">State</h2>
                  <Field
                    name="state"
                    className="registration-forms-box__field-small"
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
                  />
                {touched.zipCode && errors.zipCode && (
                    <p className="error">*Required</p>
                  )}
              </div>
              </div>
            </Form>
          </div>
          <div className='registration-buttons'>
            <button className={step===0 ? 'none' : 'registration-buttons__back'}>
                Back
            </button>
 
            <button className='registration-buttons__next' onClick={()=>updateStep('add')}>
                Next
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
      firstName: Yup.string()
        .required(),
      lastName: Yup.string()
        .required(),
      address: Yup.string()
        .required(),
      city: Yup.string()
        .required(),
      state: Yup.string()
        .required(),
      zipCode: Yup.string()
        .required(),
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