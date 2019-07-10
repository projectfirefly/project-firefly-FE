import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ errors, touched, isSubmitting }) => {
  return (
    <div>
      <Form>
        <div>
          {touched.email && errors.email && (
            <p className="errorText">{errors.email}</p>
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
            <p className="errorText">{errors.password}</p>
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
