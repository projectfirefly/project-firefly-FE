import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const ErrorText = styled.p`
  font-size: 10rem;
  color: red;
`;

const LoginForm = ({ errors, touched, isSubmitting }) => {
  return (
    <div>
      <h3>Create New User</h3>
      <Form>
        <div>
          {touched.email && errors.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <div>
          {touched.password && errors.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <Field
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    axios.post("https://projectfirefly-staging.herokuapp.com/register", {
      username: values.email,
      password: values.password
    });
  }
})(LoginForm);

export default FormikApp;
