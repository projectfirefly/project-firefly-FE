import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";
import firebaseApp from "./FirebaseLogin";

const { gql } = require("apollo-boost");

const USER_EXISTS = gql`
  query getUserBy($param: String!, $value: String!) {
    getUserBy(param: $param, value: $value) {
      username
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      id
      username
      first_name
    }
  }
`;

// Staging server at "https://projectfirefly-staging.herokuapp.com/register"
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
      client
        .query({
          query: USER_EXISTS,
          variables: {
            param: "username",
            value: currentUser.email
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.getUserBy) {
            window.alert("Email has already been registered");
          } else {
            const newUser = {
              username: currentUser.email,
              first_name: currentUser.displayName
            };
            client
              .mutate({
                mutation: ADD_USER,
                variables: { input: newUser }
              })
              .then(res => {
                console.log("New user created");
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

const RegisterForm = ({ values, errors, touched }) => {
  return (
    <div className="regForm">
      <Form>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email address" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
        {touched.passwordConfirm &&
          values.password !== values.passwordConfirm && (
            <p>Passwords do not match!</p>
          )}
        <Field
          type="password"
          name="passwordConfirm"
          placeholder="Confirm password"
        />
        <button type="submit">Submit</button>
      </Form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
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
    console.log(values);
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    client
      .query({
        query: USER_EXISTS,
        variables: {
          param: "username",
          value: values.email
        }
      })
      .then(res => {
        console.log(res);
        if (res.data.getUserBy) {
          window.alert("Email has already been registered");
        } else {
          const newUser = {
            username: values.email,
            first_name: values.email
          };
          client
            .mutate({
              mutation: ADD_USER,
              variables: { input: newUser }
            })
            .then(res => {
              console.log("New user created");
              console.log(res.data);
              setSubmitting(false);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
})(RegisterForm);

export default Register;
