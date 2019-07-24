import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import Firefly from "./../images/Logo.png"

import "./../styles/RegistrationStepTwo.scss";

const { gql } = require("apollo-boost");

const ADD_KID = gql`
  mutation addKid($input: KidInput!) {
    addKid(input: $input) {
      id
      first_name
    }
  }
`;

const AddChild = ({ values, errors, touched, step, updateStep }) => {
  return (
    <div className="registration-container">
    <div className='registration-forms-container'>
        <div className="registration-forms-box">
          <Form className="registration-forms-box__formik">
          <div className='registration-forms-field-container'>
          <div className='registration-firefly-container'>
            <img className='registration-firefly-container__image' src={Firefly} alt='firefly'/>
          </div>
            <div className="registration-forms-field-two">
              <div className='registration-forms-field-two__field'>
              <h2 className="registration-forms-field-title-two">First Name</h2>
              <Field
                type="firstName"
                name="firstName"
                className="registration-forms-box__field"
              />
              {touched.firstName && errors.firstName && (
                <p className="error-step2">*Required</p>
              )}
              </div>
              <div className='registration-forms-field-two__field'>
              <h2 className="registration-forms-field-title-two">Last Name</h2>
              <Field
                type="lastName"
                name="lastName"
                className="registration-forms-box__field"
              />
              {touched.lastName && errors.lastName && (
                <p className="error-step2">*Required</p>
              )}
              </div>
            </div>
            </div>
          </Form>
        </div>
        <div className="registration-forms-box registration-add-child-profile">
            <h2 className='registration-add-child-profile__text'>+ Add another child profile</h2>
        </div>

        <div className='registration-buttons'>
            <button className={step===0 ? 'none' : 'registration-buttons__back'} onClick={()=>updateStep('subtract')}>
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

const AddChildProfile = withFormik({
  mapPropsToValues({ firstName, lastName }) {
    return {
      firstName: firstName || "",
      lastName: lastName || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required()
  }),

  handleSubmit(values) {
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    client
      .mutate({
        mutation: ADD_KID,
        variables: {
          input: {
            first_name: values.firstName,
            last_name: values.lastName
          }
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(AddChild);

export default AddChildProfile;