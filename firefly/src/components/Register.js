import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";
import WearingNerdGlasses from "./../images/WearingNerdGlasses.png";
import firebaseApp from "./FirebaseLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./../styles/register.scss";

const { gql } = require("apollo-boost");

const USER_EXISTS = gql`
  query getUserBy($param: String!, $value: String!) {
    getUserBy(param: $param, value: $value) {
      email
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      id
      email
    }
  }
`;

// Staging server at "https://projectfirefly-staging.herokuapp.com"
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: currentUser => {
      localStorage.setItem("token", currentUser.idToken);
      const client = new ApolloClient({
        uri: "http://localhost:3300"
      });
      const newUser = {
        email: currentUser.email,
        username: currentUser.email
      };
      client
        .mutate({
          mutation: ADD_USER,
          variables: { input: newUser }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

const RegisterForm = ({ values, errors, touched }) => {
  const [eyeClicked, setEyeClicked] = useState(false);

  return (
    <div className="sign-in-container">
      <h1 className="sign-up-header"> Sign Up</h1>

      <div className="forms-container">
        <div className="forms-box">
          <Form className="forms-box__formik">
            <div className="forms-field">
              <h2 className="forms-field-title">Email</h2>
              <Field type="email" name="email" className="forms-box__field" />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="forms-field">
              <h2 className="forms-field-title">Password</h2>
              <div className="eye-stacking">
                <Field
                  type={eyeClicked ? "text" : "password"}
                  name="password"
                  className="forms-box__field"
                />
                <FontAwesomeIcon
                  className="eye-icon"
                  icon={faEye}
                  onClick={() => setEyeClicked(!eyeClicked)}
                />
              </div>
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="forms-field">
              <h2 className="forms-field-title">Confirm Password</h2>
              <div className="eye-stacking">
                <Field
                  type={eyeClicked ? "text" : "password"}
                  name="passwordConfirm"
                  className="forms-box__field"
                />
                <FontAwesomeIcon
                  className="eye-icon"
                  icon={faEye}
                  onClick={() => setEyeClicked(!eyeClicked)}
                />
              </div>
              {touched.passwordConfirm &&
                values.password !== values.passwordConfirm && (
                  <p className="error">Passwords do not match</p>
                )}
            </div>
            <div className="checkbox-terms">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span class="checkmark" />
              </label>
              <p className="checkbox-terms__terms-text">
                I agree to the{" "}
                <a href="google.com" className="link">
                  Terms and Conditions
                </a>
              </p>
            </div>
            <button type="submit" className="forms-box__formik-button">
              Sign Up
            </button>
            <a href="google.com" className=" link switch-account">
              I already have an account
            </a>
          </Form>
        </div>
        <div>
          <h2 className="sign-up-or">OR</h2>
        </div>
        <div className="forms-box">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <img
            src={WearingNerdGlasses}
            alt="firefly-nerd"
            className="firefly-nerd"
          />
        </div>
      </div>
    </div>
  );
};

const Register = withFormik({
  mapPropsToValues({ email, password, passwordConfirm }) {
    return {
      email: email || "",
      password: password || "",
      passwordConfirm: passwordConfirm || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),

  handleSubmit(values, { setSubmitting }) {
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    const email = values.email;
    const password = values.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const newUser = {
          email: values.email,
          username: values.email
        };
        client
          .mutate({
            mutation: ADD_USER,
            variables: { input: newUser }
          })
          .then(res => {
            console.log(res.data);
            setSubmitting(false);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
})(RegisterForm);

export default Register;
